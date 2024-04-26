import { FunctionComponent, useState } from "react";
import profile from "../../public/assets/images/profile.png";
import toLink from "../../public/assets/icons/linkTo.svg";
import { TypeAnimation } from "react-type-animation";

const Social: FunctionComponent = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  return (
    <section className=" mt-16  mq750:mt-5 self-stretch flex flex-row flex-wrap  justify-start py-8 pr-[34px] pl-8 box-border gap-[32px] max-w-full text-left text-base text-preto-100 font-raleway mq450:gap-[16px]">
      <div className="mq750:hidden ">
        <img
          className="my-auto mx-auto mq750:top-0  mq750:left-0  w-[220px] h-[220px] mq750:w-[250px] mq750:h-[250px] md:w-[150px] md:right-0 rounded-full"
          loading="lazy"
          alt=""
          src={profile}
        />
      </div>
      <div className="dark:text-white flex-1 flex flex-col items-start justify-start gap-[8px] max-w-full mq450:min-w-full">
        <h2 className="mb-0 dark:text-green-500 text-green-800 mq450:text-lg">
          ¡Hola! 👋 Mi nombre es
        </h2>
        <h3 className="m-0 self-stretch relative text-33xl font-bold font-inherit mq450:text-lg">
          Fernando Cesar Sandoval Padilla.
        </h3>
        <TypeAnimation
          className="mq450:text-sm mb-2 text-[30px]"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Front-end Developer",
            1000,
            "Back-end Developer",
            1000,
          ]}
          wrapper="span"
          speed={40}
          style={{
            whiteSpace: "pre-line",
            display: "block",
            marginTop: "0",
          }}
          repeat={Infinity}
        />
        <div className="my-auto mx-auto block mqScreen:hidden">
  <img
    className="my-auto mx-auto w-[220px] h-[220px] md:w-[150px] md:right-0 rounded-full"
    loading="lazy"
    alt=""
    src={profile}
  />
</div>

        <div className="mt-4 mb-4 w-[467px] flex flex-row items-start justify-start gap-[12px] max-w-full mq450:flex-wrap mq675:gap-[32px_16px]">
          <div className="h-6 flex flex-row items-center justify-start gap-[4px]">
            <div className="relative font-medium inline-block min-w-[50px]">
              <a
                href="https://github.com/Fernandofcsp"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: selectedLink === "github" ? "#3b83bd" : "inherit",
                }}
                onMouseEnter={() => setSelectedLink("github")}
                onMouseLeave={() => setSelectedLink(null)}
              >
                Github
              </a>
            </div>
            <img
              className="dark:invert h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={toLink}
            />
          </div>
          <div className="h-6 flex flex-row items-center justify-start ">
            <div className="relative font-medium inline-block min-w-[64px]">
              <a
                href="https://www.linkedin.com/in/fernando-fcsp/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: selectedLink === "linkedin" ? "#3b83bd" : "inherit",
                }}
                onMouseEnter={() => setSelectedLink("linkedin")}
                onMouseLeave={() => setSelectedLink(null)}
              >
                Linkedin
              </a>
            </div>
            <img
              className="dark:invert h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={toLink}
            />
          </div>

          <div className="flex-1 flex flex-row items-center justify-start  min-w-[63px]">
            <div className="relative font-medium inline-block min-w-[90px]">
              <a
                href="https://drive.google.com/file/d/1BPP9BLeB2VMHU_xHguwK5CoJXZRDLQRM/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: selectedLink === "cv" ? "#3b83bd" : "inherit" }}
                onMouseEnter={() => setSelectedLink("cv")}
                onMouseLeave={() => setSelectedLink(null)}
              >
                Currículum
              </a>
            </div>
            <img
              className="dark:invert h-6 w-6 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src={toLink}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Social;
