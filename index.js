/**
 * Plugin factory
 *
 * @param {string} pkgName - NPM package name
 * @returns {class}
 */
async function factory (pkgName) {
  const me = this

  /**
   * DoboMongodb class
   *
   * @class
   */
  class DoboMongodb extends this.app.baseClass.Base {
    constructor () {
      super(pkgName, me.app)
      this.config = {}
    }
  }

  return DoboMongodb
}

export default factory
