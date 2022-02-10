const { Resolver } = require('dns/promises')
const resolver = new Resolver()

module.exports = {
  lookup: async function (domain) {
    try {
      return {
        statusCode: 200,
        dns: {
          a: await resolver.resolve4(domain).catch(err => null),
          aaaa: await resolver.resolve6(domain).catch(err => null),
          ns: await resolver.resolveNs(domain).catch(err => null),
          cname: await resolver.resolveCname(domain).catch(err => null),
          mx: await resolver.resolveMx(domain).catch(err => null),
          txt: await resolver.resolveTxt(domain).catch(err => null),
          srv: await resolver.resolveSrv(domain).catch(err => null),
          soa: await resolver.resolveSoa(domain).catch(err => null),
          caa: await resolver.resolveCaa(domain).catch(err => null),
          naptr: await resolver.resolveNaptr(domain).catch(err => null),
          ptr: await resolver.resolvePtr(domain).catch(err => null)
        }
      }
    } catch (error) {
      return {
        statusCode: 404,
        message: error.message
      }
    }
  }
}