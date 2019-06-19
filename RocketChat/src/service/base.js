// TODAS AS REQUISIÇÕES DA API AXIOS

import axios from 'axios'

const config = {
    baseURL: 'https://my-json-server.typicode.com/reprograma/T7-react-II',
    timeout: 1000,
}


// Em caso de requisição de usuário (erro)
// if (usuario) {
//     config.headers = {
//         'Authorization': usuario.token
//     }
// }

const protocolo = axios.create(config)

export function getComentarios() {
    const url = '/comentarios'

    return protocolo.get(url)
}

