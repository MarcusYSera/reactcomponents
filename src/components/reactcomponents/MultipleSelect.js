import React, { Component } from 'react';

class MultipleSelect extends Component {
  state = { value: '', sel: false };

  handleBlur = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { value } = this.state;
    console.log(value);
  };

  mouseDownPress = (e) => {
    const { sel } = this.state;
    e.preventDefault();
    const x = !sel;
    this.setState({
      sel: x,
    });
    console.log('mouse down');
  };

  render() {
    const { sel } = this.state;
    return (
      // <button
      //   type="button"
      //   className="ui fluid dropdown selection multiple"
      //   onClick={clickOpen}
      //   onKeyDown={clickOpen}
      // >
      <form onSubmit={this.handleSubmit}>
        <h4>
          Come Back to work this out later, need to input each option value into a
          map with true or false and save those values on each mouse down
        </h4>
        <select
          name="skills"
          onBlur={this.handleBlur}
          // className="ui fluid search dropdown"
          multiple
        >
          <option value="" selected={sel} onMouseDown={this.mouseDownPress}>
            Skills
          </option>
          <option value="angular">Angular</option>
          <option value="css">CSS</option>
          <option value="design">Graphic Design</option>
          <option value="ember">Ember</option>
          <option value="html">HTML</option>
          <option value="ia">Information Architecture</option>
          <option value="javascript">Javascript</option>
          <option value="mech">Mechanical Engineering</option>
          <option value="meteor">Meteor</option>
          <option value="node">NodeJS</option>
          <option value="plumbing">Plumbing</option>
          <option value="python">Python</option>
          <option value="rails">Rails</option>
          <option value="react">React</option>
          <option value="repair">Kitchen Repair</option>
          <option value="ruby">Ruby</option>
          <option value="ui">UI Design</option>
          <option value="ux">User Experience</option>
        </select>
        <input type="submit" value="Submit" />
      </form>
      // <i className="dropdown icon" />
      // <div className="default text">Skills</div>
      // <div className="menu transition hidden">
      //   <div className="item" data-value="angular">
      //     angular
      //   </div>
      // </div>
      // </button>
    );
  }
}

export default MultipleSelect;
