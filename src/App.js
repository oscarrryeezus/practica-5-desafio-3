import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout';
import { FaUserFriends, FaInfo } from 'react-icons/fa';

function Home() {
  
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bienvenidos a la Página de Inicio</h1>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        Oscar Daniel Morales Navarro
        GIDS0593 - TEST 2
      </p>
      <img
        src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
        alt="Bienvenida"
        style={{ width: '300px', marginTop: '20px' }}
      />
    </div>
  );
}

function About() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h2><FaInfo /> Acerca de Nosotros</h2>
      <p style={{ fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
        
      </p>
      <img
        src="https://media.giphy.com/media/xUPGcguWZHRC2HyBRS/giphy.gif"
        alt="Nosotros"
        style={{ width: '280px', marginTop: '20px' }}
      />
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
