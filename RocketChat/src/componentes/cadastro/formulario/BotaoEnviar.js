import React from 'react'

export default function BotaoEnviar(props) {
    return (
        <button className={props.classeBotao} onClick={props.acaoBotao}>Enviar</button>
    )
}