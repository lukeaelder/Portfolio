import { useRef } from "react";
import { gsap } from "./gsap";
import useLayoutEffect from "./use-isomorpphic-layout-effect"

const Footer = () => {
    let el = useRef(null);
    let q = gsap.utils.selector(el);
    const tl = useRef(gsap.timeline())

    useLayoutEffect(() => {
        tl.current.to(q('.footer-round'), {scaleY: 0, scrollTrigger: {trigger: el.current, scrub:0.5, start: "-10% bottom", end: "bottom bottom"}}, 0)
    }, [])

    return (
        <div ref={el} className="w-full h-[250px] bg-transparent px-[5vw] relative overflow-x-clip">
            <div className="w-full h-full flex items-center justify-center overflow-hidden">
                <a href="https://github.com/lukeaelder" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="group" data-lag="0.3">
                    <div className="w-[100px] h-[100px] bg-neutral-900 rounded grid place-items-center group-hover:translate-y-[-6px] group-hover:bg-blue-600 transition">
                        <svg className="w-[50px] h-[50px] stroke-neutral-100 transition group-hover:translate-y-[-3px] group-hover:scale-105" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                        </svg>
                    </div>
                </a>
                <a href="https://www.linkedin.com/in/lukeaelder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="group mx-[5vw]" data-lag="0.5">
                    <div className="w-[100px] h-[100px] bg-neutral-900 rounded grid place-items-center group-hover:translate-y-[-6px] group-hover:bg-blue-600 transition">
                        <svg className="w-[50px] h-[50px] stroke-neutral-100 transition group-hover:translate-y-[-3px] group-hover:scale-105" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                            <line x1="8" y1="11" x2="8" y2="16"></line>
                            <line x1="8" y1="8" x2="8" y2="8.01"></line>
                            <line x1="12" y1="16" x2="12" y2="11"></line>
                            <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                        </svg>
                    </div>
                </a>
                <a href="mailto:lukeaeld@gmail.com" aria-label="Email"  className="group" data-lag="0.7">
                    <div className="w-[100px] h-[100px] bg-neutral-900 rounded grid place-items-center group-hover:translate-y-[-6px] group-hover:bg-blue-600 transition">
                        <svg className="w-[50px] h-[50px] stroke-neutral-100 transition group-hover:translate-y-[-3px] group-hover:scale-105" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <rect x="3" y="5" width="18" height="14" rx="2"></rect>
                            <polyline points="3 7 12 13 21 7"></polyline>
                        </svg>
                    </div>
                </a>
            </div>
            <div className="footer-round absolute bg-slate-100 w-[120vw] h-[300px] rounded-[100%/100%] top-0 -translate-y-1/2 left-0 -translate-x-[10vw] [clip-path:polygon(0%_45%,100%_45%,100%_100%,0%_100%)]"></div>
        </div>
    )
}

export default Footer;