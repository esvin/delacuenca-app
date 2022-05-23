import DomainAddIcon from '@mui/icons-material/DomainAdd';
import EngineeringIcon from '@mui/icons-material/Engineering';
import PublicIcon from '@mui/icons-material/Public';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import ControlledAccordions from './Accordion';

const AboutUs = () => {

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={{ xs: 3 }}
      sx={{ pt: 6, pb: 6 }}
      id="aboutUsSection">
        <Grid item xs={12} sx={{textAlign: 'center'}}>
          <Typography variant="h2" gutterBottom component="div" className='colorlib-heading'>
            Quienes somos
          </Typography>
        </Grid>
        <Grid item md={6}>{<img src="/foto3.jpg" alt="De la cuenca logo"  width="100%" />}</Grid>
        <Grid item md={6}>
        <Typography variant="h3" gutterBottom component="div">
          Nuestra Filosofía
        </Typography>
        <Typography variant="body1" gutterBottom>
          En Empresa Comunitaria Apícola La Unión Nahualate desarrollamos una producción apícola ecológicamente sostenible,
          respetando la naturaleza, propiciando la conservación y restauración de ecosistemas naturales; siendo socialmente
          responsables con nuestros pequeños productores apícolas comunitarios, promovemos la igualdad y la equidad social y de género,
          buscando contribuir con el mejoramiento de las condiciones de vida local. Ofreciendo productos apícolas naturales de alta calidad,
          sin ninguna alteración en su composición, manteniendo todas las propiedades inherentes que el consumidor busca en ellos.
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography variant="h3" gutterBottom component="div">
          Origen
        </Typography>
        <Typography variant="body1" gutterBottom>
          Nuestra producción apícola tiene su origen en La Cuenca Nahualate que está ubicada en la cadena volcánica central que atraviesa Guatemala,
          en los territorios de los departamentos de Sololá y Suchitepéquez, la cual inicia desde el nivel del mar,
          hasta los 3,500 m.s.n.m. en la cima de volcanes y cadenas montañosas,
          conteniendo a lo largo de su extensión muchos microclimas que generan una riqueza en diversidad biológica,
          geológica, hidrológica, lo cual se aprecia en la calidad de nuestra miel y sub-productos apícolas.
        </Typography>

      </Grid>
      <Grid item md={6} xs={12}>
        <ControlledAccordions />
      </Grid>
      <Grid item md={12}>
        <Stack
          justifyContent="space-around"
          alignItems="center"
          direction={{ xs: 'column', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={{ xs: 1 }}
          >
            <Avatar sx={{ width: 128, height: 128, bgcolor: (theme) => theme.palette.secondary.main }}>
              <PublicIcon color="primary" sx={{ fontSize: 72 }} />
            </Avatar>
            <Typography variant="h2" gutterBottom component="div">
              8
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Municipios
            </Typography>
          </Stack>

          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={{ xs: 1 }}
          >
            <Avatar sx={{ width: 128, height: 128, bgcolor: (theme) => theme.palette.secondary.main }}>
              <EngineeringIcon color="primary" sx={{ fontSize: 72 }} />
            </Avatar>
            <Typography variant="h2" gutterBottom component="div">
              393
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Socios
            </Typography>
          </Stack>

          <Stack
            justifyContent="center"
            alignItems="center"
            direction="column"
            spacing={{ xs: 1 }}
          >
            <Avatar sx={{ width: 128, height: 128, bgcolor: (theme) => theme.palette.secondary.main }}>
              <DomainAddIcon color="primary" sx={{ fontSize: 72 }} />
            </Avatar>
            <Typography variant="h3" gutterBottom component="div">
              4
            </Typography>
            <Typography variant="h6" gutterBottom component="div">
              Asociaciones
            </Typography>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
export default AboutUs;