"use client";
import React, { useRef, useState } from "react";
import { StaticImageData } from "next/image";
import { ListIconSvg, PlaySvg } from "../SvgContainer/SvgContainer";

type VideoSectionProps = {
  id?: string;
  poster?: StaticImageData | string;
  title?: string;
  description?: string;
  videoSrc: string;
  titleClassName?: string;
  descriptionClassName?: string;
  links?: string[];
};

const VideoSection = ({
  id,
  title,
  description,
  videoSrc,
  poster,
  titleClassName = "card_title_black text-center ",
  descriptionClassName = "section_description text-center mb-6",
  links = [],
}: VideoSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  };

  return (
    <section
      id={id}
      className="section_padding flex flex-col items-center max-w-[1229px] mx-auto"
    >
      <h2 className={titleClassName}>{title}</h2>

      {description && <p className={descriptionClassName}>{description}</p>}

      <div className="flex flex-col justify-between gap-5">
        <div className="relative w-full h-[80%] overflow-hidden">
          {/* Thumbnail background image */}
          {!isPlaying && (
            <img
              src={typeof poster === "string" ? poster : poster?.src}
              alt="video thumbnail"
              className="absolute inset-0 w-full h-full  z-0"
            />
          )}

          <video
            ref={videoRef}
            src={videoSrc}
            className={`w-full h-full object-cover z-10 relative ${
              !isPlaying ? "opacity-0" : "opacity-100"
            }`}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            controls
          />

          {/* Play Button Overlay */}
          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center cursor-pointer z-20 bg-black/20"
              onClick={handlePlayPause}
            >
              <PlaySvg />
            </div>
          )}
        </div>
      </div>

      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center justify-between my-10">
          {links.map((link, index) => (
            <div key={index} className="">
              <p className="flex items-center gap-2 section_description ">
                <span className="text-primary-black text-sm md:text-base xl:text-lg 2xl:text-xl">
                  <ListIconSvg />
                </span>
                {link}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
