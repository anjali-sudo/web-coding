import React from 'react';
import Container from '@material-ui/core/Container';

import SwipeableTextMobileStepper from '../Components/Jiomarthomepage/Carousele';
import ContainedButtons from '../Components/Jiomarthomepage/ContainedButtons';
import AutoGridNoWrap from '../Components/Maxsavingdeal';
import SingleLineImageList from '../Components/Imagelist';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            
            <p>
                
            </p>
           
            <ContainedButtons/>
          < SwipeableTextMobileStepper/>
          < SwipeableTextMobileStepper/>
          < SwipeableTextMobileStepper/>
          <AutoGridNoWrap/>
          <SingleLineImageList/>
          <AutoGridNoWrap/>
        </Container>
    </React.Fragment>
  );
}