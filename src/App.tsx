import { Container } from 'react-bootstrap'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from './context/ShoppingCartContext'
import { About } from './pages/about'
import { Home } from './pages/home'
import { Store } from './pages/store'

function App() {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar></Navbar>
        <Container className='mb-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </ShoppingCartProvider>
    </>
  )
}

export default App
