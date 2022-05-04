import LogIn from './components/LogIn';
import Register from './components/Register';
import Book from './components/Book';
import Membership from './components/Membership';
import Flight from './components/Flight';
import AdminBilling from './components/AdminBilling';
import Ticketing from './components/Ticketing';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
  return (
    <div>

      {/* <h1 className='text-center text-3xl font-bold'>
        Firebase Auth & Context
      </h1> */}
      <AuthContextProvider>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/book' element={<ProtectedRoute><Book /></ProtectedRoute>} />
          <Route path='/membership' element={<ProtectedRoute><Membership /></ProtectedRoute>} />
          <Route path='/flight' element={<ProtectedRoute><Flight /></ProtectedRoute>} />
          <Route path='/adminbilling' element={<ProtectedRoute><AdminBilling /></ProtectedRoute>} />
          <Route path='/ticketing' element={<ProtectedRoute><Ticketing /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
