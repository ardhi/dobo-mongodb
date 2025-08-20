async function factory (pkgName) {
  const me = this

  return class DoboMongodb extends this.lib.BajoPlugin {
    constructor () {
      super(pkgName, me.app)
      this.alias = 'dbmongo'
      this.dependencies = ['dobo']
      this.config = {}
    }
  }
}

export default factory
