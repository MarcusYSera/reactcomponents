import React, { Component } from 'react';
import { CSSTransitionGroup, TransitionGroup } from 'react-transition-group';

class Animation extends Component {
  state = { items: ['hello', 'world', 'nom', 'nomers'] };

  handleAdd = () => {
    const newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({ items: newItems });
  };

  handleRemove = (i) => {
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  };

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <h3>CSS Transition</h3>
        <button type="button" onClick={this.handleAdd}>
          Add Item
        </button>
        <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </CSSTransitionGroup>
        <h3>Transition</h3>
        <TransitionGroup component="ul">{/* ... */}</TransitionGroup>
      </div>
    );
  }
}

export default Animation;
