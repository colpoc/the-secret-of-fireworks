import React, { useState, useRef, useEffect } from "react";
import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import axios from "axios";
import P5jsContainer from "./p5jsContainer";

// 金属の番号に対応するマッピング
const metalMap: { [key: string]: number } = {
  Na: 0,
  Ca: 1,
  K: 2,
  Li: 3,
  Sr: 4,
  Ba: 5,
  Cu: 6,
};

// 選択された金属の番号を保持する変数
export let selectedMetalNumbers: number[] = [0, 0, 0];

// YouTube動画を埋め込むURLを生成する関数
const getVideoEmbedUrl = (videoId: string) => {
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&playlist=${videoId}`;
};

// YouTube動画を再生する関数
const playVideo = (
  setVideoId: React.Dispatch<React.SetStateAction<string | null>>,
) => {
  // videoIdを指定して音楽を再生
  const videoId = "-tKVN2mAKRI"; // 固定の動画ID
  setVideoId(videoId); // 指定したvideoIdを設定
};

interface SelectMetalsProps {
  onLaunch: () => void; // ボタンが押された時のコールバック
}

const SelectMetals: React.FC<SelectMetalsProps> = ({ onLaunch }) => {
  // 選択された金属を管理するための状態
  const [selectedMetals, setSelectedMetals] = useState({
    metal1: "",
    metal2: "",
    metal3: "",
  });

  // YouTube動画のIDを管理する状態
  const [videoId, setVideoId] = useState<string | null>(null);

  // ページ上部へのスクロール用のref
  const topRef = useRef<HTMLDivElement | null>(null);

  // 選択が変更されたときに状態を更新する関数
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSelectedMetals((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // カスタムスクロール関数
  const smoothScrollToTopAndBottom = () => {
    playVideo(setVideoId);

    // 金属選択に基づいてnumber配列を更新
    selectedMetalNumbers = [
      metalMap[selectedMetals.metal1],
      metalMap[selectedMetals.metal2],
      metalMap[selectedMetals.metal3],
    ];

    console.log(selectedMetalNumbers);

    // p5jsContainerを表示
    onLaunch();

    const scrollTo = (target: number, duration: number) => {
      return new Promise<void>((resolve) => {
        const startPosition = window.pageYOffset;
        const distance = target - startPosition;
        let start: number | null = null;

        const step = (timestamp: number) => {
          if (!start) start = timestamp;
          const progress = timestamp - start;
          const scrollY = easeInOutQuad(
            progress,
            startPosition,
            distance,
            duration,
          );
          window.scrollTo(0, scrollY);

          if (progress < duration) {
            window.requestAnimationFrame(step);
          } else {
            resolve();
          }
        };

        window.requestAnimationFrame(step);
      });
    };

    // 上部へのスクロールと下部へのスクロールを順番に実行
    scrollTo(0, 1000) // 上部スクロール
      .then(() => {
        // 一瞬で最下部へスクロール
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "instant", // 一瞬でスクロール
        });
      });
  };

  // イージング関数 (easeInOutQuad)
  const easeInOutQuad = (
    time: number,
    start: number,
    distance: number,
    duration: number,
  ) => {
    time /= duration / 2;
    if (time < 1) return (distance / 2) * time * time + start;
    time--;
    return (-distance / 2) * (time * (time - 2) - 1) + start;
  };

  return (
    <div className="bg-black text-white flex flex-col justify-center pt-10 min-h-screen">
      <div ref={topRef} />
      <div className="flex-1 flex flex-col justify-center items-center pt-10 lg:pt-6">
        <h2 className="text-4xl font-bold">花火を作ってみよう！</h2>
        <h3 className="text-xl font-bold">火薬にする金属を3つ選んでみよう。</h3>
        <form className="flex flex-col gap-4 mt-16 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
          <label className="text-lg">1つ目の金属は何にする？</label>
          <select
            name="metal1"
            value={selectedMetals.metal1}
            onChange={handleSelectChange}
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          >
            <option value="">何色にしたい？</option>
            <option value="Na">ナトリウム</option>
            <option value="Ca">カルシウム</option>
            <option value="K">カリウム</option>
            <option value="Li">リチウム</option>
            <option value="Sr">ストロンチウム</option>
            <option value="Ba">バリウム</option>
            <option value="Cu">銅</option>
          </select>

          <label className="text-lg">2つ目の金属は何にする？</label>
          <select
            name="metal2"
            value={selectedMetals.metal2}
            onChange={handleSelectChange}
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          >
            <option value="">何色にしたい？</option>
            <option value="Na">ナトリウム</option>
            <option value="Ca">カルシウム</option>
            <option value="K">カリウム</option>
            <option value="Li">リチウム</option>
            <option value="Sr">ストロンチウム</option>
            <option value="Ba">バリウム</option>
            <option value="Cu">銅</option>
          </select>

          <label className="text-lg">3つ目の金属は何にする？</label>
          <select
            name="metal3"
            value={selectedMetals.metal3}
            onChange={handleSelectChange}
            className="bg-black text-white outline-none border-2 border-white rounded-3xl px-8 py-2"
          >
            <option value="">何色にしたい？</option>
            <option value="Na">ナトリウム</option>
            <option value="Ca">カルシウム</option>
            <option value="K">カリウム</option>
            <option value="Li">リチウム</option>
            <option value="Sr">ストロンチウム</option>
            <option value="Ba">バリウム</option>
            <option value="Cu">銅</option>
          </select>

          <div className="text-center mt-10">
            <button
              type="button"
              onClick={smoothScrollToTopAndBottom}
              className="bg-white text-black rounded-3xl px-8 py-3"
            >
              打ち上げる！
            </button>
          </div>
        </form>
      </div>

      {/* 音声のみを再生するための隠しiframe */}
      {videoId && (
        <iframe
          title="YouTube Background Music"
          src={getVideoEmbedUrl(videoId)}
          frameBorder="0"
          allow="autoplay"
          style={{
            position: "absolute",
            width: "0",
            height: "0",
            border: "none",
          }}
        ></iframe>
      )}
    </div>
  );
};

export default SelectMetals;
