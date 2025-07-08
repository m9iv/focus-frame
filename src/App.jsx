// Radix Components
import { Theme, Flex } from '@radix-ui/themes'
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
    <Theme
      appearance="dark"
      panelBackground="translucent"
      accentColor="violet"
      grayColor="gray">
      <Header />

      <TasksProvider>
        <Flex gap="9" justify="center">
          <GeneralFocus />
          <EverydaySteps />
        </Flex>
      </TasksProvider>

      {/* <LearningProgress /> */}
    </Theme>
  )
}

export default App
