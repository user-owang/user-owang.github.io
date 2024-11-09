import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import "./App.css";
import NavBar from "./NavBar";
import SkillTile from "./SkillTile";
import Project from "./Project";
import { useForm } from "@formspree/react";

function App() {
  const [state, handleSubmit] = useForm("mzzbenrp");
  const [section, setSection] = useState("top");
  const typeRef = useRef(null);
  const bannerContainer = useRef(null);
  const bannerImg = useRef(null);
  const aboutSect = useRef(null);
  const projectSect = useRef(null);
  const contactSect = useRef(null);
  const sectionRefs = [bannerContainer, aboutSect, projectSect, contactSect];

  const handleScroll = () => {
    const scrollPosition = window.scrollY + window.innerHeight / 2;
    console.log(scrollPosition);

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        const sectionTop = ref.current.offsetTop;
        const sectionHeight = ref.current.clientHeight;
        console.log(ref.current.id, sectionTop, sectionHeight);
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setSection(ref.current.id);
        }
      }
    });
  };

  useEffect(() => {
    const typed = new Typed(typeRef.current, {
      strings: [
        "Software Engineer",
        "Web Developer",
        "Frontend Enthusiast",
        "Problem Solver",
      ],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const intersectionRatio = entry.intersectionRatio;

          if (intersectionRatio < 1) {
            const opacity = intersectionRatio - 0.4;
            const scale = 1 + 2 * (1 - intersectionRatio);
            if (bannerImg.current) {
              bannerImg.current.style.opacity = opacity.toString();
              bannerImg.current.style.transform = `scale(${scale})`;
            }
          } else {
            if (bannerImg.current) {
              bannerImg.current.style.opacity = "0.6";
              bannerImg.current.style.transform = "scale(1)";
            }
          }
        });
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    const currentRef = bannerContainer.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <NavBar active={section} />
      <div className="banner" ref={bannerContainer} id="top">
        <div className="banner-text text-3xl md:text-4xl absolute md:left-[30%] md:top-[45%] top-[30%] left-1/2 transform -translate-x-1/2 md:transform-none min-w-[280px]">
          <div className="text-4xl md:text-5xl">
            <span className="text-white">Hi, I'm </span>
            <span className="text-secondary-base">Oliver</span>
            <span className="text-white">.</span>
          </div>
          <div className="md:pl-10 pt-3 md:pt-4">
            <span className="text-white">I am a </span>
            <span className="block md:inline">
              <span className="text-primary" ref={typeRef}></span>
            </span>
          </div>
        </div>
      </div>
      <div className="img-div max-w-[100%] md:max-w-none overflow-hidden md:overflow-visible">
        <img src="/banner.jpg" className="banner-img" ref={bannerImg} />
      </div>
      <div className="container mx-auto">
        <section
          className="about-section page text-center md:pb-16"
          ref={aboutSect}
          id="about"
        >
          <div className="pt-16">
            <h2 className="text-white text-3xl md:text-5xl font-bold">About</h2>
          </div>
          <div className="grid mt-16 md:mt-40 md:grid-cols-2">
            <div className="about-text text-white text-xl text-left p-6">
              <div className="flex justify-center">
                <img
                  src="/person-icon.svg"
                  className="h-[240px] w-[240px] mb-[40px]"
                />
              </div>
              <p>
                I am a certified software engineer with a background in
                marketing and sales in the consumer technology space. With a
                passion for full stack development and a drive to build
                intuitive web apps, I'm skilled in JavaScript, TypeScript,
                Python as well as experienced in technologies like React,
                Express.js, and database management. I'm a fast learner and
                collaborate closely with diverse teams to create efficient,
                scalable, and user-friendly solutions that solve real-world
                problems. I'm dedicated to ongoing learning and professional
                growth to stay at the forefront of new trends and technologies.
                I am looking to transition into a career in software engineering
                and excited to bring my focus on the end user and marketing
                expertise to a new industry.
              </p>
            </div>
            <div className="grid grid-cols-3 p-6">
              <div className="flex flex-col justify-center pr-[4px] lg:pr-3">
                <SkillTile name="html" />
                <SkillTile name="postgres" />
                <SkillTile name="tailwind" />
                <SkillTile name="jquery" />
              </div>
              <div className="flex flex-col justify-center px-[2px] lg:px-1.5">
                <SkillTile name="javascript" />
                <SkillTile name="python" />
                <SkillTile name="node" />
                <SkillTile name="express" />
                <SkillTile name="git" />
              </div>
              <div className="flex flex-col justify-center pl-[4px] lg:pl-1.5">
                <SkillTile name="css" />
                <SkillTile name="react" />
                <SkillTile name="prisma" />
                <SkillTile name="bootstrap" />
              </div>
            </div>
          </div>
        </section>
        <section
          className="projects-section page text-center md:pb-16"
          ref={projectSect}
          id="projects"
        >
          <div className="pt-16 md:mb-16">
            <h2 className="text-white text-3xl md:text-5xl font-bold ">
              Projects
            </h2>
          </div>
          <div className="project-list text-left p-[24px] md:p-0 md:pb-16">
            <Project name="libraryForge">
              <h2 className="text-white text-3xl mt-3 lg:mt-0 mb-3 font-bold">
                Library Forge
              </h2>
              <p className="text-white text-lg">
                A Magic the Gathering database powered by the Scryfall API.
                Users can use filters to search or browse for cards and use a
                GUI to build decklists. Decks are also featured on the homepage
                by most recently created and most liked. Built with Node.js,
                Express, Vite, and React.
              </p>
              <div className="flex flex-col">
                <div className="mt-2">
                  <a
                    href="https://github.com/user-owang/library-forge-backend#readme"
                    target="_blank"
                  >
                    <span className="p-[8px] text-white font-bold text-l text-center inline-block hover-link tracking-widest">
                      GITHUB
                    </span>
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    href="https://main.d3jr8aahcham5r.amplifyapp.com/"
                    target="_blank"
                  >
                    <span className="p-[8px] text-white font-bold text-l text-center inline-block hover-link tracking-widest">
                      LIVE DEMO
                    </span>
                  </a>
                </div>
              </div>
            </Project>
            <Project name="flixxly">
              <h2 className="text-white text-3xl mt-3 mb-3 font-bold lg:mt-0">
                Flixxly
              </h2>
              <p className="text-white text-lg">
                A movie database powered by the TMDB API. Users can track movies
                they have seen or want to watch, as well as follow cast/crew
                members of interest to be notified of new projects they're
                involved in. Built with Python, Flask, Jinja, and JavaScript.
              </p>
              <div className="flex flex-col">
                <div className="mt-2">
                  <a
                    href="https://github.com/user-owang/flixxly#readme"
                    target="_blank"
                  >
                    <span className="p-[8px] text-white font-bold text-l text-center inline-block hover-link tracking-widest">
                      GITHUB
                    </span>
                  </a>
                </div>
                <div className="mt-2">
                  <a href="https://flixxly.onrender.com/" target="_blank">
                    <span className="p-[8px] text-white font-bold text-l text-center inline-block hover-link tracking-widest">
                      LIVE DEMO
                    </span>
                  </a>
                </div>
              </div>
            </Project>
            <Project name="jobly">
              <h2 className="text-white text-3xl mt-3 mb-3 font-bold lg:mt-0">
                Jobly
              </h2>
              <p className="text-white text-lg">
                A simple mock-up of a job board populated with fake
                jobs/companies. Users can see a list of searchable jobs and
                companies. Built with Node.js, Express, Vite, and React.
              </p>
              <div className="flex flex-col">
                <div className="mt-2">
                  <a
                    href="https://github.com/user-owang/jobly-frontend"
                    target="_blank"
                  >
                    <span className="p-[8px] text-white font-bold text-l text-center inline-block hover-link tracking-widest">
                      GITHUB
                    </span>
                  </a>
                </div>
                <div className="mt-2">
                  <a
                    target="_blank"
                    href="https://main.d2bppa6sfb7hq8.amplifyapp.com/"
                  >
                    <span className="p-[8px] text-white font-bold text-l text-center inline-block hover-link tracking-widest">
                      LIVE DEMO
                    </span>
                  </a>
                </div>
              </div>
            </Project>
          </div>
        </section>
        <section
          className="contact-section page text-center text-white pb-24 last"
          ref={contactSect}
          id="contact"
        >
          <div className="pt-16 mb-16 md:mb-24">
            <h2 className="text-white text-3xl md:text-5xl font-bold ">
              Contact
            </h2>
          </div>
          <div className="px-[24px] md:px-[0px] md:flex md:justify-center">
            <div className="contact-form-box  w-[100%] md:w-[60%] bg-secondary-dark rounded-[16px] padding p-[20px] md:p-[32px]">
              <div className="text-left text-2xl md:text-4xl font-bold tracking-wide text-white shadow-text mb-[20px] font-sans">
                MESSAGE ME
              </div>
              <form onSubmit={handleSubmit}>
                <label className="block text-left text-xl mb-[16px]">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="What's your name?"
                  className="block w-[100%] py-[10px] px-[20px] bg-background-light text-xl rounded-[8px] mb-[16px] focus-visible:outline-none"
                />
                <label className="block text-left text-xl mb-[16px]">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="What's your email address?"
                  className="block w-[100%] py-[10px] px-[20px] bg-background-light text-xl rounded-[8px] mb-[16px] focus-visible:outline-none"
                />
                <label className="block text-left text-xl mb-[16px]">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Please drop a line here."
                  className="block w-[100%] py-[10px] px-[20px] bg-background-light text-xl rounded-[8px] mb-[16px] h-[170px] focus-visible:outline-none"
                />
                <button className="text-lg mt-[16px] p-[8px] bg-primary rounded-[6px]">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <footer className="flex flex-col justify-center text-secondary-base">
            <div className="flex w-[120px] justify-between mb-2">
              <a href="https://github.com/user-owang" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/oliver-wang-6a12195b/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-linkedin"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </a>
              <a href="mailto:oliver.sha.wang@gmail.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  fill="currentColor"
                  className="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                </svg>
              </a>
            </div>
            <div className="text-sm">Oliver Wang ©2024</div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
