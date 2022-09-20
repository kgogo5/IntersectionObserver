import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPlayer from "react-player";
import { useInView } from "react-intersection-observer";

const Box = styled.div`
  position: relative;
  margin: 30px auto;
  width: 30%;
  padding-top: 56.25%;
  background-color: #bef355;
  overflow: hidden;

  &:nth-child(2n) {
    background-color: #32eea0;
  }

  & > div {
    width: 100% !important;
    height: 100% !important;
  }

  & > div > div {
    width: 100% !important;
    height: 100% !important;
  }

  & video {
    position: absolute;
    height: auto !important;
    width: 100% !important;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const list = [
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
];

function App() {
  return (
    <>
      {list.map((item, index) => (
        <Player key={index} url={item} index={index} />
      ))}
    </>
  );
}

export default App;

const Player = ({ url, index }: { url: string; index: number }) => {
  const [play, setPlay] = useState(false);
  console.log(`video${index + 1} play : `, play);

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
      <ReactPlayer playing={play} url={url} loop muted />
    </Box>
  );
};
