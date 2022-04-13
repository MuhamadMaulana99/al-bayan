import Header from "./Components/Header";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
// import "fontsource-roboto";
import { Paper, Container, Box } from "@material-ui/core";

import { green, orange } from "@material-ui/core/colors";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem"
    }
  },
  palette: {
    type: "dark",
    primary: {
      main: green[600]
    },
    secondary: {
      main: orange[400]
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "200vh" }}>
        <Paper>
          <Container>
            <Header />
          </Container>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;
