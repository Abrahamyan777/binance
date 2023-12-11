import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/LayoutPage/Layout/Layout';
import Home from './views/Home/Home';
import Cget from './views/cGet/Cget';
import Csave from './views/Csave/Csave';
import Cryptocurrency from './views/Cryptocurrency/Cryptocurrency';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='home' element={<Home />} />
          {/* <Route path='cget' element={<Cget />} />
          <Route path='csave' element={<Csave />} />
          <Route path='cryptocurrency' element={<Cryptocurrency />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
