import React, {Component} from 'react'
import Comentario from '../componentes/comentario/Comentario';
import './chat.css'
import {getComentarios} from '../service/base'


export default class Chat extends Component {
    constructor(props) {
        super (props)

        this.state = {
            comentarios: []
        }
    }

    componentDidMount() {
        getComentarios()
        .then (response => {
            console.log (response)
            this.setState({
                comentarios: response.data
            })
        })
        .catch (erro => {
            console.log (erro)
        })
    }

    render() {
        const {comentarios} = this.state
        return (
            <div className="chat">
                {
                    comentarios.length > 0 ? 
                    comentarios.map((item, index) => {
                        return (
                            <Comentario
                                comentario={item}
                                key={index+'comentario'}
                            /> 
                        )
                    }) :
                    <span>Carregando comentários</span>
                }
            </div>
        )
    }
}
