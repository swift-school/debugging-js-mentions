/* eslint no-console: 0 */

import React from 'react';
import Mentions from '../src';
import '../assets/index.less';

const { Option } = Mentions;

class Demo extends React.Component {
  render() {
    return (
      <div>
        <Mentions placeholder="Use @ to mention">
          <Option value="light">Light</Option>
          <Option value="cat">Kitty</Option>
          <Option value="bamboo">Bamboo</Option>
          <Option value="cat">Cat</Option>
        </Mentions>
      </div>
    );
  }
}

export default Demo;
