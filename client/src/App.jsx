import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn.Jsx';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Navbar from './components/shared/Navbar';
import Sidebar from './components/shared/Sidebar';
import { useSelector } from 'react-redux';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {!isAuthenticated && <Route path='/sign-in' element={<SignIn />} />}
        {!isAuthenticated && <Route path='/sign-up' element={<SignUp />} />}
        {isAuthenticated && <Route path='/profile' element={<Profile />} />}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
