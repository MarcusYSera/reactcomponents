import React, { Component } from 'react';

import '../global.css';

class Rain extends Component {
  constructor(props) {
    super(props);
    this.state = { increment: 0, drops: '', backDrops: '' };
  }

  componentDidMount = () => {
    this.makeItRain();
  };

  makeItRain = () => {
    const { increment, drops, backDrops } = this.state;
    // clear out everything
    // $('.rain').empty();

    let newIncrement = increment;
    let newDrops = drops;
    let newBackDrops = backDrops;

    while (increment < 100) {
      // couple random numbers to use for various randomizations
      // random number between 98 and 1
      const randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      // random number between 5 and 2
      const randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      // increment
      newIncrement += randoFiver;
      // add in a new raindrop with various randomizations to certain CSS properties
      newDrops += `<div class="drop" style="left: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
      newBackDrops += `<div class="drop" style="right: ${increment}%; bottom: ${
        randoFiver + randoFiver - 1 + 100
      }%; animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"><div class="stem" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div><div class="splat" style="animation-delay: 0.${randoHundo}s; animation-duration: 0.5${randoHundo}s;"></div></div>`;
    }
    this.setState(() => ({
      increment: newIncrement,
      drops: newDrops,
      backDrops: newBackDrops,
    }));
    // $('.rain.front-row').append(drops);
    // $('.rain.back-row').append(backDrops);
  };

  // $('.splat-toggle.toggle').on('click', () => {
  //   $('body').toggleClass('splat-toggle');
  //   $('.splat-toggle.toggle').toggleClass('active');
  //   makeItRain();
  // });

  // $('.back-row-toggle.toggle').on('click', () => {
  //   $('body').toggleClass('back-row-toggle');
  //   $('.back-row-toggle.toggle').toggleClass('active');
  //   makeItRain();
  // });

  // $('.single-toggle.toggle').on('click', () => {
  //   $('body').toggleClass('single-toggle');
  //   $('.single-toggle.toggle').toggleClass('active');
  //   makeItRain();
  // });

  render() {
    return (
      <div>
        <h1>Rain</h1>
        <div className="back-row-toggle splat-toggle">
          <div className="rain front-row" />
          <div className="rain back-row" />
          <div className="toggles">
            <div className="splat-toggle toggle active">SPLAT</div>
            <div className="back-row-toggle toggle active">
              BACK
              <br />
              ROW
            </div>
            <div className="single-toggle toggle">SINGLE</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rain;
