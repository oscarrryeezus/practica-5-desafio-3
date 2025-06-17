import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { FaInfo } from 'react-icons/fa';

function Home() {
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenidos a la Página de Inicio</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        Oscar Daniel Morales Navarro
        GIDS0593 - TEST 3
        16 de Junio :l
      </p>
    
    </div>
  );
}

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2><FaInfo /> Acerca de Nosotros</h2>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        
      </p>
      
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
