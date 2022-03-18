import React from 'react';
import { useHistory } from "react-router-dom";
import { Link as ReactLink } from 'react-router-dom';

import {
  Flex,
  Spacer,
  Box,
  Button,
  Menu,
  useBreakpointValue,
  Link
} from '@chakra-ui/react';

import MenuBurger from './MenuBurger';
import Logo from './Logo';

const Header = ({ isLoggedIn, setIsLoggedIn, isAdmin }) => {
  const history = useHistory();
  const responsiveSize = useBreakpointValue(['md', 'lg']);

  const isLoggedOut = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    history.push("/");
  }

  return (
    <Flex bg="gray.50" pb="1.5em" pt="1em">
      <Box boxSize="40">
        <Logo size={responsiveSize} />
      </Box>
      <Spacer />
      <Box p={10}>
        {
          !isLoggedIn ?
            <>
              <Link as={ReactLink} to='/register'
              >
                <Button
                  display={{
                    base: 'none',
                    md: 'inline-block',
                    lg: 'inline-block',
                  }}
                  size={responsiveSize}
                  variant="solid"
                  color="#0468ae"
                  mr="2"
                  mt="2"
                >
                  Inscription
                </Button>
              </Link>

              <Link as={ReactLink} to='/login'
              >
                <Button
                  display={{
                    base: 'none',
                    md: 'inline-block',
                    lg: 'inline-block',
                  }}
                  size={responsiveSize}
                  color="#0468ae"
                  mr="2"
                  mt="2"
                >
                  Connexion
                </Button>
              </Link> </> :

            <Button
              display={{
                base: 'inline-block',
                md: 'inline-block',
                lg: 'inline-block',
              }}
              onClick={isLoggedOut}
              size={responsiveSize}
              color="#0468ae"
              mr="2"
              mt="2"
            >
              Déconnexion
            </Button>

        }

        <Menu>
          <MenuBurger isAdmin={isAdmin} isLoggedIn={isLoggedIn}
          />
        </Menu>
      </Box>
    </Flex>
  );
};

export default Header;
