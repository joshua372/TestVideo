import ReactPlayer from 'react-player'

const PlayerVideo = ( { videoInfo } ) => {

	let urlVideo = 'https://www.youtube.com/watch?v='+Object.values(videoInfo)
	
	return(
		
			<div className='player-wrapper'>			
				<ReactPlayer
				url={urlVideo}
				className='react-player'
				playing
				width='100%'
				height='100%'		
				/>
			</div>	
		
	)
}

export default PlayerVideo;