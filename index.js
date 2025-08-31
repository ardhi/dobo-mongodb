async function factory (pkgName) {
  const me = this

  class DoboMongodb extends this.app.pluginClass.base {
    static alias = 'dbmongo'
    static dependencies = ['dobo']

    constructor () {
      super(pkgName, me.app)
      this.config = {}
    }
  }

  return DoboMongodb
}

export default factory
