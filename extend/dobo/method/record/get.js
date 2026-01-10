async function recordGet ({ schema, id, options = {} } = {}) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)
  const { silent = true } = options

  const model = instance.db.collection(schema.name)
  const result = await model.findOne({ _id: id })
  if (!result && silent) throw this.error('recordNotFound%s%s', id, schema.name, { statusCode: 404 })
  return { data: result }
}

export default recordGet
