import { Posts } from "../components/ListPosts"

export function Lista(){

   return (
      <div className="Lista">
         <h2>Lista de itens</h2>
         <div className="conteudos">
            { <Posts /> }
         </div>
      </div>
   )
}