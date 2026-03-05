import Index from './pages/Index'
import { ThemeProvider } from './hooks/useTheme'

function App() {

  return (
      <ThemeProvider>
        <Index/>
      </ThemeProvider>
      
    )
}

export default App
