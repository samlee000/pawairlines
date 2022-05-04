import LogIn from './components/LogIn';
import Register from './components/Register';
import Admin from './components/Admin';
import AdminAccount from './components/AdminAccount';
import AdminUsers from './components/AdminUsers';
import Book from './components/Book';
import Membership from './components/Membership';
import Flight from './components/Flight';
import UserFlight from './components/userFlight';
import Seat from './components/Seat';
import Baggage from './components/Baggage';
import AdminBilling from './components/AdminBilling';
import UserBilling from './components/UserBilling';
import Ticket from './components/Ticket';

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
          <Route path='/admin' element={<Admin />} />
          <Route path='/admin_account' element={<ProtectedRoute><AdminAccount /></ProtectedRoute>} />
          <Route path='/admin_users' element={<ProtectedRoute><AdminUsers /></ProtectedRoute>} />
          <Route path='/book' element={<ProtectedRoute><Book /></ProtectedRoute>} />
          <Route path='/membership' element={<ProtectedRoute><Membership /></ProtectedRoute>} />
          <Route path='/flight' element={<ProtectedRoute><Flight /></ProtectedRoute>} />
          <Route path='/userflight' element={<ProtectedRoute><UserFlight /></ProtectedRoute>} />
          <Route path='/seat' element={<ProtectedRoute><Seat /></ProtectedRoute>} />
          <Route path='/baggage' element={<ProtectedRoute><Baggage /></ProtectedRoute>} />
          <Route path='/ticket' element={<ProtectedRoute><Ticket /> </ProtectedRoute>} />
          <Route path='/admin_bill' element={<ProtectedRoute><AdminBilling /></ProtectedRoute>} />
          <Route path='/user_bill' element={<ProtectedRoute><UserBilling /></ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>

    </div>
  );
}

export default App;
