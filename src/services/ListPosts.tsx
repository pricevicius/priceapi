import axios from "axios"
import React from "react"

const instance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com/',
   timeout: 1000,
   withCredentials: false,
   headers: {
      'X-Custom-Header': 'foobar',
      'Access-Control-Allow-Origin': '*'
   }
 });


export class Posts extends React.Component {
   
   constructor(props:string){
      super(props)
      this.state = {
         posts: []
      }
   }

   async componentDidMount(){
      instance.get('/posts/')
               .then((response) => {
                  this.setState({posts:response.data})
                  console.log(this.state.posts)
                  //let posts = response.data;
               })
               .catch((err) => {
                  console.log("Ocorreu um erro:" + err)
               })
   }

   render(){
      return (
         <div>
            {
               this.state.posts.map( (post) => {
                  return <div className="item">
                           <h3>{post.title}</h3>
                           <p>{post.body}</p>
                        </div>
                  
               })
            }
         </div>
      )
   }
   
}