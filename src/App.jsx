import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './App.css'
import Home from './pages/Home'
import Product from './pages/Product'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<Product />} /> 
        </Routes>
      </BrowserRouter> 
    </Provider>
  )
}

export default App;
