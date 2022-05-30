import { useRef } from "react";
import { gsap, SplitText } from "./gsap";
import useLayoutEffect from "./use-isomorpphic-layout-effect"

const Loader = () => {
    let el = useRef(null);
    let q = gsap.utils.selector(el);
    const tl = useRef(gsap.timeline());


    useLayoutEffect(() => {
        tl.current.to(q('.load-bg'), {scaleY: 0, translateY: '-10%', duration: 0.9, ease: "power2.inOut"}, 2);
        tl.current.to(q('.load-rnd'), {translateY: '-60%', duration: 0.9, ease: "power2.inOut"}, 2);
        tl.current.to(q('.load-rnd'), {scaleY: 0, duration: 0.9, ease: "power2.inOut"}, 2);

        const text = new SplitText(q(".load-name"), { type:"chars"});

        tl.current.to(q('.load-box'), {opacity: 1, duration: 0}, 0.3);
        tl.current.fromTo(text.chars, {autoAlpha: 0, translateY: 30}, {autoAlpha: 1, translateY: 0, duration: 0.6, stagger: 0.01, ease: 'power2.out'}, 0.6);
        tl.current.to(text.chars, {autoAlpha: 0, translateY: -40, duration: 0.5, stagger: 0.01, ease: 'power3.in'}, 1.8);

        tl.current.to(el.current, {autoAlpha: 0, duration: 0, pointerEvents: 'none'}, 2.9);
    }, [])

    return (
        <div ref={el} className="fixed top-0 left-0 w-[100vw] h-[100vh] pointer-events-auto">
            <div className="load-bg w-full h-full absolute bg-neutral-900 origin-top"></div>
            <div className="load-rnd w-[110%] h-full absolute bg-neutral-900 rounded-[100%_100%] translate-y-[50%] translate-x-[-5%]"></div>
            <div className="load-box absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center opacity-0">
                <div className="load-name text-neutral-100 text-[40px] md:text-[50px] font-silka mr-[10px] tracking-wide whitespace-nowrap">Welcome!</div>
            </div>
        </div>
    )
}

export default Loader;