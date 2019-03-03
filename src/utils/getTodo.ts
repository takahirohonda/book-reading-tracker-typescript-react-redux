import axios from 'axios';

const url = "'https://jsonplaceholder.typicode.com/todos"

const getTodo = (url: string) => {
    axios.get(url)
    .then((res) => {
        console.log(res)
    })
    .catch((err) => {
        console.log(err)
    })

}

export default getTodo