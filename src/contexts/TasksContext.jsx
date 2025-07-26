import { createContext, useContext, useEffect, useReducer } from 'react'

const BASE_URL = 'http://localhost:4242'

const TasksContext = createContext()

const initialState = {
  tasks: [],
  plannedTasks: [],
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

    case 'task/planned':
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.fetchedTasks,
        plannedTasks: action.payload.updatedPlannedTasks,
      }

    case 'tasks/loaded':
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.fetchedTasks,
        plannedTasks: action.payload.updatedPlannedTasks,
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
  const [{ tasks, plannedTasks, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  )

  useEffect(function () {
    async function fetchTasks() {
      dispatch({ type: 'loading' })

      try {
        const res = await fetch(`${BASE_URL}/tasks`)
        const fetchedTasks = await res.json()
        const updatedPlannedTasks = mapPlannedTasks(fetchedTasks)

        dispatch({
          type: 'tasks/loaded',
          payload: { fetchedTasks, updatedPlannedTasks },
        })
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

  async function planTask(categoryId, taskId) {
    try {
      dispatch({ type: 'loading' })

      const task = await fetch(`${BASE_URL}/tasks/${categoryId}`).then((res) =>
        res.json()
      )

      task.variants = task.variants.map((variant) =>
        variant.id === taskId
          ? { ...variant, isPlaned: !variant.isPlaned }
          : variant
      )

      await fetch(`${BASE_URL}/tasks/${categoryId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
      })

      const res = await fetch(`${BASE_URL}/tasks`)
      const fetchedTasks = await res.json()
      const updatedPlannedTasks = mapPlannedTasks(fetchedTasks)

      dispatch({
        type: 'task/planned',
        payload: { fetchedTasks, updatedPlannedTasks },
      })
    } catch {
      dispatch({
        type: 'rejected',
        payload: 'There was an error updating task...',
      })
    }
  }

  function mapPlannedTasks(fetchedTasks) {
    if (!fetchedTasks.length) return []

    const mappedPlannedTasks = fetchedTasks.flatMap((task) =>
      task.variants
        .filter((variant) => variant.isPlaned)
        .map((variant) => ({
          id: variant.id,
          category: task.category.name,
          name: variant.name,
          color: task.category.color,
        }))
    )

    return mappedPlannedTasks
  }

  return (
    <TasksContext.Provider
      value={{
        tasks,
        plannedTasks,
        createCategory,
        updateCategory,
        deleteCategory,
        planTask,
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
