import { FaDownload, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import resume from "../assets/resume.pdf";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "31baf623-0e05-4d6c-b256-3c15bad94db1");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent successfully!");
    }
  };

  return (
    <div className="text-center px-4 md:px-0" id="contact">
      <div className="pt-2 pb-8">
        <h1 className="bg-gradient-to-r w-fit justify-self-center from-sky-500 to-pink-500 text-transparent bg-clip-text text-3xl md:text-4xl font-medium">
          Get in Touch
        </h1>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-white text-lg md:text-xl m-2 px-2 md:px-0">
          Want to connect? Send me an email through this Web3Form and I'll
          respond as soon as possible!
        </p>
        <form className="flex flex-col items-center w-full max-w-md" onSubmit={onSubmit}>
          <input className="rounded-lg p-3 m-4 w-full focus:scale-105" placeholder="Enter your name" type="text"/>
          <input className="rounded-lg p-3 m-4 w-full focus:scale-105" placeholder="Enter your email" type="email"/>
          <textarea className="rounded-lg p-3 m-4 w-full focus:scale-105" placeholder="Enter your message"></textarea>
          <button className="ring-2 p-2 m-4 px-8 md:px-16 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-bold hover:scale-105" type="submit">
            Send
          </button>
        </form>
      </div>

      <div className="mt-16 md:mt-24">
        <ul className="flex flex-wrap gap-6 md:gap-8 text-2xl md:text-3xl text-white justify-center">
          <li className="scale-100 hover:scale-110 opacity-100 hover:opacity-80 ring-2 ring-white p-1 rounded-md hover:cursor-pointer" title="Linkedin">
            <a href="https://www.linkedin.com/in/bhavani-kumar-sedamkari/"><FaLinkedinIn /></a>
          </li>
          <li className="scale-100 hover:scale-110 opacity-100 hover:opacity-80 ring-2 ring-white p-1 rounded-md hover:cursor-pointer" title="GitHub">
            <a href="https://github.com/BhavaniKumarSedamkari"><FaGithub /></a>
          </li>
          <li className="scale-100 hover:scale-110 opacity-100 hover:opacity-80 ring-2 ring-white p-1 rounded-md hover:cursor-pointer" title="Send Email">
            <a href="mailto:sbhavanikumar2016@gmail.com"><SiGmail /></a>
          </li>
          <li className="scale-100 hover:scale-110 opacity-100 hover:opacity-80 ring-2 ring-white p-1 rounded-md hover:cursor-pointer" title="Download Resume">
            <a href={resume} download="BhavaniKumarResume.pdf"><FaDownload /></a>
          </li>
        </ul>
        <p className="text-white mt-6 text-sm md:text-md">Developed by Bhavani Kumar</p>
      </div>
    </div>
  );
};

export default Contact;
