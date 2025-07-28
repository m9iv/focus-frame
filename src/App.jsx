// Radix Components
import { Theme, Flex } from '@radix-ui/themes'
// Common Components
import Header from './components/Header'
// App Sections
import GeneralFocus from './app/GeneralFocus'
import EverydaySteps from './app/EverydaySteps'
import LearningProgress from './app/LearningProgress'
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

      <LearningProgress />
    </Theme>
  )
}

export default App
