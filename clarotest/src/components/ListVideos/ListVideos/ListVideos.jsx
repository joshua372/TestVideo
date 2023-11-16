import { Container, Box, Grid, Button  } from '@mui/material'

import TeamLatam from '../../../assets/team-latam.png'
import Experience from '../../../assets/experiencia.png'
import Travelers from '../../../assets/travel-meets-fashion.png'
import Velocity from '../../../assets/velocidad-riesgo.png'

const handleClick = (item, setVideoInfo) => {
	setVideoInfo({ code: item.code });
	
  };
  
  const lista = [
	{ name: "video1", code: "4AO_NvoxwNw" },
	{ name: "video2", code: "Pv91eiIcAno" },
	{ name: "video3", code: "A75fzGj4iv8" },
	{ name: "video4", code: "Aih3R7a843w" }
  ];

const ListVideos = props => {	

	const { setVideoInfo } = props

	return (
		<Box sx={{ flexGrow: 1 }}>
			<h2 className='titleListVideos'>CLARO SPORTS EN SOCHI 2014</h2>			
			<Container maxWidth="md">
				<Grid container spacing={2}>
					<Grid item xs={6} md={3}>
						<Button variant="text" size="small" style={{display: "flex", flexDirection: "column"}} className='buttonRollover' onClick={() => handleClick(lista[0], setVideoInfo)}>
							<img src={TeamLatam} alt="teamlatam"/>
							<label className='label-buttons'>TEAM LATAM</label>							
						</Button>
					</Grid>
					<Grid item xs={6} md={3}>
						<Button variant="text" size="small" style={{display: "flex", flexDirection: "column"}} onClick={() => handleClick(lista[1],  setVideoInfo)}>
							<img src={Travelers} alt="travelers"/>
							<label className='label-buttons'>TRAVEL MEETS FASHION</label>
						</Button>
					</Grid>
					<Grid item xs={6} md={3}>
						<Button variant="text" size="small" style={{display: "flex", flexDirection: "column"}} onClick={() => handleClick(lista[2], setVideoInfo)}>
							<img src={Velocity} alt="velocity"/>
							<label className='label-buttons'>VELOCIDAD Y RIESGO</label>
						</Button>
					</Grid>
					<Grid item xs={6} md={3}>
						<Button variant="text" size="small" style={{display: "flex", flexDirection: "column"}} onClick={() => handleClick(lista[3], setVideoInfo)}>
							<img src={Experience} alt="experience"/>
							<label className='label-buttons'>EXPERIENCIA MULTIMEDIA</label>
						</Button>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)

};
export default ListVideos;