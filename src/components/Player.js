import React, { Component } from 'react';
import {togglePlayer} from '../actions/playerActions';
import {connect} from 'react-redux';
import {PropTypes} from 'prop-types';
import Button from 'react-bootstrap/Button';


class Player extends Component {
    
    componentDidUpdate(){
        window.scrollTo(0, 0)
    }


    render() {
        const jsx = this.props.isVideoPlayerOpen&&
        <div className="player-background">
            <Button variant='danger' className="close-button" onClick={this.props.togglePlayer}>X</Button>

            <div style={{position: 'absolute', top: '0px', width:'80%', left:'10%'}}>
            <div style={{width:'100%',height:'0px',position:'relative',paddingBottom:'calc(56.25% + 335px)'}} className='scorebatEmbeddedPlayerW'>
            <iframe title="title" src={this.props.link} frameBorder='0' width='560' height='650' allowFullScreen allow='autoplay; fullscreen' style={{width:'100%',height:'100%',position:'absolute',left:'0px',top:'0px',overflow:'hidden'}} className='scorebatEmbeddedPlayer'>
            </iframe>
            </div>
        </div>
        </div>;

        return jsx;
    }
}

Player.propTypes = {
    togglePlayer: PropTypes.func.isRequired,
    isVideoPlayerOpen: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
    isVideoPlayerOpen: state.player.isVideoPlayerOpen,
    link: state.player.link
  });
  
export default connect(mapStateToProps, { togglePlayer })(Player);
