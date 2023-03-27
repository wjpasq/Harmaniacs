import React from 'react';
import ReactDOM from 'react-dom/client';
import Title from './title-page.js';
import NarrativePage from './narrative-page.js';
import HelpNPCs from './challenge-pages/HelpNPCs.js';
import Harmonica from './challenge-pages/harmonica.js';

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

    /* 

    PAGE DATA:
    Each page is an object {} that has following properties

    pageType: string = 'narrative' || 'challenge'

    For narrative pages:
    title: string = The title of that page (optional)
    story: string = The actual narrative text
        ***** When the story has a link, put the link in an <a class='link'> tag and put the link *****
        ***** index (the index of the page in the pageData list that the link links to) in the  *****
        ***** links property. (see below) *****
    links: array = Holds the indeces of all links. Each link corresponds to the link in the text as they appear
    nextPageIndex: The index pointing to the page that the narrative will go to when the "next page" button is clicked

    */

    this.pageData = [
      {
        /////////// Index 0 //////////
        pageType: 'challenge',
        html: <Title loadPage={(i) => this.nextPage(i) } nextPageIndex={1} />,
        nextPageIndex: 1,
      },
      {
        /////////// Index 1 //////////
        pageType: 'narrative',
        title: 'Stan Owns a Music Shop',
        story: `The year is 2323, and the end of the world was several years ago. A post-apocalyptic society has formed that 
          strongly resembles the world of a vintage game called Fallout, popular in the early 21st century. The music shop 
          seen here is owned by Stan the Man.
          <br>
          <img class="narrative-image" src="./assets/cartoon-store.png" alt="cartoon-store" >
          <br>
          Stan the Man is a flat character to everyone around him. <a class='link'>His customers barely remember their actions with the quiet, 
          well-mannered man behind the counter</a>, and even his family sometimes forgets that Stan the Man has opinions and his own
          personality traits. However, to himself, Stan is so much more than just a flat character. His life has two passions: 
          his music store, and his sick harmonica skills. 
          <br><br>
          Stan has poured his life's energy into his music store, stocking it with rare instruments and records, and creating 
          a space where music lovers flock to share their passion in a world with little room remaining for art and music. 
          Stan also spends hours a day <a class='link'>practicing his harmonica</a>, serenading the ruins of a once-prosperous land.`,
        links: [
          {
            linkIndex: 2
          },
          {
            linkIndex: 3,
          }
        ],
        nextPageIndex: 4
      },
      {
        /////////// Index 2 //////////
        pageType: 'challenge',
        html: <HelpNPCs loadPage={(i) => this.nextPage(i) } nextPageIndex={1} />,
      },
      {
        /////////// Index 3 //////////
        pageType: 'challenge',
        html: <PlayHarmonica loadPage={(i) => this.nextPage(i) } nextPageIndex={1} />,
      },
      {
        /////////// Index 4 //////////
        pageType: 'narrative',
        title: 'Chaos',
        story: `One day, Stan was lovingly polishing his vintage guitar collection with the softest cloth in his possession when he heard 
          two gunshots outside. The door to the music shop slammed open, rattling the vintage guitars and silhouetting an imposing figure 
          in the dusty sunlight.
          <br>
          <br>
          “Howdy,” the Main Character growled, sliding a smoking gun back into a tattered leather holster. “Show me the best guitar you own.”
          <br>
          <br>
          Stan the Man didn't trust Main Character. He had heard too many stories about Main Character's exploits and “heroics” across the 
          nation, all of which seemed unnecessarily egoistic and self-serving. But a customer was a customer, and Stan felt that he couldn't 
          say no.
          <br>
          <br>
          “Here you go,” Stan said, carefully removing a [Steven what are good guitars] from its spot on the wall and handing it to Main 
          Character, who grabbed it roughly. <a class='link'>“Do you know how to play?”</a>
          <br>
          <br>
          Main Character strummed a truly awful chord. “I'll figure it out. Thanks,” he said, and he turned as if about to leave.
          <br>
          <br>
          “Wait!” Stan the Man said. “I won't sell that guitar if you can't play it properly. And you would have to pay even if 
          I did sell it to you.”
          <br>
          <br>
          Main Character spun on his heel, unholstering his gun and taking deadly aim. A series of gunshots rang out as vintage 
          guitar after vintage guitar exploded, showering the store in <a class='link'>priceless fragments</a>. <a class='link'>
          Within a few moments, every large instrument was destroyed.</a>`,
          links: [
            {
              linkIndex: 5
            },
            {
              linkIndex: 6
            },
            {
              linkIndex: 7
            }
          ],
      },
      {
        /////////// Index 5 //////////
        pageType: "narrative",
        title: "Thief",
        story: `“Doesn't matter,” Main Character said. He unholstered his gun and fired. A priceless guitar splintered into smithereens. 
        “It's mine now.” 
        <br>
        <br>
        Stan wept in disbelief. “You can't do that!”
        <br>
        <br>
        “I just did,” Main Character said, swinging the remaining guitar over his shoulder carelessly. “Thanks for the guitar.” 
        <br>
        <br>
        “I- I challenge you to a duel!” Stan the Man said. He couldn't believe what had just escaped his mouth; it was Main 
        Character's job to fight bad guys and start duels, not his. But he could not sit down and accept the destruction of 
        his life's work without a fight. 
        <br>
        <br>
        “Okay,” Main Character said. “Guns or fists?”
        <br>
        <br>
        Stan realized he did not know how to fight. “Harmonica,” he said, producing his prized possession, a pure gold 
        vintage Harmaniac 3000, from his pocket. 
        <br>
        <br>
        Main Character considered the harmonica for a second. Moving fast as lightning, he snatched it out of Stan's 
        hand and sprinted away before Stan could react.
        `,
        nextPageIndex: 8
      },
      {
        /////////// Index 6 //////////
        pageType: "narrative",
        title: "Death by Harmonica",
        story: `Stan wept in disbelief. “You can't do that!”
        <br>
        <br>
        “I just did,” Main Character said, swinging the remaining guitar over his shoulder carelessly. “Thanks for the guitar.” 
        <br>
        <br>
        “I- I challenge you to a duel!” Stan the Man said. He couldn't believe what had just escaped his mouth; it was Main 
        Character's job to fight bad guys and start duels, not his. But he could not sit down and accept the destruction of 
        his life's work without a fight. 
        <br>
        <br>
        “Okay,” Main Character said. “Guns or fists?”
        <br>
        <br>
        Stan realized he did not know how to fight. “Harmonica,” he said, producing his prized possession, a pure gold vintage 
        Harmaniac 3000, from his pocket. 
        <br>
        <br>
        HARMONICA DUEL --> STAN DIES
        <br>
        <br>
        Stars swam in Stan's eyes as Main Character stalked out of the rubble of the shop with a guitar in one hand and a 
        harmonica in the other. Before he knew it, the world was dark.
        `,
        nextPageIndex: 1
      },
      {
        /////////// Index 7 //////////
        pageType: 'narrative',
        title: 'Victory at Last',
        story: `Stan wept in disbelief. “You can't do that!”
        <br>
        <br>
        “I just did,” Main Character said, swinging the remaining guitar over his shoulder carelessly. “Thanks for the guitar.” 
        <br>
        <br>
        “I- I challenge you to a duel!” Stan the Man said. He couldn't believe what had just escaped his mouth; it was Main 
        Character's job to fight bad guys and start duels, not his. But he could not sit down and accept the destruction of 
        his life's work without a fight. 
        <br>
        <br>
        “Okay,” Main Character said. “Guns or fists?”
        <br>
        <br>
        Stan realized he did not know how to fight. “Harmonica,” he said, producing his prized possession, a pure gold vintage 
        Harmaniac 3000, from his pocket. 
        <br>
        <br>
        HARMONICA DUEL --> STAN WINS
        <br>
        <br>
        The Main Character let out a shriek of defeat, gently placed the guitar and harmonica on the counter, and left the shop, 
        hanging his head in shame. Stan was in shock. Was this what it felt like to be a Main Character? 
        <br>
        <br>
        Suddenly, everything began to lag slightly, and Stan heard a strange singing from above. The door began to glow. 
        `,
        nextPageIndex: 13
      },
      {
        /////////// Index 8 //////////
        pageType: 'narrative',
        title: 'Get Him!',
        story: `Stan sprinted after Main Character as fast as his legs could carry him. Main Character was in better shape, 
        since he spent most of his days traveling and fighting, <a class='link'>but he was also carrying a large guitar and 
        very valuable harmonica</a>. <a class='link'>Stan began to gain on him</a>.
        <br>
        <br>
        Main Character looked over his shoulder and locked eyes with Stan. “<a class='link'>You'll never catch me!</a>” `,
        links: [
          {
            linkIndex: 9
          },
          {
            linkIndex: 10
          },
          {
            linkIndex: 11
          }
        ],
        nextPageIndex: 12
      },
      {
        /////////// Index 9 //////////
        pageType: 'narrative',
        title: 'Gunslinger',
        story: `“Fight me like a man!” Stan yelled. “What kind of coward runs from a challenge?”
        <br>
        <br>
        Main Character stopped. “Counterpoint,” he said. “What kind of coward brings a harmonica to a gunfight?”
        <br>
        <br>
        “I don't have a gun,” Stan said.
        <br>
        <br>
        Main Character sighed. He pulled an extra gun out of his back pocket, did some cool gun flips around his hand, 
        and presented the handle to Stan. “Twelve paces, fire on the count of three?” 
        <br>
        <br>
        “Okay,” Stan said, taking the gun. Main Character turned around and began counting off twelve paces. 
        <br>
        <br>
        Stan got nervous. He'd never shot a gun before. His hands were shaking as he tried to aim it. 
        <br>
        <br>
        Suddenly there was a loud noise and the gun kicked back in his hands. Main Character collapsed, blood slowly 
        seeping across the back of his shirt. Stan blew the smoke out of his face and stared in surprise at his 
        vanquished foe. 
        <br>
        <br>
        “Is this what it feels like to be a Main Character?” he said. Main Character didn't answer, because he was dead. 
        Stan decided to celebrate. 
        <br>
        <br>
        [insert free-form harmonica]
        [Main Character respawns]
        <br>
        <br>
        “That wasn't very nice,” Main Character said. “I don't fight people who don't play by the rules.” 
        <br>
        <br>
        Main Character turned around and ran. Stan started chasing him again.
        `,
        nextPageIndex: 8
      },
      {
        /////////// Index 10 //////////
        pageType: 'narrative',
        title: 'Oops',
        story: `Main Character grinned evilly and threw the guitar at Stan. Stan the Man tried to dodge and catch 
        the guitar at the same time, and ended up tripping when the guitar got tangled in his legs.
        <br>
        <br>
        The last thing he saw was Main Character accelerating, and the last thing he heard was the untuned twanging 
        of the broken guitar.
        `,
        nextPageIndex: 1,
      },
      {
        /////////// Index 11 //////////
        pageType: 'narrative',
        title: 'Fight',
        story: `“Then fight me like a man!” Stan yelled. “What kind of coward runs from a challenge?”
        <br>
        <br>
        Main Character stopped. “Good point,” he said. 
        <br>
        <br>
        [insert non-harmonica challenge. Stan wins]
        <br>
        <br>
        “Fair fight, I guess,” Main Character said, grudgingly handing Stan the Man the harmonica. “You better watch 
        it, though. I'll be back.” 
        <br>
        <br>
        “I'll be ready,” Stan said. Main Character scoffed and stalked away. 
        <br>
        <br>
        Stan walked back to his shop, playing some neat licks on the harmonica to console himself over the destruction. 
        <br>
        <br>
        It took months, but eventually Stan was able to repair every broken guitar and restore the shop to its former 
        glory. 
        <br>
        <br>
        “Let's hope Main Character never bothers me again,” he said.
        `,
        nextPageIndex: 4,
      },
      {
        /////////// Index 12 //////////
        pageType: 'narrative',
        title: 'The Escape',
        story: ` Stan ran as fast as he could, but Main Character's figure was growing smaller and smaller as he drew 
        further away.Eventually Stan slowed to a walking pace as he accepted that he was never going to catch Main 
        Character. He turned around and walked back to the ruins of his shop.
        <br>
        <br>
        It took months, but eventually Stan was able to repair every broken guitar and restore the shop to its 
        former glory. He was even able to find a replacement pure gold vintage Harmaniac 3000 on the black market.
        <br>
        <br>
        “Let's hope Main Character never bothers me again,” he said.
        `,
        nextPageIndex: 1
      },
      {
        /////////// Index 13 //////////
        pageType: 'narrative',
        title: 'The End',
        story: `The door swung open again, revealing a figure in jeans and a T-shirt who could have been straight 
        out of 2023. 
        <br>
        <br>
        “Well done, Stan the Man,” the figure said.
        <br>
        <br>
        “Thanks,” Stan said. “Who are you?”
        <br>
        <br>
        “I'm afraid you should be asking who you are,” the figure said gently. “Stan, I hate to break it to you, 
        but you're an NPC. You weren't supposed to do that.”
        <br>
        <br>
        Stan's world came crashing down. “Is that why nobody listens to me? And why I have no control over my 
        own actions or destiny?”
        <br>
        <br>
        “Yes.” 
        <br>
        <br>
        “Darn,” Stan said. “How do you know? Are you- what did they call them back then- the game developer?” 
        <br>
        <br>
        “Oh, Stan,” the figure said, glowing even brighter. “Those went extinct centuries ago. Haven't you 
        ever heard of ChatGPT?”`
      }
    ];

    this.state = {
      activeIndex: 0,
    };

  }

  nextPage(i) {
    this.setState({ activeIndex: i});
  }

  loadPage(i) {
    let pageType = this.pageData[i].pageType;
    if (pageType === 'narrative') {
      return this.loadNarrativePage(i);
    } else if (pageType === 'challenge') {
      return this.loadChallengePage(i);
    } 
    // else if (pageType === 'title') {
    //   return (
    //     <Title loadPage={(i) => this.nextPage(i) } nextPageIndex={(this.state.activeIndex + 1)}/>
    //   );
    // }
  }

  loadNarrativePage(i) {
    const title = this.pageData[i].title;
    const story = this.pageData[i].story;
    const links = this.pageData[i].links;
    const nextPageIndex = this.pageData[i].nextPageIndex;
    const imgName = this.pageData[i].imgName;

    return (
      <NarrativePage 
        key={i}
        title={title} 
        story={story} 
        loadPage={(i) => this.nextPage(i)}
        links={links} 
        imgName={imgName}
        nextPageIndex={nextPageIndex}/>
    );
  }

  loadChallengePage(i) {
    return this.pageData[i].html;
  }

  render() {
    return this.loadPage(this.state.activeIndex);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Controller />);
root.render(<Harmonica />);