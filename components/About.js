import { useRef } from "react";
import { gsap, SplitText, ScrollTrigger } from "./gsap";
import SectionTitle from "./SectionTitle";
import Skills from "./Skills";
import useLayoutEffect from "./use-isomorpphic-layout-effect"

const About = () => {
    let el = useRef(null);
    let q = gsap.utils.selector(el);

    useLayoutEffect(() => {
        document.fonts.ready.then(function () {
            const split = new SplitText(q(".about-text"), {type:"lines,words", linesClass:"split-line"});

            const anim = gsap.from(split.lines,  {
                duration: 0.6,
                autoAlpha: 0,
                translateY: '100%',
                ease: 'circ.out',
                stagger: 0.05,
                paused: true
            });
    
            ScrollTrigger.create({
                trigger: '.about-text',
                start: 'top 80%',
                onEnter: () => anim.play(),
            }); 
        });
    }, [])

    return (
        <div ref={el} id="about" className="pb-40 w-full relative px-[10vw] 2xl:px-[12.5vw] bg-slate-100">
            <SectionTitle title="About Me"/>
            <p className="about-text text-neutral-900 text-[clamp(1.4rem,2vw,1.75rem)] text-center font-silka leading-[1.8] will-change-transform">Hello! My name is Luke, I am a full-stack software developer. My interest in development began at a young age, using 2D game engines to begin building programming skills, and that interest has only grown ever since. I have a passion for learning new technologies and solving problems to create high quality user experiences.</p>
            <Skills/>
        </div>
    )
}

export default About;