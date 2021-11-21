const theme = {
  palette: {
    primary: {
      main: '#3A86FF'
    },
    secondary: {
      main: '#D63230'
    },
    white: {
      main: '#ffffff',
      darker: '#fff5f5'
    },
    lightBlack: {
      main: '#212529',
      transparent: '#21252990',
      lighter: '#464c52',
    },
    lightGray: {
      main: '#dddedf',
      darker: '#636363'
    },
    honeyYellow: {
      main: '#F6AE2D'
    },
    transparentWhite: {
      main: 'rgba(255, 255, 255, 0.404)'
    }
  },
  typography: {
    fontWeight: {
      bold: "bold",
    },
    fontSize: {
      reg: 14,
      md: 18,
      lg: 24,
    }
  },
  spacing: (space: number) => space * 12,
  radius: (radius: number) => radius * 12,
};

export default theme;
