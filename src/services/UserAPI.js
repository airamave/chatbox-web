import {API} from './API'

class UserAPI extends API {
 constructor(baseUrl = 'https://0924b73d.ngrok.io') {
   super(baseUrl);
 }

 login = (credentials) => {

  return this.makeRequest({
    url: 'api/auth/token',
    method: 'POST',
    data: credentials
  })
 }

 signup = (user) => {
   return this.makeRequest({
    url: 'api/users',       
     method: 'POST',
     data: user
   });
 }
}

export default new UserAPI()