import React, { createContext, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Appointment from './components/AppointmentPage/Appointment/Appointment';
import AddDoctors from './components/DashBoard/AddDoctors/AddDoctors';
import DashBoard from './components/DashBoard/DashBoard/DashBoard';
import LandingPage from './components/LayOut/LandingPage';
import LoginPage from './components/Login/LoginPage';

export const UserContext = createContext();

function App() {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/"> <LandingPage /> </Route>
                    <Route path="/appointment"> <Appointment /> </Route>
                    <Route path="/login"> <LoginPage /> </Route>

                    <Route path="/dashboard/appointment"> <DashBoard /> </Route>
                    <Route path="/dashboard/addDoctor"> <AddDoctors/> </Route>


                    <Route path="*"> <h4>404 <br /> Not FOund</h4> </Route>
                </Switch>
            </BrowserRouter>
        </UserContext.Provider>
    );
}

export default App;
