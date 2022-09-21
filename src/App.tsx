import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

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
    z-index: 3;
  }

  .dim {
    z-index: 1;
  }
`;

const Dim = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  transition: 0.5s;
  opacity: 0;
  z-index: 2;

  &.dim {
    opacity: 1;
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
  url: playerUrl,
  index,
  muted: playerMuted,
  setmuted,
}: {
  url: string;
  index: number;
  muted: boolean;
  setmuted: any;
}) => {
  const [player, setPlayer] = useState({
    url: playerUrl,
    pip: false,
    playing: false,
    controls: false,
    light: false,
    volume: 0.8,
    muted: playerMuted,
    playbackRate: 1.0,
    loop: true,
  });

  const { pip, playing, controls, light, volume, playbackRate, loop } = player;

  const videoRef: any = useRef(null);

  const { ref } = useInView({
    // threshold: 1,
    rootMargin: "-50% 0px",
    onChange: (inView) => {
      setPlayer({ ...player, playing: inView });
      replay();
    },
  });

  const replay = () => {
    videoRef.current.seekTo(0);
  };

  useEffect(() => {
    if (index === 0) {
      setPlayer({ ...player, playing: true });
    }
  }, [index]);

  return (
    <Box ref={ref}>
      <span className={clsx("btn")}>
        <button onClick={() => setmuted(!playerMuted)}>muted</button>
        <button onClick={() => setPlayer({ ...player, playing: !playing })}>
          muted
        </button>
      </span>
      <Dim className={!playing ? "dim" : ""} />
      <ReactPlayer
        ref={videoRef}
        url={playerUrl}
        pip={pip}
        playing={playing}
        controls={controls}
        light={light}
        loop={loop}
        playbackRate={playbackRate}
        volume={volume}
        muted={playerMuted}
      />
    </Box>
  );
};
