import React, { Component } from 'react';
import phoebe from '../media/phoebe.jpg';
import abby from '../media/abby.jpg';
import Fauna1 from '../media/Fauna1.jpg';
import sophie_10_female from '../media/sophie_10_female.jpg';
import belle from '../media/belle.jpg';
import bubba from '../media/bubba.jpg';
import daisy from '../media/daisy.jpg';
import fiesta from '../media/fiesta.jpg';
import gracie from '../media/gracie.jpg';
import hadley from '../media/hadley.jpg';
import leonardakapetey from '../media/leonardakapetey.jpg';
import molly from '../media/molly.jpg';
import scooter from '../media/scooter.jpg';
import dukey2 from '../media/dukey2.jpg';
import dukey1 from '../media/dukey1.jpg';

class GridContainer extends Component {
  constructor(props) {
		super(props);

    this.state = {
      pics: [
        {
          id: 0,
          src: phoebe
        },
        {
          id: 1,
          src: Fauna1
        },
        {
          id: 2,
          src: sophie_10_female
        },
        {
          id: 3,
          src: abby
        },
        {
          id: 4,
          src: belle
        },
        {
          id: 5,
          src: bubba
        },

        {
          id: 6,
          src: daisy
        },
        {
          id: 7,
          src: fiesta
        },
        {
          id: 8,
          src: gracie
        },
        {
          id: 9,
          src: hadley
        },
        {
          id: 10,
          src: leonardakapetey
        },
        {
          id: 11,
          src: molly
        },
        {
          id: 12,
          src: scooter
        },
        {
          id: 13,
          src: dukey2
        },
        {
          id: 14,
          src: dukey1
        }
      ],
      clicked: [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false]
    };
	}
  randomizeImages() {
    let randImgs = this.state.pics.slice()
    randImgs.sort(function(a, b){return 0.5 - Math.random()});
    return randImgs;
  }
  clickHandler(pic) {
    console.log('clickHandler', pic.target.id);
    let clicked = this.state.clicked.slice();
    if (clicked[pic.target.id] === false) {
      console.log('not already clicked');
      clicked[pic.target.id] = true;
      this.props.updateScore(true);
      this.setState({
        pics: this.randomizeImages(),
        clicked: clicked
      });
    }
    else {
      console.log('already clicked');
      this.props.updateScore(false);
      this.setState({
        pics: this.randomizeImages(),
        clicked: [false, false, false, false, false, false, false, false, false, false, false, false,false, false, false]
      });
    }

  }
  render() {
    return (
      <div className="grid-container">
        {this.state.pics.map((pic) => {
          return <img src={pic.src} key={pic.id} id={pic.id} alt='cannot support' className='grid-item' onClick={this.clickHandler.bind(this)} />
        })}
      </div>
    );
  }
}

export default GridContainer;
