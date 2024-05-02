import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Chats from './pages/Chats';
import Profile from './pages/Profile';
import Navbar from './components/shared/Navbar';
import { useSelector } from 'react-redux';
import UniformDetails from './pages/UniformDetails';
import TrackUniform from './pages/TrackUniform';
import StudentList from './pages/StudentList';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const { isAuthenticated } = useSelector((state) => state.user);


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {!isAuthenticated && <Route path='/sign-in' element={<SignIn />} />}
        {!isAuthenticated && <Route path='/sign-up' element={<SignUp />} />}
        {isAuthenticated && <Route path='/profile' element={<Profile />} />}
        {isAuthenticated && (
          <Route path='/uniform-details' element={<UniformDetails />} />
        )}
        {isAuthenticated && (
          <Route path='/track-uniform' element={<TrackUniform />} />
        )}
        {isAuthenticated && <Route path='/chats' element={<Chats />} />}
        {isAuthenticated && (
          <Route path='/studentlist' element={<StudentList />} />
        )}
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
};

export default App;
