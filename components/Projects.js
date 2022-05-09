import Project from "./Project";
import SectionTitle from "./SectionTitle";

const Projects = () => {
    return (
        <div id="projects" className="w-full relative px-[10vw] 2xl:px-[12.5vw] bg-slate-100 pb-36">
            <SectionTitle title="My Projects"/>
            <div className="flex flex-col gap-[70px] xl:gap-[90px]">
                <Project name="Movie Database App" desc="View information about millions of movies, including cast, crew, plot overviews, trailers, and more. Create an account to leave reviews on movies, build movie list, and save movies to your watchlist and favorites." stack={["Python","Flask","PostgreSQL"]} links={[["github","https://github.com/lukeaelder/MovieR-L"],["external","https://movierandl.herokuapp.com/"]]} images={["/images/p1/mrlhome.webp","/images/p1/mrlmovie.webp","/images/p1/mrluser.webp","/images/p1/mrllist.webp"]}/>
                <div className="w-full h-[1px] bg-neutral-300 my-3"></div>
                <Project name="Group Task App" desc="Create groups and invite other users, to schedule and communicate on group projects. Inside groups users can make announcements, create task, update tasks progress, send realtime messages, and make video calls." stack={["React","Node.js","PostgreSQL","Express","socket.io","WebRTC"]} links={[["github","https://github.com/lukeaelder/Capstone2-groupscheduler"],["external","https://c2-scheduler.surge.sh"]]} images={["/images/p2/group.webp","/images/p2/videocall.webp"]}/>
                <div className="w-full h-[1px] bg-neutral-300 my-3"></div>
                <Project name="Developer Toolbox" desc="A collection of easy to use tools for developers, ranging from simple tools performing string manipulation to more advanced tools." stack={["Next.js","Tailwind CSS","GSAP"]} links={[["github",null],["external","https://wdtoolbox.com"]]} images={["/images/p3/home-light.webp","/images/p3/qr.webp","/images/p3/home-dark.webp","/images/p3/lorem.webp"]}/>
            </div>
        </div>
    )
}

export default Projects;