let AppContainerStyles = (theme) => {
  console.log('theme', theme);
  return {
    root: {
      // overflowX: 'hidden',
      // overflowY:'auto'
    },
    '@global': {
      body: {
        backgroundColor: theme.palette.background.level1,
      },
    },
  };
};

export default AppContainerStyles;
