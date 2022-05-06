import LogIn from './components/LogIn';
import Register from './components/Register';
import Account from './components/Account';
import AdminAccount from './components/AdminAccount';
import Flights from './components/Flights';
import UserFlights from './components/UserFlights';
import Pet from './components/Pet';
import Admin from './components/Admin';
// import AdminAccount from './components/AdminAccount';
import AdminUsers from './components/AdminUsers';
import Book from './components/Book';
import AdminBilling from './components/AdminBilling';
import UserBilling from './components/UserBilling';
import MyBooking from './components/MyBooking';
import Seat from './components/Seat';
import Baggage from './components/Baggage';
import Ticket from './components/Ticket';
import UserTicket from './components/UserTicket';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

import AppContext from './context/AppContext';
import { useState } from 'react';


function App() {
  const [currentFirstName, setCurrent_first_name] = useState('initial email');
  const [currentLastName, setCurrent_last_name] = useState('initial email');
  const [currentAddress, setCurrent_address] = useState('initial email');
  const [currentEmail, setCurrent_email] = useState('initial email');
  const [currentGender, setCurrent_gender] = useState('initial email');
  const [currentAge, setCurrent_age] = useState('initial email');
  const [currentPhoneNumber, setCurrent_phone_number] = useState('initial email');

  const userProfile = {
    current_email: currentEmail,
    current_first_name: currentFirstName,
    current_last_name: currentLastName,
    current_address: currentAddress,
    current_phone_number: currentPhoneNumber,
    current_gender: currentGender,
    current_age: currentAge,
    setCurrent_email,
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
            <Route path='/user_flights' element={<ProtectedRoute><UserFlights /></ProtectedRoute>} />
            <Route path='/pet' element={<ProtectedRoute><Pet /></ProtectedRoute>} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin_users' element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
            <Route path='/book' element={<ProtectedRoute><Book /></ProtectedRoute>} />
            {/* <Route path='/membership' element={<ProtectedRoute><Membership /></ProtectedRoute>} /> */}
            {/* <Route path='/flight' element={<ProtectedRoute><Flight /></ProtectedRoute>} /> */}
            <Route path='/admin_ticket' element={<ProtectedRoute><Ticket /></ProtectedRoute>} />
            <Route path='/user_ticket' element={<ProtectedRoute><UserTicket /></ProtectedRoute>} />
            <Route path='/seat' element={<ProtectedRoute><Seat /></ProtectedRoute>} />
            <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>} />
            <Route path='/admin_account' element={<ProtectedRoute><AdminAccount /></ProtectedRoute>} />
            <Route path='/baggage' element={<ProtectedRoute><Baggage /></ProtectedRoute>} />
            <Route path='/admin_bill' element={<ProtectedRoute><AdminBilling /></ProtectedRoute>} />
            <Route path='/user_bill' element={<ProtectedRoute><UserBilling /></ProtectedRoute>} />
            <Route path='/mybookings' element={<ProtectedRoute><MyBooking /></ProtectedRoute>} />
          </Routes>
        </AppContext.Provider>
      </AuthContextProvider>

    </div>
  );
}

export default App;
