import { ScrollSmoother } from "../components/gsap";
import useLayoutEffect from "../components/use-isomorpphic-layout-effect"
import { useRef } from "react";

import Head from 'next/head'
import Landing from '../components/Landing'
import Loader from '../components/Loader'
import NavBar from "../components/Navbar";
import About from "../components/About";
import Background from "../components/Background";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {

  const smoother = useRef(null)

  useLayoutEffect(() => {
    smoother.current = ScrollSmoother.create({
      smooth: 1,
      effects: true,
      ignoreMobileResize: true,
    }).paused(true);

    setTimeout(() => {
      scrollPaused(false)
    },2900)
  }, [])

  const scrollPaused = (state) => {
    smoother.current ? smoother.current.paused(state) : null
  }

  const scrollToSection = (id) => {
    smoother.current.scrollTo(id, true, "top 200px")
  }

  return (
    <div>
      <Head>
        <title>Luke Elder</title>
        <meta name="author" content="Luke Elder"/>
        <meta name="description" content="Full stack software developer"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#171717"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background/>
      <main id="smooth-wrapper">
        <div id="smooth-content" className="will-change-transform">
          <Landing scrollTo={scrollToSection}/>
          <About/>
          <Projects/>
          <Contact/>
          <Footer/>
        </div>
        <NavBar scrollTo={scrollToSection} scrollPaused={scrollPaused}/>
        <Loader/>
      </main>
    </div>
  )
}
