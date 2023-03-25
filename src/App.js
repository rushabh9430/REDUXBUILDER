import './App.css';
import Layout from './Components/Layout';
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About';
import Team from './Pages/Team';
import Counter from './Pages/Counter';
function App() {
  return (
    <>
        <Routes>
            <Route path='/' element={<Layout><Home /></Layout>}/>
            <Route path='/about' element={<Layout><About /></Layout>}/>
            <Route path='/team' element={<Layout><Team /></Layout>}/>
            <Route path='/counter' element={<Layout><Counter /></Layout>}/>
        </Routes>
    </>
  );
}

export default App;
