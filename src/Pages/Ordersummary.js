import React from 'react';
import Container from '@material-ui/core/Container';

import SimpleCard from '../Components/Simplecard';

import BasicTimeline from '../Components/Timeline';
import ComplexGrid from '../Components/product';
import FullWidthGrid from '../Components/Payment';
import HorizontalNonLinearStepperWithError from '../Components/Stepper';
import ComplexGrid2 from '../Components/ComplexGrid';
import ComplexGridd from '../Components/Product 2';
import Grid from '@material-ui/core/Grid';






export default function Ordersummary() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            
                
            </p>
            <HorizontalNonLinearStepperWithError/>
           
            <SimpleCard/>
            Grocery basket 
            <Grid container spacing={2}align= 'center'>
           <Grid item xs={12}sm={12}xl={12}>                                total iteams 
            <ComplexGrid2/>
            </Grid>
            </Grid>
            <Grid container spacing={2}align= 'center'>
           <Grid item xs={12}sm={12}xl={12}> 
            
             <ComplexGridd/>
             </Grid>
            </Grid>
            <FullWidthGrid/>
            
            
          

            
           
            

            
        </Container>
             
    </React.Fragment>
  );
}
