import React from 'react';
import { Link } from 'react-router-dom'

import classes from './VideoCard.module.css';

class VideoCard extends React.Component {

    handleClick = () => {
        this.props.history.push(`/${this.props.vidId}`)
    }

    render() {
        console.log(this.props)
        return(
            <Link to={`/${this.props.vidId}`} className={classes.link}>
                <div onClick={this.handleClick} className={`${classes.CardContainer} ${this.props.ID === this.props.vidId ? classes.Yellow : null}`} >
                    <img className={classes.Thumbnail} src={this.props.thumbnail} alt="Video Thumbnail" />
                    <h3 className={classes.Title}>{this.props.title}</h3>
                </div>
            </Link>
        );
    }
}

export default VideoCard;