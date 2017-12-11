import React, { Component } from 'react';
import Cindy from '../media/cindy.jpg';
import Fauna1 from '../media/Fauna1.jpg';
import sophie_10_female from '../media/sophie_10_female.jpg';

class GridContainer extends Component {
  constructor(props) {
  		super(props);

      this.state = {
        pics: [
          {
            id: 0,
            src: Cindy
          },
          {
            id: 1,
            src: Fauna1
          },
          {
            id: 2,
            src: sophie_10_female
          }
        ]
      };
  	}

  render() {
    return (
      <div className="grid-container">
        {this.state.pics.map((pic) => {
          return <img src={pic.src} key={pic.id} alt='cannot support' className='grid-item' />
        })}
      </div>
    );
  }
}

export default GridContainer;
