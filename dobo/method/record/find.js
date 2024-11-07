async function recordFind ({ schema, filter = {}, options = {} } = {}) {
  const { getInfo } = this.app.dobo
  const { omit } = this.app.bajo
  const { instance } = getInfo(schema)
  const { prepPagination } = this.app.dobo
  const { limit, skip, sort, page } = await prepPagination(filter, schema)

  const criteria = filter.query ?? {}
  const model = instance.db.collection(schema.name)
  let count = 0
  if (options.count && !options.dataOnly) count = await model.countDocuments(criteria)
  const cursor = model.find(criteria).limit(limit).skip(skip)
  if (sort) cursor.sort(sort)
  const results = []
  for await (const r of cursor) {
    results.push(r)
  }
  let result = { data: results, page, limit, count, pages: Math.ceil(count / limit) }
  if (!options.count) result = omit(result, ['count', 'pages'])
  return result
}

export default recordFind
