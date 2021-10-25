import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import DoctorsContacts from "./pages/DoctorsContacts";
import SpecialDiscounts from "./pages/SpecialDiscounts";
import BloodTest from "./pages/services/BloodTest";
import Ctscan from "./pages/services/Ctscan";
import Ecg from "./pages/services/Ecg";
import Mri from "./pages/services/Mri";
import Ultrasonogram from "./pages/services/Ultrasonogram";
import Xray from "./pages/services/Xray";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./pages/Login";
import { AuthProvider } from "./components/context/AuthContext";
import app from "./firebaseconfig";
import EmailSignIn from "./pages/EmailSignIn";
import EmailSignUp from "./pages/EmailSignUp";

app();

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Navbar></Navbar>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/emailSignIn">
              <EmailSignIn></EmailSignIn>
            </Route>
            <Route path="/emailSignUp">
              <EmailSignUp></EmailSignUp>
            </Route>
            <PrivateRoute path="/doctorsContacts">
              <DoctorsContacts></DoctorsContacts>
            </PrivateRoute>
            <PrivateRoute path="/specialDiscounts">
              <SpecialDiscounts></SpecialDiscounts>
            </PrivateRoute>
            <PrivateRoute path="/bloodTest">
              <BloodTest></BloodTest>
            </PrivateRoute>
            <PrivateRoute path="/ctScan">
              <Ctscan></Ctscan>
            </PrivateRoute>
            <PrivateRoute path="/ecg">
              <Ecg></Ecg>
            </PrivateRoute>
            <PrivateRoute path="/mri">
              <Mri></Mri>
            </PrivateRoute>
            <PrivateRoute path="/ultrasonogram">
              <Ultrasonogram></Ultrasonogram>
            </PrivateRoute>
            <PrivateRoute path="/xray">
              <Xray></Xray>
            </PrivateRoute>
            <PrivateRoute path="/specialDiscounts">
              <SpecialDiscounts></SpecialDiscounts>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
