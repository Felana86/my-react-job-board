// == Import npm
import React, { useEffect, useState } from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import { ChakraProvider } from '@chakra-ui/react';

import { BASE_URL } from '../constants/apiConstants';
// == Import
import './styles.css';

import Header from '../Header';
import MenuBurger from '../Header/MenuBurger';
import Search from '../Search';
import RegistrationForm from '../Header/RegistrationForm';
import LogInForm from '../Header/LogInForm';
import Footer from '../Footer';
import AdminForm from '../AdminForm';

import BackTopButton from '../BackTopButton';

import About from '../Header/About';
import Contact from '../Header/Contact';
import TaglineBlock from '../Header/TaglineBlock';



// == Composant
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

  // fetch(BASE_URL +'/hello', {withCredentials: true})
  fetch('http://18.212.203.228:5050' + '/jobs/pe')
  
    .then(data => {
      // console.log(data);
      return data.json();
    })
    .then(data => {
      data = data.slice(0, 100)
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
          <Route path="/contact">
            <Contact />
          </Route>
          {/* <Route>
          <Error />
        </Route> */}
        </Switch>
        <Footer />
      </div>
    </ChakraProvider>

  );
}

/* import {useState, useEffect} from 'react'
function App() {
  const [dataImg, setDataImg] = useState();
  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url)
    })
  }, [])
  return (
    <div className="App">
      {dataImg &&
      <img src={dataImg}
      alt="cat image" style={{width: "500px"}}
      />}
    </div>
  );
}
*/
