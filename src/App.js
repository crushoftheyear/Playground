import React from 'react'
import 'normalize.css'
import 'sass/app.scss'

import { Header } from 'components/Header'
import { Hero } from 'components/Hero'
import { ColorSwatches } from 'components/ColorSwatches'

export const App = () => {
  return (
    <div className="wrapper">

      <Header />
      <Hero />
      <ColorSwatches />

    </div>
  )
}
