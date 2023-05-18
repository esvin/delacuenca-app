
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import FmdGoodRoundedIcon from '@mui/icons-material/FmdGoodRounded';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const Footer = () => {
  
  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/esvin">
          José Estrada
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const footers = [
    {
      title: 'Company',
      description: ['Team', 'History', 'Contact us', 'Locations'],
    },
    {
      title: 'Features',
      description: [
        'Cool stuff',
        'Random feature',
        'Team feature',
        'Developer stuff',
        'Another one',
      ],
    },
    {
      title: 'Contactanos',
      description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
    },
    {
      title: 'Legal',
      description: ['Privacy policy', 'Terms of use'],
    },
  ];
  return (
    <Container
      maxWidth="md"
      component="footer"
      sx={{
        borderTop: (theme) => `1px solid ${theme.palette.divider}`,
        mt: 8,
        py: [3, 6],
      }}
    >
      <Grid container spacing={1} justifyContent="space-evenly">
      <Grid item xs={12} sm={3}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            DE LA CUENCA
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Contacto
          </Typography>
          <Stack>
            <Typography variant="body1" gutterBottom>
              KM. 150 CA-2 Carretera al Pacifico, Aldea Concepción Ixtacapa, San Antonio Suchitepéquez, Guatemala.
            </Typography>
            <Typography variant="subtitle2">
              Informacion de Contacto
            </Typography>
            <Link href="mailto:launionnahualate@gmail.com">launionnahualate@gmail.com</Link>
            <Link href="mailto:arapispclsas@gmail.com">arapispclsas@gmail.com</Link>
            <Box>
              <Link href="tel:+502 78705331" sx={{mr: 2}}>+502 7870 5331</Link>
              <Link href="tel:+502 55669267">+502 5566 9267</Link>
              <Link href="tel:+502 31928802">+502 3192 8802</Link>
            </Box>
            <Typography variant="subtitle2">
              Redes Sociales
            </Typography>
            <Box>
              <IconButton href="https://wa.me/50255669267" aria-label="whatsapp" color="primary">
                <WhatsAppIcon fontSize="large"/>
              </IconButton>
              <IconButton href="https://www.facebook.com/delacuencagt/"  aria-label="facebook"  color="primary">
                <FacebookRoundedIcon fontSize="large"/>
              </IconButton>
              <IconButton href="https://goo.gl/maps/T68nYf59iTwQymeQ8"  aria-label="google"  color="primary">
                <FmdGoodRoundedIcon fontSize="large"/>
              </IconButton>
            </Box>
          </Stack>         
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" color="text.primary" gutterBottom>
            Envianos un mensaje
          </Typography>
        </Grid>
      </Grid>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
};
export default Footer;
