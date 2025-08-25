async function factory (pkgName) {
  const me = this

  class DoboMongodb extends this.lib.Plugin {
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
