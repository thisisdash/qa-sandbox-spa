import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../../atoms/Navigation';
import Overview from '../Overview';
import Registration from '../Registration';
import './App.css';

const App = () => (
  <>
    <Navigation />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/registration/:id' element={<Registration />} />
        <Route path='*' element={<Overview />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
