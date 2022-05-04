import LogIn from './components/LogIn';
import Register from './components/Register';
import Account from './components/Account';
import Flights from './components/Flights';
import Pet from './components/Pet';
import Admin from './components/Admin';
import AdminAccount from './components/AdminAccount';
import AdminUsers from './components/AdminUsers';
import Book from './components/Book';
// import Membership from './components/Membership';
// import Flight from './components/Flight';
import Seat from './components/Seat';
import Baggage from './components/Baggage';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import AppContext from './context/AppContext';
import { useState } from 'react';


function App() {
  const [currentUserEmail, setCurrent_user_email] = useState('initial email');

  const userProfile = {
    current_user_email: currentUserEmail,
    setCurrent_user_email,
  };


  return (
    <div>

      <AuthContextProvider>
      <AppContext.Provider value={userProfile}>
        <Routes>
          <Route path='/' element={<LogIn />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/register' element={<Register />} />
          <Route path='/admin_flights' element={<ProtectedRoute><Flights /></ProtectedRoute>} />
          <Route path='/pet' element={<ProtectedRoute><Pet /></ProtectedRoute>} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin_account' element={<ProtectedRoute><AdminAccount /></ProtectedRoute>} />
          <Route path='/admin_users' element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
          <Route path='/book' element={<ProtectedRoute><Book /></ProtectedRoute>} />
          {/* <Route path='/membership' element={<ProtectedRoute><Membership /></ProtectedRoute>} /> */}
          {/* <Route path='/flight' element={<ProtectedRoute><Flight /></ProtectedRoute>} /> */}
          <Route path='/seat' element={<ProtectedRoute><Seat /></ProtectedRoute>} />
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path='/baggage' element={<ProtectedRoute><Baggage /></ProtectedRoute>} />
        </Routes>
      </AppContext.Provider>
      </AuthContextProvider>

    </div>
  );
}

export default App;
