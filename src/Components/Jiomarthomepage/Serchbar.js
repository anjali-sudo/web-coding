import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Grid from '@material-ui/core/Grid';
import SwipeableTemporaryDrawer from './Leftdrawer';
import { Link, Router } from "react-router-dom";

import jiologo from '../../Assets/jiologo.png'


const useStyles = makeStyles((theme) => ({


  grow: {
    flexGrow: 1,
  },
  
  AppBar: {
    padding: '5%',
    background: 'linear-gradient(to bottom ,#0192CA, #0CAEBE, #13BEB7,#21DFA8)',
    
    // borderStyle: 'solid none solid none',
    // borderColor: '#B1B1B1',
    boxShadow: '0 0 0 0',
    border:'2 solid red',
    borderRadius: '5',
    height:'20ch'
   
  },


  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {

    display: 'none',
    [theme.breakpoints.down('xl')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'white',
    '&:hover': {
      backgroundColor: 'white',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(20),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',

  },
  inputRoot: {
    color: 'grey',
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 1),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(6)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      width: '50ch',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      width: '50ch',



    },
  },
}));


export default function PrimarySearchAppBar() {
  const classes = useStyles();

  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);



  const handleProfileMenuOpen = (event) => {

  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {

    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  function FormRow() {
    const menuId = 'primary-search-account-menu';


    const mobileMenuId = 'primary-search-account-menu-mobile';



    return (

      <div className={classes.grow}>
        <AppBar position="static" className={classes.AppBar}
>

          <Toolbar
          >
            <Grid container spacing={2}>
            <Grid item xl={1} xs={2}>

            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <SwipeableTemporaryDrawer/>
            </IconButton>
            </Grid>

            <Grid item xl={6} xs={5}>

            <div>
              {/* <Typography className={classes.title} variant="h6" noWrap>
                JioMart
              </Typography> */}
              <img src = {jiologo} className= "image" alt= "jiologo" width="100" height="100%"
/>
             

            </div>
            </Grid>

            <Grid item xl={1} xs={2}>
            
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
            </div>


            <div>
              <IconButton
                color="inherit"
              >
                <AccountCircle/>
              </IconButton>
            </div>
            </Grid>
            <Grid item xl={1} xs={2}>
            <div>
              <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to={process.env.PUBLIC_URL + '/Ordersummary'}>

                  <ShoppingCartOutlinedIcon />
                  </Link>

              </IconButton>
            </div>
            </Grid>

            <div className={classes.search}>
              <div className={classes.searchIcon}
              >
                <SearchIcon />

              </div>
              
              <InputBase
                placeholder="Search essentials..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                  position: 'bottm',
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
      
    );
  }
  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormRow />
        </Grid>

      </Grid>
    </div>

  );
}