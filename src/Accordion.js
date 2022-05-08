import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Misión
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Fortalecer el nivel organizativo y técnico de las organizaciones miembros de la Empresa Comunitaria Apícola la Unión Nahualate, 
            para lograr estándares internacionales de calidad en la producción y procesamiento de productos apícolas 
            promoviendo la conservación de los ecosistemas, brindando trato justo y equitativo de los productores 
            que busque contribuir a mejorar su economía y calidad de vida.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>Visión</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Ser una empresa comunitaria exitosa y reconocida en la producción de productos apícolas bajo estándares de calidad internacional, 
            con principios y valores sociales, culturales, brindando solidez y confianza a nuestros socios, clientes y colaboradores. 
            Exportar al mundo miel de la mejor calidad por la riqueza de nuestra tierra “Cuenca Nahualate”.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '50%', flexShrink: 0 }}>
            Nuestras Asociaciones
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul>
            <li>
              <Typography>
                Asociación Red de Apicultores del Sur Occidente–ARAPIS
              </Typography>
            </li>
            <li>
              <Typography>
                Cooperativa Integral Agrícola Bella Linda R.L.
              </Typography>
            </li>
            <li>
              <Typography>
                Cooperativa Agrícola Cafetalera y de Servicios Varios Nahualá R.L.
              </Typography>
            </li>
            <li>
              <Typography>
                Asociación de Desarrollo Integral Flor de Boca costa. -ADIFBOC-
              </Typography>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
