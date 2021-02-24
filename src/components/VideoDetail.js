import React from 'react';
import{Paper, typography}  from '@material-ui/core';

const VideoDetail= ({video}) => {
    if(!video) return <div>Loading..</div>
   
    console.log(video);

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
      <React.Fragment>
          <Paper elevation ={6} style= {{ height:'40%'}}>
        <iframe frameBorder="0" height= "100%" width= "100%" title="Video Player" src ={videoSrc}/>

          </Paper>
          <Paper elevation ={6} style={{ padding:'20px 10px'}}>
        <typography variant="h4"> {video.snippet.title} - {video.snippet.channelTitle}</typography>
        <typography variant= "subtitle1">{video.snippet.channelTitle}</typography>
       <typography  variant="subtitile2">{video.snippet.description}</typography>
       </Paper>
      </React.Fragment>
    )
}
export default VideoDetail;