import axiosInstance from '../axiosInstance'
import type { Todo } from '../../types'

const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axiosInstance.get('/todos')
    return response.data
  } catch (error) {
    console.error(error)
    return []
  }
}

const getTodo = async (id: number): Promise<Todo | undefined> => {
  try {
    const response = await axiosInstance.get(`/todos/${id}`)
    return response.data as Todo
  } catch (error) {
    console.error('Failed to fetch todo:', error)
    return undefined
  }
}

export { getTodos, getTodo }
