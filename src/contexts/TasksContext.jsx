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

  return (
    <TasksContext.Provider value={{ tasks, isLoading, error }}>
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
