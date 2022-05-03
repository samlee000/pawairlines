import LogIn from './components/LogIn';
import Register from './components/Register';
<<<<<<< HEAD
import Brandon from './components/Brandon';
=======
import Admin from './components/Admin';
import AdminAccount from './components/AdminAccount';
import AdminUsers from './components/AdminUsers';
>>>>>>> 48aac992a959a49a7ea1442832ab6720d4012a85
import Book from './components/Book';
import Membership from './components/Membership';
import Flight from './components/Flight';
import Seat from './components/Seat';
import Baggage from './components/Baggage';
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
<<<<<<< HEAD
          <Route path='/brandon' element={<ProtectedRoute><Brandon /></ProtectedRoute>} />
=======
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin_account' element={<ProtectedRoute><AdminAccount /></ProtectedRoute>} />
          <Route path='/admin_users' element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
>>>>>>> 48aac992a959a49a7ea1442832ab6720d4012a85
          <Route path='/book' element={<ProtectedRoute><Book /></ProtectedRoute>} />
          <Route path='/membership' element={<ProtectedRoute><Membership /></ProtectedRoute>} />
          <Route path='/flight' element={<ProtectedRoute><Flight /></ProtectedRoute>} />
          <Route path='/seat' element={<ProtectedRoute><Seat /></ProtectedRoute>} />
          <Route path='/baggage' element={<ProtectedRoute><Baggage /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
