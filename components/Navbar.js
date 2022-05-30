import { useRef, useState } from "react";
import { gsap } from "./gsap";
import useLayoutEffect from "./use-isomorpphic-layout-effect";

const NavBar = ({scrollTo, scrollPaused}) => {
    const [open, setOpen] = useState(false);
    let el = useRef(null);
    let q = gsap.utils.selector(el);
    const tl = useRef(gsap.timeline().reverse(1));
    const tl2 = useRef(gsap.timeline());

    useLayoutEffect(() => {
        tl2.current.fromTo(el.current, {autoAlpha: 0, translateY: 100}, {autoAlpha: 1, translateY: 0, duration: 1.5, ease: "power3.out"}, 2.2);

        tl.current.to(q('.nav-side'), {translateX: 0, duration: 0.5, ease: "power2.inOut"}, 0);
        tl.current.to(q('.nav-round'), {scaleX: 0, duration: 0.5, ease: "power2.inOut"}, 0);
        tl.current.to(q('.nav-bg'), {autoAlpha: 0.2, duration: 0.5, ease: "power2.inOut", pointerEvents: 'auto'}, 0);
        tl.current.to(q('.nav-links'), {autoAlpha: 1, duration: 0.4, ease: "power2.inOut"}, 0.1);
    }, [])

    const toggleNav = () => {
        if (tl.current.reversed()) {
            tl.current.play();
            scrollPaused(true);
            setOpen(true);
        } else {
            tl.current.reverse();
            scrollPaused(false);
            setOpen(false);
        }
    }

    const goTo = (id) => {
        scrollTo(id);
        scrollPaused(false);
        tl.current.reverse();
        setOpen(false);
    }

    return (
        <div ref={el} className="fixed top-0 left-0 w-full">
            <div className="nav-bg fixed top-0 left-0 bg-neutral-900 w-full h-screen opacity-0 pointer-events-none"></div>
            <div className="fixed right-0 top-0 w-full md:w-[500px] h-screen pointer-events-none overflow-y-scroll">
                <div className="nav-side bg-neutral-900 w-full h-full translate-x-[140%] relative pointer-events-auto">
                    <div className="nav-round absolute left-0 -translate-x-1/2 h-[110vh] translate-y-[-5vh] rounded-[100%/100%] w-[80%] bg-neutral-900 top-0"></div>
                    <div className="nav-links font-silka text-neutral-100 opacity-0">
                        <div className="text-[clamp(2.5rem,10vw,3.75rem)] absolute top-[45%] -translate-y-1/2 pl-8 lg:pl-10 w-full">
                            <div className="group flex items-center py-[calc(2vh+5px)] cursor-pointer w-full" onClick={() => goTo('#about')}>
                                <div className="w-2 h-2 rounded-full scale-0 group-hover:scale-100 bg-neutral-100 transition"></div>
                                <p className={`group-hover:translate-x-[20px] transition ${open ? '' : 'translate-x-[40px] duration-300'}`}>About Me</p>
                            </div>
                            <div className="group flex items-center py-[calc(2vh+5px)] cursor-pointer w-full" onClick={() => goTo('#projects')}>
                                <div className="w-2 h-2 rounded-full scale-0 group-hover:scale-100 bg-neutral-100 transition"></div>
                                <p className={`group-hover:translate-x-[20px] transition ${open ? '' : 'translate-x-[20px] duration-300'}`}>Projects</p>
                            </div>
                            <div className="group flex items-center py-[calc(2vh+5px)] cursor-pointer w-full" onClick={() => goTo('#contact')}>
                                <div className="w-2 h-2 rounded-full scale-0 group-hover:scale-100 bg-neutral-100 transition"></div>
                                <p className={`group-hover:translate-x-[20px] transition ${open ? '' : 'translate-x-[60px] duration-300'}`}>Contact</p>
                            </div>
                        </div>   
                        <div className="absolute bottom-20 lg:bottom-12 px-[5vw] lg:px-8 flex">
                            <a href="https://github.com/lukeaelder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <div className={`group p-6 w-fit cursor-pointer transition ${open ? '' : 'translate-x-[20px] duration-300'}`}>
                                    <p className="transition group-hover:-translate-y-1 group-hover:text-white">GitHub</p>
                                    <div className="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-200 origin-center"></div>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/lukeaelder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <div className={`group p-6 w-fit cursor-pointer transition ${open ? '' : 'translate-x-[40px] duration-300'}`}>
                                    <p className="transition group-hover:-translate-y-1 group-hover:text-white">LinkedIn</p>
                                    <div className="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-200 origin-center"></div>
                                </div>
                            </a>
                            <a href="mailto:lukeaeld@gmail.com" aria-label="Email">
                                <div className={`group p-6 w-fit cursor-pointer transition ${open ? '' : 'translate-x-[80px] duration-300'}`}>
                                    <p className="transition group-hover:-translate-y-1 group-hover:text-white">Email</p>
                                    <div className="h-[2px] bg-white scale-x-0 group-hover:scale-x-100 transition duration-200 origin-center"></div>
                                </div>
                            </a>
                        </div>   
                    </div>
                </div>  
            </div>
            <div className="w-[100vw] fixed top-0 left-0 flex items-start pt-10 px-[5vw] justify-between pointer-events-none">
                <p className="bg-neutral-900 text-neutral-100 px-2 py-1 rounded cursor-pointer transition duration-300 hover:bg-neutral-800 font-silka font-[600] tracking-wide pointer-events-auto" onClick={() => goTo('#home')}>LUKE ELDER</p>
                <div className={`w-16 h-16 bg-neutral-900 rounded relative cursor-pointer grid place-items-center transition duration-300 pointer-events-auto ${open ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-neutral-800'}`} onClick={() => toggleNav()}>
                    <div className={`w-8 h-1 bg-neutral-100 rounded-full absolute [transition:transform_0.5s_cubic-bezier(0.3,1.3,0.6,1)] ${open ? 'rotate-[225deg]' : '-translate-y-[125%]'}`}></div>
                    <div className={`w-8 h-1 bg-neutral-100 rounded-full absolute [transition:transform_0.5s_cubic-bezier(0.3,1.3,0.6,1)] ${open ? 'rotate-[135deg]' : 'translate-y-[125%]'}`}></div>
                </div>
            </div>
        </div>
    )
}

export default NavBar;