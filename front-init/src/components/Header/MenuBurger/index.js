import React from 'react';
import { Link as ReactLink } from 'react-router-dom';

import {
  HamburgerIcon,
  AddIcon,
  QuestionIcon,
} from '@chakra-ui/icons'

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Link,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react';
import { FaDiscord, FaTwitter } from 'react-icons/fa';
import { AiTwotoneEdit, AiOutlineRightCircle } from 'react-icons/ai';

export default function MenuBurger({ isAdmin, isLoggedIn }) {
  const responsiveSize = useBreakpointValue(['md', 'lg']);

  return (
    <Menu>
      <MenuButton
        size={responsiveSize}
        mt="2"
        color="#0468ae"
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
      />
      <MenuList>
        {!isLoggedIn &&
          <>
            <Link as={ReactLink} to='/register'
            >
              <MenuItem
                display={{
                  md: 'none',
                  lg: 'none',
                }}
                size={responsiveSize}
                variant="solid"
                mr="2"
                mt="2"
              >
                <Icon as={AiTwotoneEdit} mr={2.5} />
                Inscription
              </MenuItem>
            </Link>

            <Link as={ReactLink} to='/login'
            >
              <MenuItem
                display={{
                  md: 'none',
                  lg: 'none',
                }}
              >
                <Icon as={AiOutlineRightCircle} mr={2.5} />
                Connexion
              </MenuItem>
            </Link>
          </>}

        {(isAdmin && isLoggedIn) && <Link as={ReactLink} to='/login/adminform'>
          <MenuItem icon={<AddIcon />}>
            Déposer une annonce
          </MenuItem>
        </Link>}

        <Link as={ReactLink} to='/about'>
          <MenuItem icon={<QuestionIcon />}>
            A propos
          </MenuItem>
        </Link>

        <Link href="https://discord.gg/jR3f6Uwm" isExternal>
          <MenuItem>
            <Icon as={FaDiscord} mr={2.5} />
            Discord
          </MenuItem>
        </Link>

        <Link href="https://twitter.com/react_jobs_fr" isExternal>
          <MenuItem>
            <Icon as={FaTwitter} mr={2.5} />
            Twitter
          </MenuItem>
        </Link>

      </MenuList>
    </Menu>

  );
}



