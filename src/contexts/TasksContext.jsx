import { createContext, useContext, useEffect, useReducer } from 'react'

const BASE_URL = 'http://localhost:4242'

const TasksContext = createContext()

const initialState = {
  tasks: [],
  isLoading: false,
  error: '',
}

function reducer(state, action) {
  switch (action.type) {
    case 'loading':
      return {
        ...state,
        isLoading: true,
      }

    case 'tasks/loaded':
      return {
        ...state,
        isLoading: false,
        tasks: action.payload,
      }

    case 'category/created':
      return {
        ...state,
        isLoading: false,
        tasks: [...state.tasks, action.payload],
      }

    case 'category/updated':
      return {
        ...state,
        isLoading: false,
        tasks: action.payload,
      }

    case 'category/deleted':
      return {
        ...state,
        isLoading: false,
        tasks: state.tasks.filter((category) => category.id !== action.payload),
      }

    case 'rejected':
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }

    default:
      throw new Error('Unknown action type')
  }
}

function TasksProvider({ children }) {
  const [{ tasks, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(function () {
    async function fetchTasks() {
      dispatch({ type: 'loading' })

      try {
        const res = await fetch(`${BASE_URL}/tasks`)
        const data = await res.json()

        dispatch({ type: 'tasks/loaded', payload: data })
      } catch {
        dispatch({
          type: 'rejected',
          payload: 'There was an error fetching tasks...',
        })
      }
    }

    fetchTasks()
  }, [])

  async function createCategory(newCategory) {
    try {
      dispatch({ type: 'loading' })

      const res = await fetch(`${BASE_URL}/tasks`, {
        method: 'POST',
        body: JSON.stringify(newCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await res.json()
      dispatch({ type: 'category/created', payload: data })
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error creating new category...',
      })
    }
  }

  async function updateCategory(updatedCategoryId, updatedCategory) {
    try {
      dispatch({ type: 'loading' })

      await fetch(`${BASE_URL}/tasks/${updatedCategoryId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedCategory),
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const res = await fetch(`${BASE_URL}/tasks`)
      const data = await res.json()
      dispatch({ type: 'category/updated', payload: data })
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error updating category...',
      })
    }
  }

  async function deleteCategory(id) {
    try {
      dispatch({ type: 'loading' })

      await fetch(`${BASE_URL}/tasks/${id}`, {
        method: 'DELETE',
      })

      dispatch({ type: 'category/deleted', payload: id })
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error deleting the category...',
      })
    }
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        createCategory,
        updateCategory,
        deleteCategory,
        isLoading,
        error,
      }}>
      {children}
    </TasksContext.Provider>
  )
}

function useTasks() {
  const context = useContext(TasksContext)

  if (context === undefined) {
    throw new Error('TasksContext was used outside TasksProvider')
  }

  return context
}

export { TasksProvider, useTasks }
