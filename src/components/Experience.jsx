import {motion} from 'framer-motion';

const Experience = () => {

  const experienceListData =["Led development and launch of multiple full-stack MERN applications using React.js, Node.js, Express, and MongoDB, leveraging Tailwind CSS and Ant Design for rapid, responsive UI development and scalable architecture."
,"Implemented client-side state management with React Context and Redux, and designed server-side data flows and caching strategies to optimize performance and consistency.",
"Designed and implemented RESTful APIs with Express, enabling dynamic data fetching and real-time updates (WebSockets / Socket.io).",
"Enhanced web performance and Core Web Vitals (LCP, FID, CLS) through code splitting, lazy loading, tree shaking, server-side rendering/SSR techniques, and asset optimization.",
"Deployed frontend and backend services with CI/CD pipelines on Vercel and containerized backend services using Docker; gained foundational DevOps experience and deployed services to cloud environments.",
"Wrote unit and integration tests for frontend and backend using React Testing Library, Jest, and Supertest to ensure robust, reliable applications.",
"Conducted and actively participated in code reviews to enforce best practices, security standards, and maintainable architecture across the stack.",
"Collaborated with product managers, designers, and backend engineers to align frontend and backend implementations, handle data modeling, authentication (JWT/OAuth), and ensure smooth end-to-end delivery."

  ]

  const JoiningDate = new Date("2022-07-14");
  const presentDate = new Date();
  const years = presentDate.getFullYear() - JoiningDate.getFullYear();
  const months =
    presentDate.getMonth() - JoiningDate.getMonth() +
    (presentDate.getDate() < JoiningDate.getDate() ? -1 : 0);
  const days =
    presentDate.getDate() < JoiningDate.getDate()
      ? new Date(
          presentDate.getFullYear(),
          presentDate.getMonth(),
          0
        ).getDate() -
        JoiningDate.getDate() +
        presentDate.getDate()
      : presentDate.getDate() - JoiningDate.getDate();

  return (
    <div className="w-full flex flex-col gap-16 place-items-center px-4 md:px-0" id="experience">
      <div>
        <p className="text-center w-fit text-3xl md:text-4xl font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          Experience
        </p>
      </div>

      <div className="text-center w-full md:w-3/4 justify-self-center ring-2 ring-white rounded-lg shadow-lg shadow-white">
        <div className="flex flex-col md:flex-row justify-between w-full md:w-7/12 justify-self-center p-4 md:p-8 gap-4">
          <div className="self-center">
            <img
              className="h-16 w-16 md:h-20 md:w-20 rounded-xl mx-auto md:mx-0"
              src="https://tse2.mm.bing.net/th/id/OIP.ybYfXaOojN8JmNeFpR6BgwHaHa?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
              alt="hexaware logo"
            />
          </div>

          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-white text-xl md:text-2xl font-bold">
              Full Stack Developer
            </h1>
            <h2 className="text-white text-lg font-bold">
              Hexaware Technologies Ltd, Chennai
            </h2>
            <h2 className="text-white text-sm md:text-lg font-bold">
              July 2022 - Present ({years} years {months} months {days} days)
            </h2>
          </div>
        </div>

        <div>
          <ul className="text-white text-sm md:text-lg list-disc list-inside flex flex-col gap-4 md:gap-5 text-start px-4 md:px-16 py-4">
           {
            experienceListData.map((e)=>{
              return(
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                >
                {e}
                </motion.li>
              )
            })
           }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
