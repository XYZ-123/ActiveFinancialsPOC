require('normalize.css');
require('styles/App.css');

import React from 'react';
import _ from 'lodash';


let yeomanImage = require('../images/yeoman.png');
var ReactGridLayout = require('react-grid-layout');

class AppComponent extends React.Component {

  constructor(props)
  {
    super(props);
  }

  render() {
    return (
      <ReactGridLayout className="layout" cols={12} rowHeight={30}>
        <div key={1} _grid={{x: 0, y: 0, w: 1, h: 2}}>1</div>
        <div key={2} _grid={{x: 1, y: 0, w: 1, h: 2}}>2</div>
        <div key={3} _grid={{x: 2, y: 0, w: 1, h: 2}}>3</div>
      </ReactGridLayout>
    );
  }
}

AppComponent.defaultProps = {className: "layout",
  items: 20,
  rowHeight: 30,
  cols: 12
};

export default AppComponent;
