// == Import npm
import React, { useEffect, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {
  Switch,
  Route,
} from 'react-router-dom';

// == Import composants
import Header from '../Header';
import Search from '../Search';
import RegistrationForm from '../Header/RegistrationForm';
import LogInForm from '../Header/LogInForm';
import Footer from '../Footer';
import AdminForm from '../Header/AdminForm';
import BackTopButton from '../BackTopButton';
import About from '../Header/About';
import TaglineBlock from '../Header/TaglineBlock';
import Page404 from '../Page404';

// == Creating the App component

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleIsLoggedIn = (logState) => {
    setIsLoggedIn(logState)
  }

  const handleIsAdmin = (adminState) => {
    setIsAdmin(adminState)
  }
  useEffect(() => {

    fetch('http://18.212.203.228:5050' + '/jobs/pe')

      .then(data => {
        // console.log(data);
        return data.json();
      })
      .then(data => {
        // data = data.slice(0, 100)
        // console.log(data);
        setJobs(data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <ChakraProvider>
      <div className="app">
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin}/>
        <Switch>
          <Route exact path="/">
            <BackTopButton />
            <TaglineBlock />
            <Search jobs={jobs} />
          </Route>
          <Route path="/register">
            <RegistrationForm />
          </Route>
          <Route exact path="/login">
            <LogInForm handleIsLoggedIn={handleIsLoggedIn} handleIsAdmin={handleIsAdmin}/>
          </Route>
            {isAdmin && <Route path="/login/adminform">
            <AdminForm />
          </Route>}
          <Route path="/about">
            <About />
          </Route>
          <Route path="*"> 
            <Page404/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </ChakraProvider>

  );
}
