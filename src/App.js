import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './MainLayout';
import LandingPage from './Components/LandingPage';

function App() {
  return (
   <Layout>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
    </Routes>
   
   </Layout>
  );
}

export default App;
