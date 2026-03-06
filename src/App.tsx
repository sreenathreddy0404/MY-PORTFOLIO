import Index from './pages/Index'
import { ThemeProvider } from './hooks/useTheme'
import { Route, Routes } from 'react-router-dom'
import ProjectsPage from './pages/ProjectsPage'
import CertificatesPage from './pages/CertificatesPage'

function App() {

  return (
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>
      </ThemeProvider>
      
    )
}

export default App
