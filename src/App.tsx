import { BrowserRouter, Routes, Route } from 'react-router'
import { Home } from './pages/Home'
import { BlogPost } from './pages/BlogPost'
import { NotFound } from './pages/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:postId' element={<BlogPost />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App