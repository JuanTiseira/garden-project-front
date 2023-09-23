import React, { useState, useEffect } from 'react';
import { Stack, List, ListItem, ListItemIcon, ListItemText, Link, Container, Grid, IconButton } from '@mui/material';
import { DomainVerification, Home, Dock, Pages, Menu} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const LateralMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsOpen(false);
      }
      else {
        setIsOpen(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Stack>
     
      <Grid container
        sx={{
          p: 2,
          boxShadow: 3,
          borderRadius: 5,
          position: 'relative',
          backgroundColor: 'grey.100',
          marginBottom: 5,
        }}>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem button onClick={() => navigate('/Inicio')}>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText>Inicio</ListItemText>
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem button onClick={() => navigate('/sobre-nosotros')}>
            <ListItemIcon>
              <Dock />
            </ListItemIcon>
            <ListItemText>Sobre nosotros</ListItemText>
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem button onClick={() => navigate('/plantas')}>
            <ListItemIcon>
              <Pages />
            </ListItemIcon>
            <ListItemText>Publicaciones</ListItemText>
          </ListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ListItem button onClick={() => navigate('/login')}>
            <ListItemIcon>
              <DomainVerification />
            </ListItemIcon>
            <ListItemText>Iniciar sesion</ListItemText>
          </ListItem>
        </Grid>
        
      </Grid>
      {/* {!isOpen && <Link onClick={toggleDrawer}>
        <IconButton>
          <Menu />
        </IconButton>
      </Link>} */}

      {children}
    </Stack>
  );
};

export default LateralMenu;
