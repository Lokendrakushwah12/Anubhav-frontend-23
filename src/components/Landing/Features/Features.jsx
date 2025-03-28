import React from "react";
import Comment from "../../../assets/svg/Comment";
import World from "../../../assets/images/world.png";
import VideoIcon from "../../../assets/svg/VideoIcon";
import Videos from "../../../pages/Videos";
import VideoPage from "../../../assets/images/VideoPage.png";
import { FollowerPointerCard } from "../../../components/ui/following-pointer";
import MaskWrapper from "../../ui/maskWrapper";
import FadeWrapper from "../../ui/fadeWrapper";
import { Link } from "react-router-dom";

const Card = ({ title, bold, href, description, icon, children }) => (
  <div className="relative h-full w-full overflow-hidden">
    <div className="flex flex-col gap-3 p-8">
      <MaskWrapper>
        <div className="flex items-center justify-start gap-2">
          {icon}
          <h4 className="text-[16px] font-[400] text-[#212121]">{title}</h4>
        </div>
      </MaskWrapper>
      <MaskWrapper>
        <p className="text-[20px] leading-[100%] tracking-tight text-[#a1a1a1]">
          <Link
            to={href}
            className={`font-[600] text-[#212121] ${href != "" ? "underline" : ""}`}
          >
            {bold}
          </Link>
          {description}
        </p>
      </MaskWrapper>
    </div>
    {children}
  </div>
);

const TitleComponent = ({ title, color, borderColor }) => (
  <div className="-mt-3 ml-1 flex items-center space-x-2">
    <p
      className={`rounded-bl-full rounded-br-full rounded-tr-full border text-[16px] text-white sm:text-[12px] ${color} ${borderColor} px-2 py-1 font-[500]`}
    >
      {title}
    </p>
  </div>
);

const Pointer = ({
  title,
  cursorColor,
  strokeColor,
  color,
  borderColor,
  className,
}) => (
  <>
    <div className={`${className}`}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="1"
        viewBox="0 0 16 16"
        className={`h-6 w-6 sm:h-4 sm:w-4 ${cursorColor} stroke -translate-x-[12px] -translate-y-[10px] -rotate-[70deg] transform ${strokeColor} stroke-[1px]`}
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"></path>
      </svg>
      <TitleComponent title={title} color={color} borderColor={borderColor} />
    </div>
  </>
);

const Avatar = ({ Name, borderColor, src, className }) => (
  <div
    className={`${borderColor} -ml-3 rounded-full border-2 bg-white p-1 ${className}`}
  >
    <img
      src={src}
      alt={Name}
      className={`h-20 w-20 select-none rounded-full sm:h-16 sm:w-16 x-sm:h-12 x-sm:w-12`}
      draggable="false"
    />
  </div>
);

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[#f9f9f9] px-4 pb-32 pt-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center text-left">
        <div className="mx-auto flex h-[500px] w-full flex-row items-center justify-center border-b border-t border-[#d2d2d6] md:h-[1000px] md:flex-col">
          <Card
            title="Collaborate with other writers"
            bold="Sign in with GitHub on "
            href=""
            description="our platform, and get started with commenting on blog posts to collaborate with others."
            icon={<Comment />}
          >
            <FollowerPointerCard
              cursorColor="text-[#12B76A]"
              className="group relative z-50"
              title={
                <TitleComponent
                  title="You"
                  color="bg-[#12B76A]"
                  borderColor="border-[#039855]"
                />
              }
            >
              <div className="absolute bottom-[20%] flex h-full w-full items-center justify-center md-2xl:bottom-[10%] x-sm:bottom-[10%]">
                <FadeWrapper>
                  <Avatar
                    Name="Nikhil Dhariwal"
                    borderColor="border-[#2E90FA]"
                    className="z-30"
                    src="https://avatars.githubusercontent.com/u/83774380"
                  />
                </FadeWrapper>
                <FadeWrapper delay={0.05}>
                  <Avatar
                    Name="Lokendra Kushwah"
                    borderColor="border-[#313131]"
                    className="z-20"
                    src="https://avatars.githubusercontent.com/u/118094744"
                  />
                </FadeWrapper>
                <FadeWrapper delay={0.1}>
                  <Avatar
                    Name="Harshal patil"
                    borderColor="border-[#FF479F]"
                    className="z-10"
                    src="https://avatars.githubusercontent.com/u/91362856"
                  />
                </FadeWrapper>
              </div>
              <div className="h-full w-full">
                <Pointer
                  className="absolute left-[20%] top-[6%] translate-x-0 transition-all duration-500 group-hover:translate-x-[20%] md-2xl:left-[10%] x-sm:top-[0%]"
                  title="Lokendra Kushwah"
                  cursorColor="text-[#313131]"
                  strokeColor="stroke-[#121212]"
                  color="bg-[#313131]"
                  borderColor="border-[#121212]"
                />
                <Pointer
                  className="absolute bottom-[40%] left-[10%] translate-x-0 transition-all duration-[400ms] group-hover:-translate-y-[40%] md-2xl:bottom-[25%] x-sm:bottom-[20%]"
                  title="Nikhil Dhariwal"
                  cursorColor="text-[#2E90FA]"
                  strokeColor="stroke-[#1570EF]"
                  color="bg-[#2E90FA]"
                  borderColor="border-[#1570EF]"
                />
                <Pointer
                  className="absolute right-[20%] top-[10%] translate-x-0 transition-all duration-500 group-hover:translate-x-[20%] group-hover:translate-y-[20%] sm:right-[10%] md-2xl:right-[10%] md-2xl:top-[1%] x-sm:right-[0%]"
                  title="Harshal patil"
                  cursorColor="text-[#FF479F]"
                  strokeColor="stroke-[#B11C64]"
                  color="bg-[#FF479F]"
                  borderColor="border-[#B11C64]"
                />
              </div>
              <div className="bottom-0 right-0 select-none">
                <img
                  className="select-none"
                  src={World}
                  alt=""
                  draggable="false"
                />
              </div>
            </FollowerPointerCard>
          </Card>
          <div className="z-[60] h-full w-[1px] bg-[#d2d2d6] md:h-[1px] md:w-full" />
          <Card
            title="Video Collection"
            bold="Prefer Videos Over Blogs? "
            href="/videos"
            description="No worries! We've got an exciting collection of videos that bring the same inspiring stories and useful insights right to your screen."
            icon={<VideoIcon />}
          >
            <div className="pointer-events-none absolute bottom-0 left-0 block w-[800px] -translate-x-[30%] translate-y-[43%] scale-50 select-text rounded-3xl border border-[#d2d2d6] bg-[#fff9] shadow-2xl md:bottom-[-40%] md:left-[30%] md:hidden md:w-full lg:w-[1050px] lg:translate-y-[40%] xl:w-[1200px] x-sm:bottom-[-50%] x-sm:left-[20%] x-sm:w-[500px]">
              <Videos />
            </div>
            <div className="absolute -bottom-[25%] left-[60%] hidden h-[347px] w-[420px] -translate-x-1/2 scale-[140%] select-none md:block x-sm:scale-[100%]">
              <img
                src={VideoPage}
                alt="VideoPage"
                className="select-none"
                draggable="false"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
