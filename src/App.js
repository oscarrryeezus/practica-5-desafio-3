import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { FaInfo } from 'react-icons/fa';

function Home() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenidos a la Página de Inicio</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        Oscar Daniel Morales Navarro<br />
        GIDS0593 - TEST 3<br />
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
        Esta es una app simple desplegada en GitHub Pages usando React.
      </p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename="/practica-5-desafio-3">
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
