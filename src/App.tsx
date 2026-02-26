import { NavBar } from '../src/components/NavBar'
import { HeroSection } from './components/HeroSection'
import { ServiceSection } from './components/ServiceSection'
import { PortfolioSection } from './components/PortfolioSection'



function App() {


  return (
    <>
      <div className='h-screen w-screen px-10 flex flex-col'>
        <NavBar />
        <HeroSection />
      </div>
      <ServiceSection />
      <PortfolioSection />


    </>
  )
}

export default App
