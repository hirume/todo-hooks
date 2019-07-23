import { createMuiTheme } from "@material-ui/core/styles";


export const themeNight = createMuiTheme({
  palette: {
    primary: {
      main: "#9c27b0"
    },

    secondary: {
      main: "#c6ff00"
    },

    type: "dark"
  }
});

export const themeDay = createMuiTheme(
    {
        palette: {
            primary: {
              main: "#2e7d32"
            },
        
            secondary: {
              main: "#e040fb"
            },
        
            type: "light"
          }
    }
);

