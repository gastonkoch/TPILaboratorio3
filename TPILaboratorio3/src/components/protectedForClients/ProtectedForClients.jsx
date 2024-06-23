import MainLayout from '../mainLayout/MainLayout';
import { useState } from 'react';
import Unauthorize from '../unauthorize/Unauthorize';

const userValueString = localStorage.getItem("user");
const userValue = userValueString ? JSON.parse(userValueString) : null;
const userValueSession = userValue ? userValue.userSession : null;
const ProtectedForClients = ({children}) => {
    const [user,setUser] = useState(userValueSession)

    if (!user || (user && user.userType === 0)) {
        return (
        <MainLayout>
          <Unauthorize/>
        </MainLayout>
        )
    } 
    return (
        <MainLayout children={children}>
        </MainLayout>
    )
};

export default ProtectedForClients;
