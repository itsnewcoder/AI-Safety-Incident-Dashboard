import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Dashboard from './components/Dashboard';

// Custom dark blue theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // dark blue color
      light: '#534bae',
      dark: '#000051',
    },
    secondary: {
      main: '#283593',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h4: {
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Box sx={{ marginTop: 4, marginBottom: 4 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom sx={{ color: 'primary.main' }}>
            AI Safety Incident Dashboard
          </Typography>
          <Dashboard />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;