import axios from 'axios'

const baseUrl = 'api/persons' //'https://expresspersons.herokuapp.com/api/persons'//'http://localhost:3001/api/persons'

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = (person) => {
    return axios.post(baseUrl,person).then(response => response.data)
}

const deletePerson = (id) => {
    return axios.delete(`${baseUrl}/${id}`).then(response => response.data)
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`,newPerson).then(response => response.data)
}

const exportObj = {
    getAll,
    create,
    deletePerson,
    update
}

export default exportObj;