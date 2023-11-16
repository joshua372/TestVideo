import { useReducer, useEffect } from 'react'
import { Box, Grid } from '@mui/material'


const CounterTime = () =>{
    const [, forceUpdate] = useReducer(x => x + 1, 0)
    let countDownDate = new Date("December 04, 2023 9:00:00").getTime()
    // let myfunc = setInterval(function () {
    //     forceUpdate();
    // }, 1000)
    useEffect(() => {
        setInterval(() => forceUpdate(), 1000);
      }, []);

    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft) % (1000 * 60) / (1000));

    return(
        <div className='top-container'>  
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={3}>                    
                    <div className='circle'>
                        <p className='alineacionTitle'>{days}</p>
                        <p className='alineacionSub'>DIAS</p> 
                    </div>                    
                </Grid>
                <Grid item xs={3}>                    
                    <div className='circle'>
                        <p className='alineacionTitle'>{hours}</p>
                        <p className='alineacionSub'>HRS</p> 
                    </div>                    
                </Grid>
                <Grid item xs={3}>                   
                        <div className='circle'>
                            <p className='alineacionTitle'>{minutes}</p>
                            <p className='alineacionSub'>MIN</p> 
                        </div>
                    
                </Grid> 
                <Grid item xs={3}>
                    
                        <div className='circle'>
                            <p className='alineacionTitle'>{seconds}</p>
                            <p className='alineacionSub'>SEG</p>                         
                        </div>
                    
                </Grid>       
            </Grid>           
        </Box>
        </div>
    )
}

export default CounterTime