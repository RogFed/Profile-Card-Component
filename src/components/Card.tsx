import React from 'react'

import Insight from './Insight'

import '../styles/Card.scss'

import avatar from '../images/image-victor.jpg'

const insights = [
  {
    title: '80k',
    tag: 'Followers',
  },
  {
    title: '803k',
    tag: 'Likes',
  },
  {
    title: '1.4k',
    tag: 'Photos',
  },
]

const Card = () => (
  <section className='Card'>
    <header className='Card__header'>
      <img src={avatar} alt='Card avatar' />
    </header>
    <div className='Card__body'>
      <h1>
        Victor Crest <span>26</span>
      </h1>
      <p>London</p>
    </div>
    <footer>
      {insights.map((insight, index) => (
        <Insight {...insight} key={index} />
      ))}
    </footer>
  </section>
)

export default Card
