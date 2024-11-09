import React from "react";

const Project = ({ name, children }) => {
  return (
    <div className="rounded-[16px] bg-background-light p-[20px] lg:bg-transparent lg:p-0 lg:relative mt-16">
      <div className="project-box lg:hover:p-[20px] xl:hover:p-[30px] 2xl:w-[1000px] 2xl:h-[700px] xl:w-[800px] xl:h-[560px] lg:w-[660px] lg:h-[462px]">
        <div className="lg:bg-secondary-dark xl:pr-[150px] lg:py-auto lg:h-[100%] lg:pr-[100px]">
          {name === "libraryForge" && (
            <div className="rounded-[16px] overflow-hidden min-h-[200px] bg-[url('/library-forge.png')] bg-center bg-cover lg:bg-none lg:rounded-none lg:w-[100%] md:h-[100%]">
              <img
                src="/library-forge.png"
                className="lg:object-contain lg:h-[100%] hidden lg:inline"
              />
            </div>
          )}
          {name === "jobly" && (
            <div className="rounded-[16px] overflow-hidden min-h-[200px] bg-[url('/jobly.png')] bg-center bg-cover lg:bg-none lg:rounded-none lg:w-[100%] md:h-[100%]">
              <img
                src="/jobly.png"
                className="lg:object-contain lg:h-[100%] hidden lg:inline"
              />
            </div>
          )}
          {name === "flixxly" && (
            <div className="rounded-[16px] overflow-hidden min-h-[200px] bg-[url('/flixxly.png')] bg-center bg-cover lg:bg-none lg:rounded-none lg:w-[100%] md:h-[100%]">
              <img
                src="/flixxly.png"
                className="lg:object-contain lg:h-[100%] hidden lg:inline"
              />
            </div>
          )}
        </div>
      </div>
      <div className="2xl:w-[650px] lg:absolute lg:z-1 xl:top-[100px] lg:right-0 xl:w-[600px] lg:w-[420px] lg:top-[50px] lg:bg-lime-800 lg:p-8 lg:drop-shadow-[20px_20px_20px_rgb(0,0,0)]">
        {children}
      </div>
    </div>
  );
};
export default Project;
