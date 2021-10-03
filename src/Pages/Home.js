import React from 'react';
import Container from '@material-ui/core/Container';

import SwipeableTextMobileStepper from '../Components/Jiomarthomepage/Carousele';
import ContainedButtons from '../Components/Jiomarthomepage/ContainedButtons';
import AutoGridNoWrap from '../Components/Maxsavingdeal';
import SingleLineImageList from '../Components/Imagelist';
import Carousel2 from '../Components/Jiomarthomepage/Carousel2';
import Carousel3 from '../Components/Jiomarthomepage/Carousel3.js';
import Carousel4 from '../Components/Jiomarthomepage/Carousel4.js';
import CenteredGrid from '../Components/CenteredGrid';
import Grid from '@material-ui/core/Grid';


export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            
            <p>
                
            </p>
           
            <ContainedButtons/>
            <Grid container spacing={2}align= 'center'>
           <Grid item xs={12}sm={12}xl={12}>
          < SwipeableTextMobileStepper/>

          
           <Carousel2/>
           

          < Carousel3/>
          <AutoGridNoWrap/>
          <SingleLineImageList/>
          <AutoGridNoWrap/>
          <Carousel4/>
          <CenteredGrid/>
          </Grid>
            </Grid>
         
        </Container>
      
    </React.Fragment>
  );
}