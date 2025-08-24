import { DiMysql } from "react-icons/di";
import { FaAws, FaGitAlt, FaHtml5, FaNode, FaNpm, FaReact } from "react-icons/fa";
import { FaCss3Alt, FaJs } from "react-icons/fa6";
import { IoInfinite } from "react-icons/io5";
import { SiAntdesign, SiExpress, SiGraphql, SiJest, SiMongodb, SiMui, SiRedux, SiTailwindcss, SiTestinglibrary, SiVercel, SiVite, SiWebpack } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <div className="text-center px-4 md:px-0" id="tech">
      <h1 className="text-3xl md:text-4xl w-fit justify-self-center font-medium bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
        Technologies
      </h1>

      <div className="flex flex-col md:flex-row m-4 justify-center my-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            Frontend Languages and Frameworks
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 p-4">
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaHtml5 className="text-red-500 h-full w-full" />
              HTML
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaCss3Alt className="text-sky-500 h-full w-full" />
              CSS
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaJs className="text-yellow-500 h-full w-full" />
              JavaScript
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaReact className="text-sky-500 h-full w-full" />
              React.js
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            Backend Runtime and Frameworks
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 p-4">
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaNode className="text-green-500 h-full w-full" />
              Node.js
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <SiExpress className="text-sky-500 h-full w-full" />
              Express.js
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row m-4 justify-center my-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            Databases
          </h1>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <DiMysql className="text-sky-500 h-full w-full" />
              MySQL
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <SiMongodb className="text-green-500 h-full w-full" />
              MongoDB
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            CSS Libraries and Frameworks
          </h1>
          <div className="flex flex-wrap justify-center gap-4 p-4">
            <p className="flex flex-col h-16 w-24 text-white text-center">
              <SiTailwindcss className="text-sky-500 h-full w-full" />
              Tailwind CSS
            </p>
            <p className="flex flex-col h-16 w-24 text-white text-center">
              <SiAntdesign className="text-sky-500 h-full w-full" />
              Ant Design
            </p>
            <p className="flex flex-col h-16 w-24 text-white text-center">
              <SiMui className="text-sky-500 h-full w-full" />
              Material UI
            </p>
            <p className="flex flex-col h-16 w-32 text-white text-center">
              <TbBrandFramerMotion className="text-white-500 h-full w-full" />
              Framer Motion
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row m-4 justify-center my-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            Development Tools
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 p-4">
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <VscVscode className="text-sky-500 h-full w-full" />
              VS Code
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaGitAlt className="text-red-500 h-full w-full" />
              Git
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <FaNpm className="text-red-500 h-full w-full" />
              npm
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <SiWebpack className="text-white-500 h-full w-full" />
              WebPack
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <SiVite className="text-purple-500 h-full w-full" />
              Vite
            </p>
            <p className="flex flex-col h-16 w-16 text-white text-center">
              <SiGraphql className="text-pink-500 h-full w-full" />
              GraphQL
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            Testing Frameworks
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-10 p-4">
            <p className="flex flex-col h-16 w-fit text-white text-center">
              <SiTestinglibrary className="text-red-500 h-full w-full" />
              React Testing Library
            </p>
            <p className="flex flex-col h-16 w-fit text-white text-center">
              <SiJest className="text-yellow-500 h-full w-full" />
              Jest
            </p>
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col md:flex-row m-4 justify-center my-12 gap-8">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center ring-2 ring-white rounded-lg px-6 py-4"
        >
          <h1 className="font-bold underline text-white text-lg md:text-xl">
            Cloud & DevOps
          </h1>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 p-4">
            <p className="flex flex-col h-16 w-fit text-white text-center">
              <FaAws className="text-yellow-500 h-full w-full" />
              AWS
            </p>
            <p className="flex flex-col h-16 w-fit text-white text-center">
              <IoInfinite className="text-white-500 h-full w-full" />
              CI/CD
            </p>
            <p className="flex flex-col h-16 w-fit text-white text-center">
              <SiVercel className="text-white-500 h-full w-full" />
              Vercel
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Tech;
