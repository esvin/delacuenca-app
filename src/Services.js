

import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ModeOfTravelIcon from '@mui/icons-material/ModeOfTravel';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const Services = () => {

  const servicesOffered = [
    {
      icon: <LocalShippingIcon color="primary" sx={{ fontSize: 64 }} />,
      name: 'Compra/Acopio de Miel',
      description: 'Compramos miel de todas las regiones Guatemala, a precios competitivos. Acopiamos miel de todos nuestros asociados.'
    },
    {
      icon: <DirectionsBoatIcon color="primary" sx={{ fontSize: 64 }} />,
      name: 'Venta de Miel al Mayoreo',
      description: 'Vendemos miel al por mayor; En caneca, Galón, Tonel, Miel para exportación, miel certificada. Entrega en todo el pais.'
    },
    {
      icon: <PrecisionManufacturingIcon color="primary" sx={{ fontSize: 64 }} />,
      name: 'Insumos',
      description: 'Vendemos colmenas, Abejas reinas, Cera estampada, Cera en bruto, Cajas de madera, Azucar, Trajes de proteccion, Velos, Botellas.'
    },
    {
      icon: <HandshakeIcon color="primary" sx={{ fontSize: 64 }} />,
      name: 'Asistencia Tecnica',
      description: 'Asistencia tecnica apicola en Guatemala, Asesorías para proyectos apícolas: Alimentación, Control, Cosecha, Division, Crianza de reinas.'
    },
    {
      icon: <SupportAgentIcon color="primary" sx={{ fontSize: 64 }} />,
      name: 'Capacitaciones',
      description: 'Capitacion apícola, Implementación de apiarios, Tecnicas de manejo, Pillaje, Ciencia de la miel.'
    },
    {
      icon: <ModeOfTravelIcon color="primary" sx={{ fontSize: 64 }} />,
      name: 'Tours',
      description: 'Tour apícola, Conociendo los apiarios y su entorno, recorridos guiados en zonas de montaña altamente diversas.'
    },
  ];

  return(
    <Container 
      maxWidth="md" 
      sx={{ mt: 6, mb: 6}}
      id="servicesSection">
      <Grid container spacing={{ xs: 6 }}
      >
        <Grid item xs={12} sx={{textAlign: 'center'}}>
          <Typography variant="h2" gutterBottom component="div" className='colorlib-heading'>
            Servicios
          </Typography>
        </Grid>
          {
          servicesOffered.map((service) =>
            <Grid 
              item 
              key={service.name}
              md={6}>
              <Card>
                <CardHeader 
                  title={service.name}
                  titleTypographyProps={{ align: 'center' }}
                  sx={{
                    color: 'white',
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.secondary.main
                        : theme.palette.grey[700],
                  }}/>
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      mb: 2,
                    }}
                  >
                    <Avatar color="primary" sx={{ width: 96, height: 96, bgcolor: ( theme ) => theme.palette.secondary.main }}>
                      {service.icon}
                    </Avatar>
                    <Typography variant="body1" gutterBottom color="text.primary" sx={{ml: 2, textAlign: 'justify !important'}}>
                      {service.description}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions></CardActions>
              </Card>
            </Grid>
          )
        }        
      </Grid>
    </Container>
  );

}

export default Services;