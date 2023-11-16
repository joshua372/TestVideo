import { AppBar, Toolbar, Container, Box } from '@mui/material'
import Logo from "../../assets/logo-sochi.png"
import Olimpicos from "../../assets/logo-claro-sports.png"

const Navbar = () =>{
  return (    
    <AppBar position='fixed'>
      <hr className='lineRed' />
      <Container maxWidth="xl">
        <Toolbar>        
            <Box
            sx={{
              display: 'flex',      
              flexGrow: 1,
            }}
          >
          <Container  maxWidth="xl">
          <Box
            component="div"
            sx={{
              float:'left',
              display: 'inline',
              justifyContent: "left"
            }}
          >
            <img
              src={Logo}
              height={60}
              alt="img"
            />
          </Box>        
          <Box
            component="div"
            sx={{
              float:'right',
              display: 'inline',
              justifyContent: "right"
            }}
          >
            <img
              src={Olimpicos}
              height={60}
              alt="img"
            />
          </Box>        
          </Container>
          </Box>          
        </Toolbar>       
      </Container>             
    </AppBar>    
  )
}

export default Navbar 