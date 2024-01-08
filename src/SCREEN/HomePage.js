import React from 'react'
import NavigationBar from '../components/NavigationBar'
import Card from '../components/Card'
import CarouselSlide from '../components/CarouselSlide'


export default function HomePage() {
  return (
    <div>
        <div><NavigationBar /></div>
        <div><CarouselSlide/></div>
        <div><Card/></div>
        <div>Footer</div>
    </div>
  )
}
