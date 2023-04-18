import React from 'react';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import Fade from '@mui/material/Fade';
import './index.css';

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      in: true,
    };
  }
  
  buttonClicked() {
    let audio = new Audio("./assets/bow-bow.mp3");
    audio.play();
    this.setState({in: false});
    this.props.loadPage(this.props.nextPageIndex);
  }

  render() {
    return (
      <div className="title-div">
        <Slide in={this.state.in} timeout={500} mountOnEnter unmountOnExit>
          <div>
            <h1>Stan's Stand: The Fight Against an Evil Customer</h1>
            <h3>By the Harmaniacs</h3>
          </div>
        </Slide>
        <Fade style={{transitionDelay: '500ms'}} in={this.state.in} timeout={500} mountOnEnter unmountOnExit>
          <Button variant="contained" onClick={() => this.buttonClicked()}>
            START
          </Button>
        </Fade>
      </div>
    );
  }
}

export default Title;