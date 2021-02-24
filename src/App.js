import React, { Component } from 'react'
import {Grid} from '@material-ui/core';
import { SearchBar ,VideoDetail, VideoList} from './components';
import  youtube from    './api/youtube';

export default class App extends Component {
         
        state ={
            videos:[],
            selectedVideo:null,
        }
        onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
        }
        
      handleSubmit = async  (searchTerm) => {
          const response = await youtube.get('search',{
            params:{
            part:'snippet',
            maxResults: 5,
            key:'AIzaSyDOfMR0igjv2ikhGDd1qsJkuxaDCqaeEGM',
            q: searchTerm,
            }
        });
    
  //    console.log(response.data.items);

  this.setState({videos: response.data.items, selectedVideo:response.data.items[0]});
    
}
    render() {
        const  {selectedVideo, videos}= this.state;
        return (
           <Grid justify="center" container spacing={10}>   
            <Grid item xs={12} >
                <Grid container spacing={10}>
                    <Grid item xs={12}>
                    <SearchBar onFormSubmit={this.handleSubmit} />
                    </Grid>
                    <Grid item xs={7}>
                    <VideoDetail video = {selectedVideo}/>
                    </Grid>
                    <Grid item xs= {5}>
                    <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                    </Grid>
                 </Grid>
              </Grid>
           </Grid>
        )
    }
}
