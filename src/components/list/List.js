import React, { Component } from 'react'
import PropTypes from 'prop-types'

const MY_FAVORITES = {
  food: 'Pizza Pringles',
  drink: 'Sprite',
  music: 'Lane 8',
  candy: 'Double Stuffed Oreos',
  tv_show: 'Silicon Valley',
}

class List extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.listTitle}</h3>
        <ul>
          {Object.entries(MY_FAVORITES).map(([key, val]) => (
            <li>
              <b>{key}: </b>
              {val}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

List.propTypes = {
  listType: PropTypes.string.isRequired,
}

export default List
