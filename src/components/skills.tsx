import React, { useContext, useRef } from "react";
import s from "../styles/skills.module.css";
import { ScrollContext } from "@/utils/scroll-observer";

const fallbackDownloads = 82492477;
const fallbackCommits = 317;

interface Props {
  downloads: number;
  commits: number;
}

const opacityForBlock = (sectionProgress: number, blockNo: number) => {
  const progress = sectionProgress - blockNo;
  if (progress >= 0 && progress < 1) return 1;
  return 0.2;
};

const Skills: React.FC<Props> = ({ commits, downloads }) => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  const numOfPages = 4;
  let progress = 0;

  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages - 0.5, Math.max(0.5, percentY * numOfPages));
  }

  // const numOfDL =
  //   Math.round(
  //     (downloads || fallbackDownloads) / 1000 / 1000,
  //   ).toLocaleString() + " million";
  // const numOfCommits = Math.round(commits || fallbackCommits).toLocaleString();

  return (
    <div ref={refContainer} className="bg-black text-white">
      <div className="min-h-screen max-w-5xl mx-auto px-10 lg:px-20 py-12 md:py-12 lg:py-12 flex flex-col justify-center items-center text-4xl md:text-6xl ls:text-7xl tracking-widest font-semibold">
        <div className="leading-[1.15]">
          <div
            className={`${s.skillText} text-4xl py-4`}
            style={{
              opacity: opacityForBlock(progress, 0),
            }}
          >
            わぁ、綺麗…！
          </div>
          <span
            className={`${s.skillText} text-4xl py-4 block after:content-['_']`}
            style={{
              opacity: opacityForBlock(progress, 1),
            }}
          >
            でも、不思議。
          </span>
          <span
            className={`${s.skillText} text-4xl py-4 block`}
            style={{
              opacity: opacityForBlock(progress, 2),
            }}
          >
            花火ってどうやって作るんだろう？
          </span>
          <span
            className={`${s.skillText} text-4xl py-4 block`}
            style={{
              opacity: opacityForBlock(progress, 3),
            }}
          >
            花火の秘密を知りたい。
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
