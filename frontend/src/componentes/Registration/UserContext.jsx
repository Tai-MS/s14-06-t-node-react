// UserContext.js
import { createContext, useState, useContext } from 'react';

// Define initial user data
const initialUserData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    rol: 'CLIENT',
    address:'',
};

const UserContext = createContext();

export const useUserContext = () => {
  return useContext(UserContext);
};


export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(initialUserData);

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext

