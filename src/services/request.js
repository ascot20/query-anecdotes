import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const postAnecdote = async (body) => {
    const res = await axios.post(baseUrl, body)
    return res.data
}

export const updateAnecdote = async (body) => {
    const res = await axios.put(`${baseUrl}/${body.id}`, body)
    return res.data
}