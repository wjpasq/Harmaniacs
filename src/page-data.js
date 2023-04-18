import Title from './title-page.js';

/* 

PAGE DATA:
Each page is an object {} that has following properties

pageType: string = 'narrative' || 'challenge'

For narrative pages:
title: string = The title of that page (optional)
story: string = The actual narrative text
    ***** When the story has a link, put the link in an <a class=link> tag and put the link *****
    ***** index (the index of the page in the pageData list that the link links to) in the  *****
    ***** links property. (see below) *****
links: array = Holds the indeces of all links. Each link corresponds to the link in the text as they appear
nextPageIndex: The index pointing to the page that the narrative will go to when the "next page" button is clicked

*/



const pageData = [
    {
      pageType: 'title',
      html: <Title />,
      nextPageIndex: 1,
    },
    {
      pageType: 'narrative',
      story: `Testing 1 2 3 <a class='link' >Page 3</a> Testing some more adjk adkfj adklfj adkf
        afdkljadlkfjadklfja a dfjalkfj ad fkaj dflkajdflakd jflkads jfkald jflkadj flkadj flkadsj flakdsj flakdsjfaldksfj.
        <img class="narrative-image" src="./assets/cartoon-store.png" alt="cartoon-store" >`,
      // imgName: 'cartoon-store.png',
      title: 'Page 1',
      links: [
        {
          linkIndex: 3,
        },
      ],
      nextPageIndex: 2
    },
    {
      pageType: 'narrative',
      story: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      title: 'Page 2',
      nextPageIndex: 3,
    },
    {
      pageType: 'narrative',
      story: `Page 3`,
      title: 'Page 3',
      nextPageIndex: 1,
    }
];


export default pageData;