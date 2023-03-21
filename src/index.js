import React from 'react';
import ReactDOM from 'react-dom/client';
// import Button from '@mui/material/Button';
// import Slide from '@mui/material/Slide';
// import Fade from '@mui/material/Fade';
// import './index.css';
import Title from './title-page.js';
import NarrativePage from './narrative-page.js';

// class Title extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       in: true,
//     };
//   }
  
//   render() {
//     return (
//       <div class="title-div">
//         <Slide in={this.state.in} timeout={500} mountOnEnter unmountOnExit>
//           <div>
//             <h1>Welcome to --Insert Title of narrative here--</h1>
//             <h3>By the Harmaniacs</h3>
//           </div>
//         </Slide>
//         <Fade style={{transitionDelay: '500ms'}} in={this.state.in} timeout={500} mountOnEnter unmountOnExit>
//           <Button variant="contained" onClick={() => this.setState({in: false})}>
//             START
//           </Button>
//         </Fade>
//       </div>
//     );
//   }
// }
  
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Title />);
// const PageTypes = {
//   Narrative: 'narrative',
//   Challenge: 'challenge'
// };

const pageData = [
  {
    pageType: 'title'
  },
  {
    pageType: 'narrative',
    story: `Testing 1 2 3 <a class='link' >Page 3</a> Testing some more adjk adkfj adklfj adkf
      afdkljadlkfjadklfja a dfjalkfj ad fkaj dflkajdflakd jflkads jfkald jflkadj flkadj flkadsj flakdsj flakdsjfaldksfj.`,
    title: 'Page 1',
    links: [
      {
        nextPageIndex: 3,
      },
    ]
  },
  {
    pageType: 'narrative',
    story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    title: 'Page 2',
  },
  {
    pageType: 'narrative',
    story: `Page 3`,
    title: 'Page 3'
  }, 
  {
    pageType: 'challenge',
    html: <Title />
  }
];


class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: null,
      activeIndex: 0,
    };

  }

  nextPage(i) {
    console.log("setting page index to", i);
    this.setState({ activeIndex: i});
    // this.render();
  }

  loadPage(i) {
    console.log("loading page", i);
    let pageType = pageData[i].pageType;
    if (pageType == 'narrative') {
      return this.loadNarrativePage(i);
    } else if (pageType == 'challenge') {
      return this.loadChallengePage(i);
    } else if (pageType == 'title') {
      return (
        <Title loadPage={(i) => this.nextPage(i) } nextPageIndex={(this.state.activeIndex + 1)}/>
      );
    }
  }

  loadNarrativePage(i) {
    console.log('loading narrative page', i);
    const title = pageData[i].title;
    const story = pageData[i].story;
    const links = pageData[i].links;

    return (
      <NarrativePage 
        title={title} 
        story={story} 
        loadPage={(i) => this.nextPage(i)}
        links={links} 
        // loadChallengePage={() => this.loadChallengePage(i)}
        nextPageIndex={this.state.activeIndex + 1}/>
    );
  }

  loadChallengePage(i) {
    return pageData[i].html;
  }

  render() {
    console.log("rendering page:", this.state.activeIndex);
    return this.loadPage(this.state.activeIndex);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Controller />);