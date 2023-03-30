import React from 'react';
import ReactDOM from 'react-dom/client';
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
    this.setState({in: false});
    this.props.loadPage(this.props.nextPageIndex);
  }

  render() {
    return (
      <div className="title-div">
        <Slide in={this.state.in} timeout={500} mountOnEnter unmountOnExit>
          <div>
            <h1>Welcome to --Insert Title of narrative here--</h1>
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