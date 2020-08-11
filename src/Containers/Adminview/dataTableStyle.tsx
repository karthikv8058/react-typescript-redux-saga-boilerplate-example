import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const getMuiTheme = () =>
createMuiTheme({
  overrides: {
    MuiTableCell: {
      head: {
        backgroundColor: 'purple',
      },
    },
    
    MuiTableFooter: {
      root: {
        '& .MuiToolbar-root': {
          backgroundColor: 'white',
        },
      },
    },
    
  },
});

export default getMuiTheme;