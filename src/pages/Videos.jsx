import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Tag from "../components/InputTag/Tag";
import YoutubeCard from "../components/Video/YoutubeCard";
import { useInView } from "react-intersection-observer";
import MaskText from "../components/ui/maskText";
import YoutubeCardLoading from "../components/Video/YoutubeCardLoading";
import BackgroundDots from "../assets/Background";
const Videos = () => {
  const [youtubeData, setYoutubeData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetch("/VideoData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setYoutubeData(data);
        // setLoading(false);
      })
      .catch((error) => console.error("Error loading video data:", error));
  }, []);

  const tagsData = [
    "Google",
    "Zeta",
    "UBS",
    "Microsoft",
    "Deutsche-Bank",
    "Cred",
  ];

  return (
    <>
      <BackgroundDots
        dotSize={1.8}
        dotColor="#cbcbcc"
        backgroundColor=""
        gap={15}
        className="custom-class"
        fade={true}
      />
      <div className="mx-auto flex min-h-screen flex-col">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-centerF px-4 py-6 pt-24 text-center sm:px-6 lg:px-6">
          <h2 className="mb-4 text-4xl font-[600] tracking-tight">Videos</h2>
          <div className="flex w-screen flex-wrap justify-center gap-4 align-bottom x-sm:px-6">
            {tagsData.map((tag, index) => {
              return <AnimatedTags key={index} name={tag} />;
            })}
          </div>
        </div>
        <div className="flex w-screen justify-center p-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-1 lg:grid-cols-3">
            {loading ? (
              <>
                {[1, 2, 3, 4].map((index) => (
                  <YoutubeCardLoading key={index} />
                ))}
              </>
            ) : (
              <>
                {youtubeData.map((data, index) => (
                  <AnimatedYoutubeCard
                    key={index}
                    title={data.title}
                    img={data.img}
                    link={data.link}
                    description={data.description}
                    tags={data.tags}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const AnimatedTags = ({ name }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.2 }}
    >
      <Tag name={name} />
    </motion.div>
  );
};

const AnimatedYoutubeCard = ({ title, img, link, description, tags }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.3 }}
    >
      <YoutubeCard
        title={title}
        img={img}
        link={link}
        description={description}
        tags={tags}
      />
    </motion.div>
  );
};

export default Videos;
