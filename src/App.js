import './App.css';
// import LoginPage from './components/LoginPage';
// import RegisterPage from './components/RegisterPage';
// import HomePage from './components/HomePage';
// import SubjectGeneratorPage from './components/SubjectGeneratorPage';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import DeviceDetails from './components/DeviceDetails';
import DeviceTerminal from './components/DeviceTerminal';
import DeviceGUI from './components/DeviceGUI';
import Login from './components/Login';
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
      <h1>Header</h1>
      <Routes>
        <Route path='/details' element={<DeviceDetails/>} />
        <Route path='/terminal/:id' element={<DeviceTerminal/>}/>
        <Route path='/gui/:id' element={<DeviceGUI/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Dashboard/>}/>
      </Routes>
      <h1>Footer</h1>
    </BrowserRouter>
  )
}

export default App;