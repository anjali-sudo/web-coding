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

// import Logo from '../../Assets/Logo.png'


const useStyles = makeStyles((theme) => ({


  grow: {
    flexGrow: 1,
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
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  },
  inputRoot: {
    color: 'inherit',
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
        <AppBar position="static" minHeight="400" >
          <Toolbar
          >
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <SwipeableTemporaryDrawer/>
            </IconButton>


            <div>
              <Typography className={classes.title} variant="h6" noWrap>
                JioMart
              </Typography>
              {/* <img src = {jio-mart-logo} className= "image" alt= "Logo"/> */}
            </div>


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

            <div>
              <IconButton aria-label="show 4 new mails" color="inherit">
              <Link to={process.env.PUBLIC_URL + '/Ordersummary'}>

                  <ShoppingCartOutlinedIcon />
                  </Link>

              </IconButton>
            </div>
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