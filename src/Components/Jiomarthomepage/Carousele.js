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
      'https://cdn.flipshope.com/blog/wp-content/uploads/2020/10/Jiomart-wednesday-offers-and-deals-800x450.jpg' ,
      
  },
  {
     imgPath:
      'http://educratsweb.com/l.php?url=https://www.jiomart.com/images/cms/aw_rbslider/slides/1589897178_banner_05.jpg' ,
  },
  {
    imgPath:
      'http://educratsweb.com/l.php?url=https://www.jiomart.com/images/cms/aw_rbslider/slides/1589897133_banner_04.jpg'
  },
  {
 
    imgPath:
      'https://english.cdn.zeenews.com/sites/default/files/2020/11/02/896776-jiomart.jpg',
  },
  {
    
    imgPath:
      'https://cdn.static-zoutons.com/images/originals/blog/BANNER4_1605856907.jpg',
  },
];
 
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 1200,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 0,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
    margin: 10,
  },
  img: {
    height: '100%',
    display: 'block',
    maxWidth: 1200,
    overflow: 'hidden',
    width: '100%',

    
  },
}));
 
 function SwipeableTextMobileStepper() {
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
 
export default SwipeableTextMobileStepper;
 

