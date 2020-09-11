import React from 'react';
import { Link } from 'react-router-dom'

import classes from './VideoCard.module.css';

class VideoCard extends React.Component {
    state = {
        id: 1,
    }

    handleClick = () => {
        this.props.parentState(this.props.vidId)
    }

    render() {
        return(
            <Link to={`/${this.props.vidId}`}  className={classes.Link}>
                <div onClick={this.handleClick} className={`${classes.link} ${this.props.videoId == this.props.vidId ? classes.Yellow : null}`} >
                    <img className={classes.Thumbnail} src={this.props.thumbnail} alt="Video Thumbnail" />
                    <h3 className={classes.Title}>{this.props.title}</h3>
                </div>
            </Link>
        );
    }
}

export default VideoCard;