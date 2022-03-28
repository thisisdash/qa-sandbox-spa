import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouterPrefix } from '../../../consts/router';
import Navigation from '../../atoms/Navigation';
import Overview from '../Overview';
import Registration from '../Registration';
import './App.css';

const App = () => (
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path={RouterPrefix} element={<Overview />} />
      <Route path={`${RouterPrefix}/registration`} element={<Registration />} />
      <Route path={`${RouterPrefix}/registration/:id`} element={<Registration />} />
      <Route path='*' element={<Overview />} />
    </Routes>
  </BrowserRouter>
);

export default App;
