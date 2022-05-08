import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import * as React from 'react';
import basehorizontal from '../public/basehorizontal.jpeg';
import AboutUs from '../src/AboutUs';
import FeaturedSection from '../src/FeaturedSection';
import Footer from '../src/Footer';
import Navbar from '../src/Navbar';
import Products from '../src/Products';
import Services from '../src/Services';

export default function Index() {
  const mdTheme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#febe37',
        contrastText: '#000000',
      },
      secondary: {
        main: '#5d4037',
        contrastText: '#ffffff'
      },
      success: {
        main: '#4CAF50',
      },
      warning: {
        main: '#FFB547',
      },
      background: {
        default: '#E7EBF0',
      }
    },
  });
  const mainFeaturedPost = {
    title: 'DE LA CUENCA',
    description:
      "Somos una empresa lider en productos apicolas en Guatemala, Desde Miel de abeja, Polen, Propoleo, Cera, Abejas reinas, etc.",
    image: basehorizontal,
    imageText: 'main image description',
    linkText: '',
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Navbar />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <FeaturedSection post={mainFeaturedPost}/>
            <AboutUs/>
            <Products/>
            <Services/>
            <Footer />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
