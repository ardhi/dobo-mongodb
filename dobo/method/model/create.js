async function modelCreate ({ schema, options = {} }) {
  const { getInfo } = this.app.dobo
  const { instance } = getInfo(schema)
  const { reduce } = this.app.bajo

  await instance.db.createCollection(schema.modelName)
  const model = instance.db.collection(schema.modelName)
  for (const p of schema.properties) {
    if (p.index || p.unique) await model.createIndex(p.name, p.unique ? { unique: true } : undefined)
  }
  for (const idx of schema.indexes ?? []) {
    const fields = reduce(idx.fields, (obj = {}, i) => { obj[i] = 1; return obj }, {})
    await model.createIndex(fields, idx.unique ? { unique: true } : undefined)
  }
}

export default modelCreate
