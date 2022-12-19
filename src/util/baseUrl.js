let baseUrl = ''
switch (process.env.NODE_ENV) {
  case 'development':
    baseUrl = '/api'
    break
  case 'production':
    baseUrl = '/prod-api'
    break
}
export default baseUrl
