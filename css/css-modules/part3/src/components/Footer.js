import React from 'react';
import FootStyles from './foot.css';
export default class Footer extends React.Component {
  render() {
    return (
      <div className={FootStyles.foot}>
      	{this.props.content}
      </div>
    )
  }
}