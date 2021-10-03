import React from 'react';
import Container from '@material-ui/core/Container';

import SimpleCard from '../Components/Simplecard';

import BasicTimeline from '../Components/Timeline';
import ComplexGrid from '../Components/product';
import FullWidthGrid from '../Components/Payment';
import HorizontalNonLinearStepperWithError from '../Components/Stepper';
import ComplexGrid2 from '../Components/ComplexGrid';






export default function Ordersummary() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            
                
            </p>
            <HorizontalNonLinearStepperWithError/>
           
            <SimpleCard/>
            Grocery basket                                 total iteams 
            <ComplexGrid2/>
            <ComplexGrid2/>
            <FullWidthGrid/>
            
            
          

            
           
            

            
        </Container>
             
    </React.Fragment>
  );
}
