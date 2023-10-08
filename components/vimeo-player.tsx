"use client";
import React, { useEffect, useRef } from "react";
import VimeoPlayer from "@vimeo/player";

const VERTICAL_WIDTH = 360;
const VERTICAL_HEIGHT = 640;

interface Props {
  vertVideoId: string;
}

const Player: React.FC<Props> = ({ vertVideoId }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (playerRef.current) {
      const options = {
        id: parseInt(vertVideoId, 10),
        title: false,
        byline: false,
        portrait: false,
        autoplay: true,
        height: VERTICAL_HEIGHT,
        width: VERTICAL_WIDTH,
      };
      const player = new VimeoPlayer(playerRef.current, options);

      return () => {
        player.destroy();
      };
    }
  }, [vertVideoId]);

  return (
    <div
      ref={playerRef}
      style={{ width: VERTICAL_WIDTH, height: VERTICAL_HEIGHT }}
    />
  );
};

export default Player;
