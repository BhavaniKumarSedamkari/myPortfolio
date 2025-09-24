import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import foodApp from "../assets/foodApp.png";
import primeVideo from "../assets/primeVideo.png";
import pgUncle from "../assets/pgUncle.png"

const Projects = () => {
  const projectData = [
    {
      image: pgUncle,
      title: "PG Uncle",
      points: [
        "Full-stack MERN application enabling PG owners to add, manage, and showcase their properties through an intuitive interface.",
        "Real-time room management shows total beds and current vacant beds per room, simplifying occupancy tracking and allocation.",
        "Secure authentication using JWT with MongoDB Atlas as the cloud-hosted database for reliable, online data storage.",
        "Deployed on an AWS EC2 instance for reliable, scalable hosting and easy maintenance.",
      ],
      skills: ["React.js", "Node.js", "Express.js", "Mongo DB", "AWS", "Tailwind","React Router", "Redux Toolkit", "JWT", "Javascript", "HTML", "CSS", "Git Hub"],
      vercelLink: "http://3.26.240.176/",
    },
    {
      image: primeVideo,
      title: "Prime Video Clone",
      points: [
        "This project is a Prime Video Clone developed using React and Tailwind CSS, offering a seamless user experience.",
        "Integrated with Firebase for backend services, including Google Login authentication for secure access.",
        "Features smooth animations and transitions for an engaging user interface.",
        "Utilizes Prime Video images and content to mimic the authentic Disney Plus experience.",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Redux Toolkit",
        "Firebase Auth",
        "React Router",
        "Tailwind",
      ],
      vercelLink: "https://prime-video-self.vercel.app/",
    },
    {
      image: foodApp,
      title: "Food App",
      points: [
        "This project is a clone of the 'Swiggy' website, developed using React and Tailwind CSS to ensure a modern and responsive design.",
        "Developed search functionality with error handling to improve user experience.",
        "Established Food Fire Server to efficiently fetch data from the Swiggy API, successfully resolving CORS issues.",
        "Utilizes high-quality images to effectively showcase the content and maintain visual appeal.",
      ],
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind", "Context API"],
      vercelLink: "https://food-app-five-lac.vercel.app/",
    },
  ];

  return (
    <div className="text-center px-4 md:px-20" id="project">
      <div className="mt-20 mb-8">
        <h1 className="bg-gradient-to-r w-fit justify-self-center from-sky-500 to-pink-500 text-transparent bg-clip-text text-3xl md:text-4xl font-medium">
          Projects
        </h1>
      </div>

      {projectData.map((project, index) => {
        return (
          <div
            key={index}
            className="flex flex-col md:flex-row justify-center my-6 pb-16 gap-8">
            <div className="md:w-4/12 self-center">
              <img className="rounded-lg w-full md:w-[450px] h-auto" src={project.image} alt="projectImage"/>
            </div>

            <div className="md:pl-20 md:w-8/12">
              <div className="flex gap-4 md:gap-6 py-4 md:py-8 justify-center md:justify-start">
                <h1 className="text-white font-medium text-xl md:text-2xl text-center md:text-left">
                  {project.title}
                </h1>
                <a href={project?.vercelLink}>
                  <FaExternalLinkAlt className="text-white self-center h-5 w-5 md:h-6 md:w-6 hover:cursor-pointer" />
                </a>
              </div>

              <ul className="text-left gap-2 mx-4 md:mx-0 list-inside list-disc text-white flex flex-col text-sm md:text-lg">
                {project?.points?.map((point, index) => {
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {point}
                    </motion.li>
                  );
                })}
              </ul>

              <div className="flex flex-wrap gap-4 md:gap-6 p-4 md:p-6 justify-center md:justify-start">
                {project?.skills?.map((skill, index) => {
                  return (
                    <motion.p
                      key={index}
                      className="ring-2 ring-white px-4 md:px-6 py-2 text-white rounded-lg text-sm md:text-base"
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.p>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
