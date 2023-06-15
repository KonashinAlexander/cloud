import { Routes, Route } from 'react-router-dom';
import './App.css';
import StartPage from './pages/StartPage';
import StepOnePage from './pages/StepOnePage';
import StepTwoPage from './pages/StepTwoPage';
import StepThreePage from './pages/StepThreePage';
import NotFoundPage from './pages/NotFoundPage';
import Layout from './components/layout';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path='/' element={<Layout />} >
          <Route path="1" element={<StepOnePage />} />
          <Route path="2" element={<StepTwoPage />} />
          <Route path="3" element={<StepThreePage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer>
        <p className='copyright'>&copy; Alexander Konashin 2023</p>
      </footer>
    </div>
  );
}

export default App;
