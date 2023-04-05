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
        if (this.props.nextPageIndex) {
            button = <Button id='next-page-button' variant="contained" onClick={() => this.props.loadPage(this.props.nextPageIndex) }>Next Page</Button>
        }

        let title;
        if (this.props.title) {
            title = <h1>{ this.props.title }</h1>
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