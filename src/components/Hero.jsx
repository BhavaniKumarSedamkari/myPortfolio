import { motion } from "framer-motion";
import personalPic from "../assets/myPersonalPic.jpg";

const Hero = () => {
  return (
    <div
      className="h-[100vh] w-full md:w-7/12 text-white py-16 md:py-24 flex flex-col gap-6 md:gap-8 text-center px-4 md:px-0"
      id="home"
    >
      <motion.img
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="h-36 w-36 md:h-52 md:w-52 rounded-full self-center"
        src={personalPic}
        alt="Personal Pic"
      />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center flex flex-col gap-2 md:gap-4"
      >
        <h1 className="text-2xl md:text-3xl w-fit self-center bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text font-medium">
          Sedamkari Bhavani Kumar
        </h1>
        <h2 className="text-md md:text-lg w-fit self-center bg-gradient-to-r text-transparent from-pink-500 to-blue-500 bg-clip-text font-medium">
          React.js Developer
        </h2>
        <p className="text-sm md:text-lg px-2 md:px-0">
          Skilled Frontend Developer and an active member of the Generative AI
          team at Hexaware, proficient in front-end technologies, including
          HTML, CSS, JavaScript, and React.js. I leverage Tailwind CSS and Ant
          Design to rapidly create responsive components. Let's collaborate to
          build something exceptional!
        </p>
      </motion.div>
    </div>
  );
};

export default Hero;
