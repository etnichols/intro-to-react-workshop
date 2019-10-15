import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './List.css'
import '../Base.css'

const MY_FAVORITES = {
  food: 'Pizza Pringles',
  drink: 'Fanta',
  music: 'The Beatles',
  candy: 'Double Stuffed Oreos',
  sport: 'Basketball',
}

class List extends Component {
  render() {
    return (
      <div className="Container">
        <h1>My favorite things</h1>
        <ul className="Favorite-List">
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
