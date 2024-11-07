async function modelExists ({ schema, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)

  return !!(instance.db.listCollections({ name: schema.name }).hasNext())
}

export default modelExists
