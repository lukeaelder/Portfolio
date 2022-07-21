import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { ScrollSmoother } from 'gsap/dist/ScrollSmoother';
import { SplitText } from 'gsap/dist/SplitText';

if (typeof window !== 'undefined') {
	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);
}

export * from 'gsap/dist/gsap';
export * from 'gsap/dist/ScrollTrigger';
export * from 'gsap/dist/ScrollSmoother';
export * from 'gsap/dist/SplitText';
