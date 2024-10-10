import React from "react";
import {
  Tile,
  TileBackground,
  TileContent,
  TileWrapper,
} from "@/components/tile";
import {
  WorkBackground,
  WorkContainer,
  WorkLeft,
  WorkLink,
  WorkRight,
} from "./work";
import Image from "next/image";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground>
      <WorkBackground />
    </TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="px-9">
                <strong>3種の火薬の秘密</strong>
              </div>
              <div className="text-base md:text-s py-4 pl-9 tracking-tight ">
                花火は、基本的に3種類の火薬によって構成されています。
                <div className="p-5">
                  <li>「発射薬」煙火筒から打ち上げるための火薬</li>
                  <li>「星」上空で花火を広げるための火薬</li>
                  <li>「割薬」色彩や光の効果を生み出す火薬</li>
                </div>
                <p>
                  導火線で点火する「発射薬」。
                  <br />
                  強い爆発力で花火を発射筒から高く打ち上げます。
                  <br />
                  火薬の燃焼に伴って花火玉は尾を引くように光を放ちながら上昇していきます。
                  <br />
                  これが、夜空に描かれる「尾を引く光の軌跡」の正体です。
                  <br />
                </p>
                <p>
                  上空では「割薬」が作動します。
                  <br />
                  花火玉の内部で星の間に埋め込まれ、
                  <br />
                  星を一気に爆発。
                  <br />
                </p>
                <p>
                  最後に、色彩や光で魅せる、「星」が点火。
                  <br />
                  星によって多彩な色や形を描きながら夜空を彩ります。
                  <br />
                </p>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/secrets-image/fireworks_kayaku.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Pink Panda"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="px-9">
                <strong>炎の色の秘密</strong>
              </div>
              <div className="text-base md:text-s py-4 pl-9 tracking-tight ">
                花火の輝きは炎色反応によって色づけられます。
                <br />
                炎色反応とは、特定の金属が炎の中で燃えると、独特の色を発する現象です。
                <br />
                たとえば、銅は青緑色、リチウムは赤、ナトリウムは黄色に輝きます。
                <br />
                これは金属の原子が熱によってエネルギーを受け取り、特定の波長の光を放つからです。
                <br />
                夜空に広がる美しい色の魔法の源なのです。
                <br />
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/secrets-image/fireworks-enshoku.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Steakwallet"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div className="px-9">
                <strong>まごころの秘密</strong>
              </div>
              <div className="text-base md:text-s py-4 pl-9 tracking-tight ">
                <p>
                  花火は、とてつもない時間をかけてつくられます。
                  <br />
                </p>
                <p>
                  さまざまな光を生み出す星をつくるのは冬。
                  <br />
                </p>
                <p>
                  1日1mmずつ、星に材料をつけて干して大きくしていったり、
                  <br />
                  花火玉に詰めた後も張り紙を何枚も重ねて貼り、
                  <br />
                  勢いよく花火が弾けるように圧迫しています。
                  <br />
                </p>
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image
                src="/secrets-image/fireworks-magokoro.png"
                layout="responsive"
                width={840}
                height={1620}
                alt="Showtime"
              />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
