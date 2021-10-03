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
    'https://www.jiomart.com/images/cms/aw_rbslider/slides/1633087998_Sale-live-now-756-x-325-Apporoved-1_oct.jpg' ,
  },
  {
    
    imgPath:
      
      'https://dog55574plkkx.cloudfront.net/images/jiomart-grocery-offers.jpg',
  },
  {
   
    imgPath:
      'https://cdn.grabon.in/gograbon/images/web-images/uploads/1618551213743/jiomart-offers.jpg',
  },
  {
    
    imgPath:
      'https://trickunlimited.com/wp-content/uploads/2020/07/Jiomart-Offers-1.jpeg',
  },
  {
   
    imgPath:
    'https://1.bp.blogspot.com/-VcTLEWdZRj8/X6ppOG415hI/AAAAAAAAH5Y/CqHkRahtVGQtJmpxFY2K9JRxGAzVvfNrACLcBGAsYHQ/s1440/0-bannerD.jpg',
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
 
export default function Carousel4() {
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
 

