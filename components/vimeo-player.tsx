// components/VimeoPlayer.tsx
"use client";
import React, { useEffect, useRef } from "react";
import VimeoPlayer from "@vimeo/player";

interface Props {
  videoId: string;
  width?: number;
  height?: number;
}

const Player: React.FC<Props> = ({ videoId, width = 360, height = 640 }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      const options = {
        id: parseInt(videoId, 10),
        title: false,
        byline: false,
        portrait: false,
        autoplay: true,
        height: height,
        width: width,
      };
      const player = new VimeoPlayer(playerRef.current, options);

      return () => {
        player.destroy();
      };
    }
  }, [videoId, width, height]);

  return <div ref={playerRef} style={{ width: width, height: height }} />;
};

export default Player;
