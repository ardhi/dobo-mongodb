async function recordGet ({ schema, id, options = {} } = {}) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)
  const { thrownNotFound = true } = options

  const model = instance.db.collection(schema.modelName)
  const result = await model.findOne({ _id: id })
  if (!result && thrownNotFound) throw this.error('Record \'%s@%s\' not found!', id, schema.name, { statusCode: 404 })
  return { data: result }
}

export default recordGet
