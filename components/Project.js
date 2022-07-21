import { useRef } from 'react';
import { gsap } from './gsap';
import ImageCarousel from './ImageCarousel';
import useLayoutEffect from './use-isomorpphic-layout-effect';

const Project = ({ name, desc, stack, links, images }) => {
	const el = useRef(null);
	const image = useRef(null);

	useLayoutEffect(() => {
		gsap.fromTo(
			el.current,
			{ opacity: 0, translateX: '-40px' },
			{
				opacity: 1,
				duration: 1,
				ease: 'power2.out',
				translateX: 0,
				scrollTrigger: {
					trigger: el.current,
					start: 'top 83%',
					end: 'top 83%',
				},
			}
		);
		gsap.fromTo(
			image.current,
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 1,
				scrollTrigger: {
					trigger: el.current,
					start: 'top 83%',
					end: 'top 83%',
				},
			}
		);
	}, []);

	return (
		<div className='grid place-items-center gap-y-2 font-silka xl:grid-cols-2 xl:place-items-start xl:gap-x-10 xl:gap-y-0'>
			<div ref={el}>
				<div className='text-center xl:text-left'>
					<h3 className='text-2xl font-[600] xl:text-3xl'>{name}</h3>
					<p className='mt-6 text-[18px] xl:mt-8'>{desc}</p>
				</div>
				<div className='mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 font-mono text-[15px] xl:mt-8 xl:justify-start'>
					{stack.map((e, i) => (
						<p key={i}>{e}</p>
					))}
				</div>
				<div className='mt-4 mb-4 flex justify-center gap-x-6 xl:mt-6 xl:mb-0 xl:justify-start'>
					{links[0][1] === null ? null : (
						<a
							href={links[0][1]}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='GitHub Repo'
							className='group p-2'>
							<svg
								className='h-8 w-8 transition group-hover:-translate-y-1 group-hover:stroke-blue-600'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path
									stroke='none'
									d='M0 0h24v24H0z'
									fill='none'></path>
								<path d='M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5'></path>
							</svg>
						</a>
					)}
					{links[1][1] === null ? null : (
						<a
							href={links[1][1]}
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Project Site'
							className='group p-2'>
							<svg
								className='h-8 w-8 transition group-hover:-translate-y-1 group-hover:stroke-blue-600'
								width='24'
								height='24'
								viewBox='0 0 24 24'
								strokeWidth='1.5'
								stroke='currentColor'
								fill='none'
								strokeLinecap='round'
								strokeLinejoin='round'>
								<path
									stroke='none'
									d='M0 0h24v24H0z'
									fill='none'></path>
								<path d='M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5'></path>
								<line x1='10' y1='14' x2='20' y2='4'></line>
								<polyline points='15 4 20 4 20 9'></polyline>
							</svg>
						</a>
					)}
				</div>
			</div>
			<div ref={image} className='xl:ml-auto'>
				<ImageCarousel images={images} />
			</div>
		</div>
	);
};

export default Project;
