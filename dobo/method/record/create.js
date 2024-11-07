import getRecord from './get.js'

async function recordCreate ({ schema, body, options = {} } = {}) {
  const { getInfo } = this.app.dobo
  const { noResult } = options
  const { instance } = getInfo(schema)

  body._id = body.id
  delete body.id
  const model = instance.db.collection(schema.name)
  const resp = await model.insertOne(body)
  if (noResult) return
  return await getRecord.call(this, { schema, id: resp.insertedId })
}

export default recordCreate
