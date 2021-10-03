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
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.5333338455225!2d72.84481721462448!3d19.21557458700798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b72408f22f17%3A0x143dfea3306dd703!2sRajesh%20Nagar%20Society!5e0!3m2!1sen!2sin!4v1633281268244!5m2!1sen!2sin" width="100%" height="300" allowfullscreen="" loading="lazy"></iframe>
            
            <p>
                
            </p>


           <TextFieldSizes/>
           
           <BasicButtonGroup/>
        
          <DisableElevation/>

         </Container>
    </React.Fragment>
  );
}