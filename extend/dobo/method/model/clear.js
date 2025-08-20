async function modelClear ({ schema, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)
  const model = instance.db.collection(schema.name)
  await model.deleteMany({})
  return true
}

export default modelClear
