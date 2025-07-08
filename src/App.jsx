// Radix Components
import { Flex } from '@radix-ui/themes'
// Common Components
import Header from './components/Header'
// Layouts
import GeneralFocus from './layout/GeneralFocus'
import EverydaySteps from './layout/EverydaySteps'
import LearningProgress from './layout/LearningProgress'
// Contexts
import { TasksProvider } from './contexts/TasksContext'

function App() {
  return (
    <>
      <Header />

      <TasksProvider>
        <Flex gap="9" justify="center">
          <GeneralFocus />
          <EverydaySteps />
        </Flex>
      </TasksProvider>

      {/* <LearningProgress /> */}
    </>
  )
}

export default App
