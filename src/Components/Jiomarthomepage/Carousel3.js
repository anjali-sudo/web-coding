import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const tutorialSteps = [
  {
   
    imgPath:
      'https://cdn1.dealsmagnet.com/images/external/jiomart-icicibank-offer-16wpThcr-2.jpeg?url=https://i.imgur.com/hN62UBg.png',
  },
  {
    
    imgPath:
      'https://www.jiomart.com/images/cms/offers/1615917760_web_lp.jpg',
  },
  {
   
    imgPath:
      'https://www.jiomart.com/images/cms/offers/1598523525_web_landing_page.jpg',
  },
  {
    
    imgPath:
      'https://www.jiomart.com/images/cms/offers/1628786598_SBI_Credit_card__web_lp.jpg',
  },
  {
   
    imgPath:
    'https://1.bp.blogspot.com/-D4VhG5gF-pA/X3X0ds1dtaI/AAAAAAAAFNE/VPIz8dZUUCshl14_2_zQhqcAIVoSTqFeQCLcBGAsYHQ/s562/Citibank%2BPaytm%2BWallet%2BOffer.jpg',
  },
];
 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    maxWidth: 400,
    overflow: 'hidden',
    display: 'block',
    width: '100%',
  },
}));
 
export default function Carousel3() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
 
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
 
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };
 
 
  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath} alt={step.label} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
 
      <MobileStepper
       variant="dots"
       steps={5}
       position="static"
       activeStep={activeStep}
       className={classes.root}
       nextButton={
         <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
           
           {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
         </Button>
       }
       backButton={
         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
           {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
           
         </Button>
        }
      />
    </div>
  );
}

