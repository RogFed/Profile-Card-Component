import React from 'react'

import '../styles/Insight.scss'

interface InsightProps {
  title: string
  tag: string
}

const Insight = ({ title, tag }: InsightProps) => (
  <div className='Insight'>
    <h2>{title}</h2>
    <p>{tag}</p>
  </div>
)

export default Insight
