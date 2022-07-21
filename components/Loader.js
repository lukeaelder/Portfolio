import { useRef } from 'react';
import { gsap, SplitText } from './gsap';
import useLayoutEffect from './use-isomorpphic-layout-effect';

const Loader = () => {
    let el = useRef(null);
    let q = gsap.utils.selector(el);
    const tl = useRef(gsap.timeline());

    useLayoutEffect(() => {
        tl.current.to(
            q('.load-bg'),
            { translateY: '-120vh', duration: 0.8, ease: 'power4.out' },
            2.5
        );
        tl.current.to(
            q('.load-rnd'),
            { scaleY: '0', scaleX: '1.1', duration: 0.8, ease: 'power3.out' },
            2.5
        );
        tl.current.to(
            q('.load-text-wrapper'),
            { opacity: 1, duration: 0 },
            0.3
        );
        const text = new SplitText(q(".load-text"), { type:"chars" });
        const text2 = new SplitText(q(".load-text-2"), { type:"chars" });
        tl.current.fromTo(text.chars, {opacity: 0}, {opacity: 1, duration: 0.4, stagger: 0.01, ease: 'power2.out'}, 0.55);

        tl.current.to(text.chars, {opacity: 0, translateX:40, duration:0.5, stagger: {from: 'end', each: 0.02}, ease: 'power2.out'}, 1.25);
        tl.current.fromTo(text2.chars, {opacity: 0, translateX: -40}, {opacity: 1, duration: 0.5, stagger: {from: 'end', each: 0.02}, translateX: 0, ease: 'power2.out', delay: 1.27}, 0);

        tl.current.to(text2.chars, {opacity: 0, translateY:-30, duration:0.4, stagger: 0.01, ease: 'power2.inOut'}, 2.12);

        tl.current.to(el.current, {autoAlpha: 0, duration: 0, pointerEvents: 'none'}, 3.3);
    }, []);

    return (
        <div
            ref={el}
            className='pointer-events-auto fixed top-0 left-0 min-h-screen w-screen'>
            <div className='load-bg absolute top-0 left-0 z-[100] h-[120vh] w-full origin-top bg-neutral-900'>
                <div className='load-text-wrapper opacity-0'>
                    <p className='load-text text-neutral-100 text-[40px] md:text-[50px] font-silka mr-[10px] tracking-wide whitespace-nowrap absolute top-[37%] left-1/2 -translate-x-1/2'>Hello :&#41;</p>
                    <p className='load-text-2 text-neutral-100 text-[40px] md:text-[50px] font-silka mr-[10px] tracking-wide whitespace-nowrap absolute top-[37%] left-1/2 -translate-x-1/2'>Welcome!</p>
                </div>
                <div className='load-rnd absolute bottom-0 h-[1000px] w-[110%] translate-y-1/2 translate-x-[-5%] rounded-[100%_100%] bg-neutral-900'></div>
            </div>
        </div>
    );
};

export default Loader;
