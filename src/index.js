import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './title-page.js';
import NarrativePage from './narrative-page.js';
import pageData from './page-data.js';


class Controller extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageType: null,
      activeIndex: 0,
    };

  }

  nextPage(i) {
    this.setState({ activeIndex: i});
  }

  loadPage(i) {
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
    const title = pageData[i].title;
    const story = pageData[i].story;
    const links = pageData[i].links;
    const nextPageIndex = pageData[i].nextPageIndex;

    return (
      <NarrativePage 
        key={i}
        title={title} 
        story={story} 
        loadPage={(i) => this.nextPage(i)}
        links={links} 
        nextPageIndex={nextPageIndex}/>
    );
  }

  loadChallengePage(i) {
    return pageData[i].html;
  }

  render() {
    return this.loadPage(this.state.activeIndex);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Controller />);