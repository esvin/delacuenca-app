import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Product from "./Product";

const Products = () => {
  const itemsForSale = [
    {
      name: 'Miel',
      url: '/botella.png',
      unit: 'Botella 750 ML',
      price: 'Q. 60.00',
      description: 'Miel de abeja 100% organica, botella de miel pura en venta en guatemala.',
    },
    {
      name: 'Miel',
      url: '/mediabotella.png',
      unit: 'Media Botella 350 ML',
      price: 'Q. 30.00',
      description: 'Miel de abeja 100% organica, media botella pura en venta en guatemala.',
    },
    {
      name: 'Miel',
      url: '/botella500.png',
      unit: 'Botella 500 ML',
      price: 'Q. 45.00',
      description: 'Miel de abeja pura en botella, en tarro de vidrio a la venta.',
    },
    {
      name: 'Polen',
      url: '/polen.jpeg',
      unit: 'Libra',
      price: 'Q. 150.00',
      description: 'Polen de distintas regiones de guatemala, tenemos polen a la venta en guatemala.',
    },
    {
      name: 'Propóleo',
      url: '/propoleo.png',
      unit: 'Gotero 30 ML',
      price: 'Q. 75.00',
      description: 'Tintura de Propóleo, tenemos propóleo a la venta en guatemala,',
    },
    {
      name: 'Jalea Real',
      url: '/jaleareal.png',
      unit: 'Tarro 20 ML',
      price: 'Q. 120.00',
      description: 'Jalea real, medicina alternativa, a la venta en guatemala.',
    },
    {
      name: 'Multivitaminico',
      url: '/multivitaminico.png',
      unit: 'Tarro 240 ML',
      price: 'Q. 200.00',
      description: 'Miel, Jalea Real, Polen y Propoleo a la venta en guatemala.',
    },
    {
      name: 'Miel Crema',
      url: '/mielcrema.png',
      unit: 'Tarro 450 ML',
      price: 'Q. 45.00',
      description: 'Miel cristalizada homogéneamente, miel para untar a la venta en guatemala',
    },
    {
      name: 'Miel de Doncella (Melipona)',
      url: '/gotas.png',
      unit: 'Gotero 10 ML',
      price: 'Q. 40.00',
      description: 'Miel de doncella, medicina alternativa y natural en guatemala, Gotas Oftalmicas a la venta.',
    }
  ];
  return(
    <Grid 
      container
      spacing={{ xs: 2}}
      sx={{ pt: 6, pb: 6 }} 
      id="productsSection">
      <Grid item xs={12} sx={{textAlign: 'center'}}>
        <Typography variant="h2" gutterBottom component="div" className='colorlib-heading'>
          Productos
        </Typography>
      </Grid>
      {
        itemsForSale.map((itemForSale) => 
          <Grid item sm={6} md={4} key={itemForSale.url}>
            <Product item={itemForSale}/>
          </Grid>
        )
      }
    </Grid>
  );
};

export default Products;