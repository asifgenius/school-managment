import logo from './logo.svg';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ApplyPages from './pages/ApplyPage';
import ContactUsPage from './pages/ContactUsPage';
import LogInPage from './pages/LogInPage';
import CoursesPage from './pages/CoursesPage';

function App() {
  return (
    <div >
<Routes>
  <Route path='/' element={<HomePage/>}/>
  <Route path='/abouts' element={<AboutPage/>}/>
  <Route path='/applies' element={<ApplyPages/>}/>
  <Route path='/courses' element={<CoursesPage/>}/>
  <Route path='/contact-us' element={<ContactUsPage/>}/>
  <Route path='/log-in' element={<LogInPage/>}/>
</Routes>

    </div>
  );
}

export default App;
