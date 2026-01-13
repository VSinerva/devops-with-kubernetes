import axios from 'axios'
const baseUrl = '/todos'

const create = async newTodo => {
	const response = await axios.post(baseUrl, newTodo)
	return response.data
}

const getAll = async () => {
	const response = await axios.get(baseUrl)
	return response.data
}

export default { create, getAll }
