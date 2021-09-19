import React from 'react';
import Container from '@material-ui/core/Container';

import SimpleCard from '../Components/Simplecard';

import BasicTimeline from '../Components/Timeline';
import ComplexGrid from '../Components/product';
import FullWidthGrid from '../Components/Payment';
import OutlinedCard from '../Components/Outlinedcard';




export default function Ordersummary() {
  return (
    <React.Fragment>
        <Container fixed>
            <p>
                
            
                
            </p>
            <BasicTimeline/>
           
            <SimpleCard/>
            Grocery basket                                 total iteams 
            <ComplexGrid/>
            <ComplexGrid/>
            <FullWidthGrid/>
            <OutlinedCard/>
            
            
          

            
           
            

            
        </Container>
             
    </React.Fragment>
  );
}
