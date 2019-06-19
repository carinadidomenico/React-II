import React from 'react'
import Legenda from '../../componentes/cadastro/formulario/Legenda'
import CaixaTexto from '../../componentes/cadastro/formulario/CaixaTexto'
import BotaoEnviar from '../../componentes/cadastro/formulario/BotaoEnviar'

class PessoaJuridica extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            nomeSobrenome: {
                valor: '',
                erro: ''
            },
            numeroDoCpf: {
                valor: '',
                erro: ''
            },
            dataDeNascimento: {
                valor: '',
                erro: ''
            },
            email: {
                valor: '',
                erro: ''
            },
            senha:{
                valor: '',
                erro: ''
            },
        }
    }

    handleSubmit = e => {
        e.preventDefault()
    }

    handleChange = (nomeDoInput, valorDoInput, erro = '') => {

        this.setState({
            [nomeDoInput] : {
                valor: valorDoInput,
                erro: erro
            }
            })
    }

    render(){
        return(
            <div className="pagina">
                <h2>Pessoa Física</h2>
                <form className="formulario" onSubmit={this.handleSubmit}>
                    <div>
                        <Legenda
                        htmlForLegenda="nomeSobrenome">
                            Nome Completo:
                        </Legenda>
                        <CaixaTexto
                            type="text" 
                            className="campo" 
                            id="nomeSobrenome" 
                            placeholder="Nome" 
                            value={this.state.nomeSobrenome} 
                            name="nomeSobrenome" 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <Legenda
                        htmlForLegenda="numeroDoCNPJ">
                            CNPJ:
                        </Legenda>
                        <CaixaTexto
                            type="text" 
                            className="campo" 
                            id="numeroDoCpf"
                            placeholder="000.000.000-00" 
                            value={this.state.numeroDoCNPJf} 
                            name="numeroDoCpf" 
                            onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <Legenda
                        htmlForLegenda="dataDeNascimento">
                            Data de nascimento:
                        </Legenda>
                        <CaixaTexto
                            className="campo" 
                           type="date" 
                           id="dataDeNascimento"
                           placeholder="dd/mm/aaaa" 
                           value={this.state.dataDeNascimento} 
                           name="dataDeNascimento" 
                           onChange={this.handleChange} 
                        />
                    </div>
                    <div>
                        <Legenda
                        htmlForLegenda="email">
                            Email:
                        </Legenda>
                        <CaixaTexto
                            className="campo" 
                           type="email" 
                           id="email"
                           placeholder="email@email.com" 
                           value={this.state.email} 
                           name="email" 
                           onChange={this.handleChange}  
                        />
                    </div>
                    <div>
                        <Legenda
                        htmlForLegenda="senha">
                            senha:
                        </Legenda>
                        <CaixaTexto
                            className="campo" 
                            type="password" 
                            id="senha"
                            placeholder="Senha" 
                            value={this.state.senha} 
                            name="senha" 
                            onChange={this.handleChange}  
                        />
                    </div>
                    <BotaoEnviar acaoBotao={this.handleSubmit} classeBotao='botao'/>
                </form>

            </div>
        )
    }
}

export default PessoaJuridica