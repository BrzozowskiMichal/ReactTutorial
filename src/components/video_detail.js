import React from 'react';
import {CircleLoader} from 'react-spinners';

class LoadingComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            loading: true
        }
    }
    render(){
        return(
            <div className="sweet-loading">
                <CircleLoader
                    color={'green'}
                    loading={this.state.loading}
                />
            </div>
        );
    }
}


const VideoDetail = (props)=>{
    
    if(!props.video){
        return <LoadingComponent />;
    }

    const videoId = props.video.id.videoId;
    //const url = "https://www.youtube.com/embed/" + videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className="video-detail col-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} allowFullScreen></iframe>
            </div>
            <div className="details">
                <br />
                <div>{props.video.snippet.title}</div>
                <div className="video-description">{props.video.snippet.description}</div>
            </div>
        </div>
    );

};

export default VideoDetail;
