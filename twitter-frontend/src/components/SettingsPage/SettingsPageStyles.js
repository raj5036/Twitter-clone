let SettingsPageStyles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    minHeight: 224,
    maxWidth: 900,
    '@media(max-width:600px)': {
      margin: 10,
    },
    margin: '100px auto 0',
  },
  tabs: {
    // borderRight: `1px solid ${theme.palette.divider}`,
  },
});

export default SettingsPageStyles;
