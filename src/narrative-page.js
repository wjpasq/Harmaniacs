import React from 'react';
import Button from '@mui/material/Button';


class NarrativePage extends React.Component {
    componentDidMount() {
        //When narrative page mounts, add all the links
        const docLinks = document.getElementsByClassName('link');
        for (let i = 0; i < docLinks.length; i++) {
            const linkElement = docLinks[i];
            linkElement.addEventListener('click', () => {
                this.props.loadPage(this.props.links[i].linkIndex);
            });
        }
    }

    render() {
        let button;
        let darkness = new Audio('./assets/hello_darkness.mp3');
        if (this.props.nextPageIndex) {
            button = <Button id='next-page-button' variant="contained" onClick={() => this.props.loadPage(this.props.nextPageIndex) }>Next Page</Button>
        }

        let title;
        if (this.props.title) {
            title = <h1>{ this.props.title }</h1>
        }

        if (this.props.title === 'Hello Darkness' || this.props.title === 'The End') {
            // console.log()
            //play hello darkness
            darkness.play();
            darkness.addEventListener('ended', () => {
                darkness.currentTime = 0;
                darkness.play();
            });

            if (this.props.title !== 'The End') {
                button = <Button id='next-page-button' variant="contained" onClick={() => {
                    darkness.pause();
                    this.props.loadPage(this.props.nextPageIndex);
                } }>Next Page</Button>
            }
        }

        return (
            <div>
                <div className='narrative-paragraph'>
                    { title }
                    <p dangerouslySetInnerHTML={{ __html: this.props.story }}></p>
                </div>
                { button }
            </div>
        );
    }
}

export default NarrativePage;