import { useState } from "react";
import CounterTime from '../../components/CounterTime/CounterTime';
import { Container } from '@mui/material'
import { PlayerVideo } from '../../components/PlayerVideo/PlayerVideo';
import ListVideos from '../../components/ListVideos/ListVideos/ListVideos';
import { Footer } from '../../components/Footer/Footer';

const Home = () => {
	const [videoInfo, setVideoInfo] = useState({ code: "4AO_NvoxwNw" });
	return (
		<>				
		<div className='fondo'>
			<h1 className='titleTimer'>FALTAN</h1>
			<Container maxWidth="xs">
				<CounterTime />
			</Container>
			<Container maxWidth="sm">				
				<PlayerVideo videoInfo={videoInfo} />
			</Container>		
		</div>
		<Container maxWidth="xl">
			<ListVideos setVideoInfo={setVideoInfo} />
		</Container>
		<Container maxWidth="xl">
			<hr className='lineGray' />	
			<Footer/>
		</Container>
		</>	
	)
};

export default Home;