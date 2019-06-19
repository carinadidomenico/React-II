import React from 'react'
import Inicial from './paginaCadastro/Inicial'
import PessoaFisica from './paginaCadastro/PessoaFisica'
import PessoaJuridica from './paginaCadastro/PessoaJuridica'
import Final from './paginaCadastro/Final'
import './cadastro.css'



class Cadastro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            conteudo : undefined,
        }
    }

    trocarContaudo = (valorDoMeuConteudo) => {
        // this.setState({conteudo: valorDoMeuConteudo}) //forma reduzida
        
        this.setState({
            conteudo: valorDoMeuConteudo    
        })
        
    }
    
    render (){
        return(
            <div className="cadastro">                
                {this.state.conteudo === undefined && <Inicial alteraConteudo = {this.trocarContaudo}/>} 
                {this.state.conteudo === "PF" && <PessoaFisica />}  
                {this.state.conteudo === "PJ" && <PessoaJuridica />}   
                {this.state.conteudo === "final" && <Final/>}
            </div>
        )
    }
} 


export default Cadastro