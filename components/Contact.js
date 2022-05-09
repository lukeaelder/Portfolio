import { useRef, useState } from "react";
import SectionTitle from "./SectionTitle";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({name: "", email: "", message: ""});
    const [status, setStatus] = useState(0);
    const form = useRef(null);

    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(status !== 0) return;
        setStatus(1);
        emailjs.sendForm('gmail', 'template_d317btg', form.current, 'user_PiNtCRo5VwyZEgqkQXWLr')
            .then((res) => {
                setStatus(2);
                setFormData({name: "", email: "", message: ""});
            }, (err) => {
                setStatus(3);
        })
        pauseEmail();
    }

    let timerId;
    const pauseEmail = () => {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            setStatus(0);
        },6000);
    }

    return (
        <div id="contact" className="w-full relative px-[10vw] 2xl:px-[12.5vw] bg-slate-100 pb-24">
            <SectionTitle title="Contact Me"/>
            <div className="flex justify-center">
                <form ref={form} onSubmit={handleSubmit} className="font-silka flex flex-col gap-10 items-center bg-slate-50 px-5 py-10 rounded max-w-[1000px] w-full shadow-lg shadow-slate-200">
                    <div className="grid grid-cols-1 w-full gap-10 lg:grid-cols-2">
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="name" className={`font-[500] transition ${formData.name !== '' ? 'text-neutral-500' : 'text-neutral-900'}`}><span className="text-neutral-500 mr-6 font-[400] text-[15px]">01.</span>Your Name</label>
                            <input id="name" name="name" required type="text" onChange={(e) => handleChange(e)} value={formData.name} placeholder="Luke Elder *" className="outline-none bg-slate-100 px-3 py-3 rounded border-[1px] border-slate-200 focus:border-blue-600 transition"></input>
                        </div>
                        <div className="flex flex-col gap-3 w-full">
                            <label htmlFor="email" className={`font-[500] transition ${formData.email !== '' ? 'text-neutral-500' : 'text-neutral-900'}`}><span className="text-neutral-500 mr-6 font-[400] text-[15px]">02.</span>Your Email</label>
                            <input id="email" name="email" required type="email" onChange={(e) => handleChange(e)} value={formData.email} placeholder="lukeaeld@gmail.com *" className="outline-none bg-slate-100 px-3 py-3 rounded border-[1px] border-slate-200 focus:border-blue-600 transition"></input>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                        <label htmlFor="message" className={`font-[500] transition ${formData.message !== '' ? 'text-neutral-500' : 'text-neutral-900'}`}><span className="text-neutral-500 mr-6 font-[400] text-[15px]">03.</span>Your Message</label>
                        <textarea id="message" name="message" required type="text" onChange={(e) => handleChange(e)} value={formData.message} placeholder="Message... *"  className="outline-none resize-none h-[200px] bg-slate-100 px-3 py-3 rounded border-[1px] border-slate-200 focus:border-blue-600 transition"></textarea>
                    </div>
                    <button type="submit" className={`rounded px-8 py-3 text-neutral-100 font-[500] transition tracking-wide w-[200px] outline-none ${status === 0 ? 'bg-blue-600 hover:bg-blue-700' : status === 1 ? 'bg-amber-400' : status === 2 ? "bg-emerald-500" : "bg-red-600"}`}>
                        {status === 0 ? 'Send' : status === 1 ? 'Sending' : status === 2 ? "Sent!" : "Error"}
                    </button>
                </form>
            </div>    
        </div>
    )
}

export default Contact;