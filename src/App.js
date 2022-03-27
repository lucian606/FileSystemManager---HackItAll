import './App.css';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import HomePage from './components/HomePage';
// import SubjectGeneratorPage from './components/SubjectGeneratorPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DeviceTerminal from './components/DeviceTerminal';
import DeviceGUI from './components/DeviceGUI';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  // return (
  //   <BrowserRouter>
  //     <AuthProvider>
  //       <Routes>
  //         <Route path='/login' element={<LoginPage/>} />
  //         <Route path='/register' element={<RegisterPage/>} />
  //         <Route path='/home' element={<HomePage/>} />
  //         <Route path='/something' element={<SubjectGeneratorPage/>} />      
  //       </Routes>
  //     </AuthProvider>
  //   </BrowserRouter>
  // );

  return (
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/terminal/:id' element={<DeviceTerminal/>}/>
        <Route path='/gui/:id' element={<DeviceGUI/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;