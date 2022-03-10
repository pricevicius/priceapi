import axios from "axios"
import React, { useEffect, useState } from "react"
import api from "../services/Api"

export class ConsultaCep extends React.Component{


      constructor(props:string){
         super(props)

         this.state = {
            cep: []
         }


         this.handleSubmit = this.handleSubmit.bind(this)
      }


      handleSubmit(e) {
         e.preventDefault();
         axios
            .get('https://viacep.com.br/ws/'+e.target.inpconsult.value+'/json')
            .then((response) => {
               this.setState({cep:response.data})
            })
            .catch((err) => {
               console.log("Ocorreu um erro:" + err)
            })


      }

      render(){
         return(
            <div className="cep">
               <h2>Consulte seu CEP</h2>
               <form onSubmit={this.handleSubmit}>
                  <input type="text" name="inpconsult" placeholder="Consulte seu CEP"></input>
                  <button type="submit">Consulte</button>
               </form>

               <div className="retorno">
                  <strong>CEP: </strong>{this.state.cep.cep}<br />
                  <strong>Endereço: </strong>{this.state.cep.logradouro}<br />
                  <strong>Bairro: </strong>{this.state.cep.bairro}<br />
                  <strong>Cidade/Estado: </strong>{this.state.cep.cidade}/{this.state.cep.uf}<br />
               </div>
            </div>
         )

      }
   }