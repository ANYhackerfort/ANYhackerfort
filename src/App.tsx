import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Space from './main_page/home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Space />} />
      </Routes>
    </Router>
  )
}

export default App
