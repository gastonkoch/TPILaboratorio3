import MainLayout from '../mainLayout/MainLayout';
import { useState } from 'react';
import Login from '../login/Login';
import Unauthorize from '../unauthorize/Unauthorize';

const userValueString = localStorage.getItem("user");
const userValue = userValueString ? JSON.parse(userValueString) : null;
const userValueSession = userValue ? userValue.userSession : null;
const ProtectedRoute = ({children}) => {
    const [user,setUser] = useState(userValueSession)

    if (!user) {
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

export default ProtectedRoute;
