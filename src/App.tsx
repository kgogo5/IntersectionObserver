import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

const BoxArea = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

const Box = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 480px;
  width: 100%;
  background-color: #bef355;
  overflow: hidden;

  &:nth-child(2n) {
    background-color: #32eea0;
  }

  & > div {
    padding-top: 177.778%;
    width: 100% !important;
    height: 100% !important;
  }

  & > div > div {
    width: 100% !important;
    height: 100% !important;
  }

  & video {
    position: absolute;
    height: 100% !important;
    width: auto !important;
    left: 50%;
    top: 0;
    bottom: 0;
    transform: translateX(-50%);
  }

  .btn {
    position: absolute;
    right: 10px;
    top: 10px;
    z-index: 2;
  }
`;

const list = [
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
  "https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4",
];

function App() {
  const [muted, setmuted] = useState(true);
  return (
    <>
      <BoxArea>
        {list.map((item, index) => (
          <Player
            key={index}
            url={item}
            index={index}
            muted={muted}
            setmuted={setmuted}
          />
        ))}
      </BoxArea>
    </>
  );
}

export default App;

const Player = ({
  url,
  index,
  muted,
  setmuted,
}: {
  url: string;
  index: number;
  muted: boolean;
  setmuted: any;
}) => {
  const [play, setPlay] = useState(false);
  console.log(muted);

  const { ref } = useInView({
    rootMargin: "-50% 0px",
    onChange: (inView) => {
      setPlay(inView);
    },
  });

  useEffect(() => {
    if (index === 0) {
      setPlay(true);
    }
    if (index === 1) {
      setPlay(false);
    }
  }, [index]);

  return (
    <Box ref={ref}>
      <span className="btn">
        <button onClick={() => setmuted(!muted)}>muted</button>
      </span>
      <ReactPlayer playing={play} url={url} loop muted={muted} />
    </Box>
  );
};
