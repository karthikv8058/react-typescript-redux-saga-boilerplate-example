import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
const getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MuiToolbar: {
          root: {
            backgroundColor: '#0C7560',
          },
        },
        MuiTableCell: {
          head: {
            backgroundColor: '#0C7560',
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