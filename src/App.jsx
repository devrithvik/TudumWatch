import './App.css';
import { Navbar, Home } from './components/component.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext'; 
import { Account } from './pages/Account';
import { ProtectedRoute } from './pages/ProtectedRoute';
import { Login } from './pages/Login';
import { SignUp } from './pages/SignUp';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <AuthContextProvider>

      <Navbar /> 
      <Routes>
        <Route path="/" element= { <Home /> }></Route>
        <Route path="/account" element= { <ProtectedRoute><Account /></ProtectedRoute> }></Route>
        <Route path="/login" element= { <Login /> }></Route>
        <Route path="/signup" element= { <SignUp /> }></Route>
      </Routes>

    </AuthContextProvider>
    </BrowserRouter>
     </div>
  )
}

export default App
 

 