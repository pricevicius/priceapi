import React from "react"
import RestPost from "../services/Posts"

export function Posts(){
   const [returnPost, setPost] = React.useState([])

   React.useEffect(() => {
      RestPost.all().then((response) => {
         setPost(response.data)
      }).catch((err) => {
         console.log("Ocorreu um erro:" + err)
      })
   },[])

   return (
      <div>
         {
            returnPost.map( (post, index) => {
               return <div className="item" key={index}>
                           <h3>{post.title}</h3>
                           <p>{post.body}</p>
                        </div>

            })
         }
      </div>
   )
}