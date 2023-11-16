import './App.css'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {Container, Row} from 'react-bootstrap'

function App() { 
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })
  return (   
    <>
    <Container fluid>
      <ThemeProvider theme={darkTheme}>
              <Navbar />                       
              <Row>               
                <Home />
              </Row>                              
      </ThemeProvider> 
    </Container>
    </>                    
     
  )
}

export default App
