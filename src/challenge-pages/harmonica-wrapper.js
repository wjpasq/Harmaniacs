import React from 'react';
import Button from '@mui/material/Button';
import Harmonica from './harmonica'

class HarmonicaPage extends React.Component {

    render() {
        let button;
        if (this.props.nextPageIndex) {
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