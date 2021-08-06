const drawerWidth = 300;

let colors = {
  darkContrastText: '#fff',
};

let NavbarStyles = (theme) => ({
  root: {
    display: 'flex',
  },
  grow: {
    flexGrow: 1,
  },

  mobileAppBar: {
    top: 'auto',
    bottom: 0,
    // backgroundColor: '#204e79',
  },
  mobileFabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  mobileNavLink: {
    color: 'white',
    padding: 5,
    borderRadius: 3,
    fontSize: 28,
    '&:hover': {
      backgroundColor: 'rgba(255,255,255,.3)',
    },
  },
  mobileNavLinkIcon: {
    color: 'white',
  },
  activeNavLink: {
    //  padding: 5,
    //  '&:hover': {
    backgroundColor: 'rgba(255,255,255,.3)',
    fontSize: 30,
    //  },
  },
  activeNavLinkDarkMode: {
    //  '&:hover': {
    backgroundColor: 'rgba(255,255,255,.3)',
    fontSize: 30,
    //  },
  },

  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    overflowX: 'hidden',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerBackground: {
    // backgroundColor: '#204e79',
  },
  drawerOpen: {
    width: drawerWidth,
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  drawerItem: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(3),
    },
  },
  drawerIcon: {
    color: colors.darkContrastText,
  },
  drawerTab: {
    textDecoration: 'none',
    color: colors.darkContrastText,
  },
  activeDrawerTab: {
    // activeDrawerTabLightMode: {
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.common.black,
    '& div': {
      backgroundColor: theme.palette.primary.contrastText,
      color: theme.palette.common.black,
      '& div': {
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.common.black,
      },
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  },
  activeDrawerTabDarkMode: {
    backgroundColor: colors.darkContrastText,
    color: theme.palette.common.black,
    '& div': {
      backgroundColor: colors.darkContrastText,
      color: theme.palette.common.black,
      '& div': {
        backgroundColor: colors.darkContrastText,
        color: theme.palette.common.black,
      },
      '&:hover': {
        backgroundColor: 'white',
      },
    },
  },
  toolbarRegular: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  toolbarDense: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbarDense,
  },

  buttonsContainer: {
    marginRight: 20,
  },

  content: {
    flexGrow: 1,
    //  padding: theme.spacing(3),
    [theme.breakpoints.down('xs')]: {
      overflowX: 'hidden',
    },
  },
});

export default NavbarStyles;
