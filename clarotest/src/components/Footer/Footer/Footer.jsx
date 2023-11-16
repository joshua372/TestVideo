import { Container, Box, Grid } from '@mui/material'
import LogoOlimpic from '../../../assets/logo-sochi.png'
import FaceIcon from '../../../assets/fb.png'
import TwitterIcon from '../../../assets/twitter.png'
import YoutubeIcon from '../../../assets/youtube.png'
import MobliIcon from '../../../assets/mobli-icon.png'

const Footer = () => {
	return (
		
		<div className='top-footer'>					
			<Box sx={{ flexGrow: 1 }}>			
				<Container maxWidth="md">
					<Grid container spacing={2}>
						<Grid item xs={4}>
							<p className='contentWhite'><a className='linkAviso' href="#">Aviso de privacidad </a> / <a href='#' className='linkAviso'>Contacto</a></p>							
						</Grid>
						<Grid item xs={4}>
						<Box
							component="div"
							sx={{							
							display: 'block',
							justifyContent: "center"
							}}
						>
							<img
							src={LogoOlimpic}							
							alt="img"
							/>
						</Box>    
						</Grid>
						<Grid item xs={4}>							
							<p><a href='#'><img src={MobliIcon} className='linkImgMobil' /></a><a href='#'><img src={TwitterIcon} className='linkImgMobil' /></a> <a href='#'><img src={FaceIcon} className='linkImgMobil' /></a> <a href='#' ><img src={YoutubeIcon} className='linkImgMobil' /></a></p>
						
						</Grid>
					</Grid>
				</Container>
			</Box>
		</div>
	)
};

export default Footer;