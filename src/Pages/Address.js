import React from 'react';
import Container from '@material-ui/core/Container';

import SwipeableTextMobileStepper from '../Components/Jiomarthomepage/Carousele';
import ContainedButtons from '../Components/Jiomarthomepage/ContainedButtons';
import AutoGridNoWrap from '../Components/Maxsavingdeal';
import SingleLineImageList from '../Components/Imagelist';
import TextFieldSizes from '../Components/Textfield';
import BasicButtonGroup from '../Components/Buttongroup';

import DisableElevation from '../Components/Savebutton';

export default function Home() {
  return (
    <React.Fragment>
        <Container fixed>
            
            <p>
                
            </p>


           <TextFieldSizes/>
           
           <BasicButtonGroup/>
        
          <DisableElevation/>

         </Container>
    </React.Fragment>
  );
}