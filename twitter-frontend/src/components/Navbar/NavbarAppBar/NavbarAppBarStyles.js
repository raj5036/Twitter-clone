let NavbarAppBarStyles = (theme) => ({
  root: {
    
  },
  grow: {
    flexGrow: 1,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    color:theme.palette.common.black,
    background:theme.palette.common.white
  },

  menuButton: {
    marginRight: 36,
  },
  logoText: {
    display: 'block',
  },
  logoTextHideOnLogoDisplay: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
 
  logoImageContainer: {
    // display: 'block',
    width: '100%',
    //  [theme.breakpoints.down('xs')]: {
    //    display: 'none',
    //  },
  },
  logoImage: {
    width: '100%',
    maxWidth: 225,
    [theme.breakpoints.down('xs')]: {
      // height: 20,
      maxWidth: 175,
    },
    // width:'100%'
  },
  poweredByAwirosImage: {
    width: '100%',
    maxWidth: 135,
    // position: 'absolute',
    // right: 120,
    // top: 13,
    // bottom: 0,

    [theme.breakpoints.down('xs')]: {
      maxWidth: 115,
      // right: 10,
    },
    //  marginLeft:'50vw'
    // width:'100%'
  },
  siteSelectorContainer: {
    width: 170,
  },

  dropdownMenuContainer: {
    zIndex: theme.zIndex.drawer + 2,
  },
  dropdownMenu: {
    marginTop: 5,
    marginRight: 20,
    borderTop: `3px solid`,
    borderColor: theme.palette.primary.main,
    '& ul': {
      margin: 0,
      padding: 0,
    },
  },
});

export default NavbarAppBarStyles;
