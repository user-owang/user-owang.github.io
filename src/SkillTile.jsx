import React from "react";

const SkillTile = ({ name }) => {
  const tech = {
    javascript: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      text: "JavaScript",
    },
    node: {
      img: "https://nodejs.org/static/logos/jsIconGreen.svg",
      text: "Node.js",
    },
    git: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      text: "Git",
    },
    postgres: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
      text: "PostgreSQL",
    },
    prisma: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
      text: "Prisma",
    },
    python: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      text: "Python",
    },
    tailwind: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      text: "Tailwind CSS",
    },
    bootstrap: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      text: "Bootstrap",
    },
    react: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      text: "React",
    },
    express: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      text: "Express.js",
    },
    html: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      text: "HTML",
    },
    css: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      text: "CSS",
    },
    jquery: {
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
      text: "jQuery",
    },
  };
  return (
    <div className="tile-border p-[2px] rounded-[5px] my-2 lg:rounded-[10px] lg:p-[4px]">
      <div className="tile-inside p-2 rounded-[3px] bg-background-dark flex flex-col items-center lg:rounded-[6px] h-[80px] lg:h-[104px] justify-end">
        {name === "express" && (
          <div className="bg-white p-1 w-[35px] rounded-full h-[35px] lg:p-1.5 lg:w-[60px] lg:h-[60px]">
            <img
              src={tech[name].img}
              alt={`${name}-logo`}
              className="object-contain"
            />
          </div>
        )}
        {name !== "express" && (
          <img
            src={tech[name].img}
            alt={`${name}-logo`}
            className="max-w-[35px] max-h-[35px] lg:max-w-[60px] lg:max-h-[60px]"
          />
        )}
        <div className="text-white">{tech[name].text}</div>
      </div>
    </div>
  );
};
export default SkillTile;
