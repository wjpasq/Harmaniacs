import React from 'react';
import Button from '@mui/material/Button';
import Harmonica from './harmonica'

class HarmonicaPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showButton: false,
        };
      }

    componentDidMount() {
        setTimeout(function() {
            this.setState({showButton: true});
        }.bind(this), 4000);
    }
    
    render() {
        let button;
        if (this.props.nextPageIndex && this.state.showButton) {
            button = <Button id='next-page-button' variant="contained" onClick={() => this.props.loadPage(this.props.nextPageIndex) }>Next Page</Button>
        }

        return (
            <div class='harmonica-page'>
                <h1>Play the Harmonica</h1>
                <Harmonica></Harmonica>
                { button }
            </div>
        )
    }
}

export default HarmonicaPage;