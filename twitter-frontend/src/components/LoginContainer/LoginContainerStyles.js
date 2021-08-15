let LoginContainerStyles = theme => ({
   root: {
      height:'100vh',
   },
   imageContainer:{
      width:'50vw',
      display:'flex',
      justifyContent:'center'
   },
   paper: {
      height:'100vh',
      width:'50vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
   },
   avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
   },
   form: {
      // width: '100%', // Fix IE 11 issue.
      // marginTop: theme.spacing(1),
   },
   submit: {
      margin: theme.spacing(3, 0, 2),
   },
})


export default LoginContainerStyles;