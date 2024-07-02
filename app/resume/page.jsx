"use client";

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description: `I am a second-year bachelor student in Frontend and Mobile Development at University College Kristiania.
  My background includes training as a carpenter and studying construction, along with experience working as a shop assistant. 
  These roles have equipped me with a unique blend of technical skills, creativity, and customer service expertise, 
  which I bring to my studies and future career in tech.`,
  info: [
    { fieldName: "name", fieldValue: "Sattar" },
    { fieldName: "Phone", fieldValue: "(+47) 94 10 02 67" },
    { fieldName: "Experience", fieldValue: "2 Years" },
    { fieldName: "Email", fieldValue: "sattar_saud@hotmail.com" },
    { fieldName: "Languages", fieldValue: "Norwegian, English, Arabic" },
  ],
};

// work experience data
const workExperience = {
  icon: "/assets/resume/badge.svg",
  title: "My work experience",
  description: `I gained valuable experience in customer service and retail operations, 
  where I honed my communication skills and developed a keen understanding of consumer needs and preferences.
  This role taught me the importance of attention to detail and maintaining high standards in a fast-paced environment.`,
  items: [
    {
      company: "Rema 1000",
      position: "Shop assistant/employee",
      duraition: "2023 - Present",
    },
    {
      company: "Coop Mega Nardo",
      position: "Shop assistant/employee",
      duraition: "2011 - 2022",
    },
    {
      company: "Krone Bygg AS",
      position: "Carpenter",
      duraition: "2014 - 2018",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description: `Bachelor's in Frontend and Mobile Development University College Kristiania 
    Currently in my second year, I am gaining comprehensive knowledge and hands-on experience
    in creating dynamic and responsive web and mobile applications. My coursework covers a wide 
    range of technologies, including HTML5, CSS3, JavaScript, React.js, Next.js, and Tailwind CSS, 
    preparing me for a successful career in frontend and mobile development. I also want to become 
    a fullstack developer in the future, thats my goal.`,
  items: [
    {
      institution: "Kristiania University College",
      degree: "Bachelor Front-End & Mobil Development",
      duraition: "2023 - Present",
    },
    {
      institution: "Udemy",
      degree: "Web Developer Certificate",
      duraition: "2022",
    },
    {
      institution: "Udemy",
      degree: "React Certificate",
      duraition: "2022",
    },
    {
      institution: "Tiller High School",
      degree: "Construction",
      duraition: "2010 - 2014",
    },
  ],
};

// skills
const skills = {
  title: "My skills",
  description: `I have a solid foundation in HTML5 and CSS3 for creating responsive web pages, and I build dynamic user interfaces with JavaScript.
  My experience with React.js and Next.js allows me to develop modern web applications efficiently, while Tailwind CSS helps me with rapid UI development.
  In addition to these technical skills, I excel in enhancing code quality with TypeScript and designing user interfaces with Figma. My problem-solving abilities, 
  creativity, and customer service experience enable me to understand client needs and deliver high-quality results. I am also an effective communicator and a strong team player.`,
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

function tecColor() {
  return skills.skillList.map((skill, index) => {
    let hoverClass = "";

    switch (skill.name) {
      case "html 5":
        hoverClass = "hover:text-orange-500";
        break;
      case "css 3":
        hoverClass = "hover:text-blue-500";
        break;
      case "javascript":
        hoverClass = "hover:text-yellow-300";
        break;
      case "typescript":
        hoverClass = "hover:text-blue-300";
        break;
      case "react.js":
        hoverClass = "hover:text-cyan-500";
        break;
      case "next.js":
        hoverClass = "hover:text-black";
        break;
      case "tailwind.css":
        hoverClass = "hover:text-teal-500";
        break;
      case "figma":
        hoverClass = "hover:text-pink-500";
        break;
      default:
        hoverClass = "hover:text-gray-500";
    }

    return (
      <span key={index} className={`${hoverClass}`}>
        {skill.icon}
      </span>
    );
  });
}

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duraition: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="workExperience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="workExperience">Work Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className=" min-h-[70vh] w-full">
            {/* work experience */}
            <TabsContent value="workExperience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{workExperience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {workExperience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {workExperience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duraition}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col 
                          justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duraition}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    let hoverClass = "";

                    switch (skill.name) {
                      case "html 5":
                        hoverClass = "group-hover:text-orange-500";
                        break;
                      case "css 3":
                        hoverClass = "group-hover:text-blue-500";
                        break;
                      case "javascript":
                        hoverClass = "group-hover:text-yellow-300";
                        break;
                      case "typescript":
                        hoverClass = "group-hover:text-blue-300";
                        break;
                      case "react.js":
                        hoverClass = "group-hover:text-cyan-500";
                        break;
                      case "next.js":
                        hoverClass = "group-hover:text-black";
                        break;
                      case "tailwind.css":
                        hoverClass = "group-hover:text-teal-500";
                        break;
                      case "figma":
                        hoverClass = "group-hover:text-pink-500";
                        break;
                      default:
                        hoverClass = "group-hover:text-gray-500";
                    }

                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full cursor-default h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div
                                className={`text-6xl transition-all duration-300 ${hoverClass}`}
                              >
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-start"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
