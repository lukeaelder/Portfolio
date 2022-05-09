import { useRef } from 'react';
import { gsap } from "./gsap";
import ImageCarousel from './ImageCarousel';
import useLayoutEffect from "./use-isomorpphic-layout-effect";

const Project = ({name, desc, stack, links, images}) => {
    const el = useRef(null);
    const image = useRef(null);

    useLayoutEffect(() => {
        gsap.fromTo(el.current, {opacity: 0, translateX: '-40px'}, {opacity: 1, duration: 1, ease: "power2.out", translateX: 0, scrollTrigger:{trigger:el.current, start: "top 83%", end: "top 83%"}});
        gsap.fromTo(image.current, {opacity: 0}, {opacity: 1, duration: 1, scrollTrigger:{trigger:el.current, start: "top 83%", end: "top 83%"}});
    }, [])

    return (
        <div className='font-silka grid xl:grid-cols-2 xl:gap-x-10 place-items-center xl:place-items-start gap-y-2 xl:gap-y-0'>
            <div ref={el}>
                <div className='text-center xl:text-left'>
                    <h3 className='font-[600] text-2xl xl:text-3xl'>{name}</h3>
                    <p className='text-[18px] mt-6 xl:mt-8'>{desc}</p>
                </div>        
                <div className='font-mono text-[15px] flex gap-x-6 gap-y-2 flex-wrap justify-center mt-6 xl:justify-start xl:mt-8'>
                    {stack.map((e, i) => 
                        <p key={i}>{e}</p>
                    )}
                </div>
                <div className='flex gap-x-6 mt-4 xl:mt-6 justify-center xl:justify-start mb-4 xl:mb-0'>
                    {links[0][1] === null ? null :
                        <a href={links[0][1]} target="_blank" rel="noopener noreferrer"  aria-label="GitHub Repo" className='group p-2'>
                            <svg className="w-8 h-8 group-hover:-translate-y-1 transition group-hover:stroke-blue-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </a>
                    }
                    {links[1][1] === null ? null :
                        <a href={links[1][1]} target="_blank" rel="noopener noreferrer" aria-label="Project Site" className='group p-2'>
                            <svg className="w-8 h-8 group-hover:-translate-y-1 transition group-hover:stroke-blue-600" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5"></path>
                                <line x1="10" y1="14" x2="20" y2="4"></line>
                                <polyline points="15 4 20 4 20 9"></polyline>
                            </svg>
                        </a>
                    }
                </div>  
            </div>
            <div ref={image} className="xl:ml-auto">
                <ImageCarousel images={images}/>
            </div>
        </div>
    )
}

export default Project;