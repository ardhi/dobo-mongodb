async function modelDrop ({ schema, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)

  await instance.db.dropCollection(schema.name)
}

export default modelDrop
