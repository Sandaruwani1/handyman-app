import {UserList} from './UserList/UserList';
import {UserForm} from'./UserForm/UserForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Dashboard} from './Dashboard/Dashboard';
import{AdminForm} from './AdminForm/AdminForm';
import {CustomerForm} from './CustomerForm/CustomerForm';
import {HandymanForm} from './HandymanForm/HandymanForm';
function App() {
  return (
    <div>

      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="users" element={<UserList />} />
            <Route path="user/add" element={<UserForm />} />

          </Routes>
        </BrowserRouter>

    </div>)

    }

    export default App;