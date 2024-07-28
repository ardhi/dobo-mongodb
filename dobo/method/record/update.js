import getRecord from './get.js'

async function recordUpdate ({ schema, id, body, options } = {}) {
  const { getInfo } = this.app.dobo
  const { noResult } = options
  const { instance } = getInfo(schema)

  const old = noResult ? undefined : await getRecord.call(this, { schema, id })
  const model = instance.db.collection(schema.modelName)
  await model.updateOne({ _id: id }, { $set: body })
  if (noResult) return
  const result = await getRecord.call(this, { schema, id })
  return { oldData: old.data, data: result.data }
}

export default recordUpdate
