import Conexao from "../factory/Posts"

class RestPost{

   async all(){
      return await Conexao.get('/posts')
   }

}

export default new RestPost()