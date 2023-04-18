import React from 'react';
import Button from '@mui/material/Button';

class PlayHarmonica extends React.Component {
    render () {
        return (
            <div>
                <h1>Play that funky harmonica, white boy</h1>
                <Button id='next-page-button' variant="contained" onClick={() => this.props.loadPage(this.props.nextPageIndex) }>
                    Next Page
                </Button>
            </div>
        );
    }
}

export default PlayHarmonica;