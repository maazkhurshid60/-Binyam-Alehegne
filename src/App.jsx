import { useState, useEffect } from 'react'
import Banner from './components/Banner'
import Header from './components/Header'
import Hero from './components/Hero'
import AppPreview from './components/AppPreview'
import ColorBlocks from './components/ColorBlocks'
import Features from './components/Features'
import StatsBanner from './components/StatsBanner'
import ExamBoards from './components/ExamBoards'
import Reviews from './components/Reviews'
import Philosophy from './components/Philosophy'
import WhyWeStarted from './components/WhyWeStarted'
import Teachers from './components/Teachers'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Blog from './components/Blog'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  const [isUS, setIsUS] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const region = params.get('r')
    if (region === 'us') { setIsUS(true); return }
    if (region === 'eu') return
    fetch('https://ipapi.co/json/')
      .then(r => r.json())
      .then(d => {
        const isAmericas = ['NA', 'SA'].includes(d.continent_code || '')
        const dest = isAmericas ? 'us' : 'eu'
        history.replaceState(null, '', '?r=' + dest)
        if (isAmericas) setIsUS(true)
      })
      .catch(() => {})
  }, [])

  return (
    <>
      <CookieBanner />
      <Banner isUS={isUS} />
      <Header />
      <Hero isUS={isUS} />
      <AppPreview />
      <ColorBlocks colors={['#3B82F6','#93C5FD','#3B82F6','#BFDBFE','#3B82F6']} flexes={[2.5,1.5,3,1,2]} />
      <Features />
      <StatsBanner />
      <ExamBoards />
      <ColorBlocks colors={['#1e3a8a','#1d4ed8','#1e3a8a','#1d4ed8','#1e3a8a']} flexes={[2,1.2,2.5,1,1.5]} />
      <Pricing />
      <ColorBlocks colors={['#60A5FA','#93C5FD','#60A5FA','#BFDBFE','#60A5FA']} flexes={[2.5,1.5,2,1,2]} />
      <Reviews />
      <ColorBlocks colors={['#60A5FA','#93C5FD','#60A5FA','#93C5FD','#60A5FA']} flexes={[2,1.5,2.5,1,2]} />
      <Philosophy />
      <WhyWeStarted />
      <ColorBlocks colors={['#60A5FA','#93C5FD','#60A5FA','#93C5FD','#60A5FA']} flexes={[2,1.5,2.5,1,2]} />
      <Teachers />
      <ColorBlocks colors={['#1e3a8a','#1d4ed8','#1e3a8a','#1d4ed8','#1e3a8a']} flexes={[2,1.5,2.5,1,2]} />
      <FAQ />
      <Blog />
      <ColorBlocks colors={['#3B82F6','#60A5FA','#3B82F6','#60A5FA','#3B82F6']} flexes={[2.5,1.5,2,1,2]} />
      <Footer />
      <ScrollToTop />
    </>
  )
}
