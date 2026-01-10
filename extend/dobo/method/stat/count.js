async function recordCount ({ schema, filter = {}, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)
  const criteria = filter.query ?? {}
  const model = instance.db.collection(schema.name)
  const count = await model.countDocuments(criteria)
  return { data: count }
}

export default recordCount
