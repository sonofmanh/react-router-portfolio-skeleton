
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sharedlayouts from './components/sharedlayouts/Sharedlayouts';
import Homepage from './components/Home/Homepage';
import Errorpage from './components/Error/Errorpage';
import About from './components/About/About';
import Service from './components/Services/Service';
import Contact from './components/Contact/Contact';



const App = () => {
  return (
    <BrowserRouter className='App'>
      <Routes>
        <Route path='/' element={<Sharedlayouts />}>
          <Route index element={<Homepage />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Service />} />
          <Route path='contact' element={<Contact />} />
          <Route path='*' element={<Errorpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App