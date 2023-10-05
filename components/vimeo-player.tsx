"use client";
import React, { useEffect, useRef, useState } from "react";
import VimeoPlayer from "@vimeo/player";
import useWindowSize from "@/hooks/useWindowSize"; // Assume you have a hook to get window size

const VERTICAL_WIDTH = 360;
const VERTICAL_HEIGHT = 640;
const HORIZONTAL_WIDTH = 940;
const HORIZONTAL_HEIGHT = 550;

interface Props {
  vertVideoId: string;
  horizVideoId?: string;
}

const Player: React.FC<Props> = ({ vertVideoId, horizVideoId }) => {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const { width: windowWidth } = useWindowSize(); // Use the hook to get window size
  const [currentVideoId, setCurrentVideoId] = useState(vertVideoId); // Initialize with vertVideoId
  const [currentWidth, setCurrentWidth] = useState(VERTICAL_WIDTH);
  const [currentHeight, setCurrentHeight] = useState(VERTICAL_HEIGHT);

  useEffect(() => {
    if (horizVideoId && windowWidth != null && windowWidth >= 1024) {
      // When on 'lg' screens or larger and horizVideoId is provided
      setCurrentVideoId(horizVideoId);
      setCurrentWidth(HORIZONTAL_WIDTH); // Set width for horizontal video
      setCurrentHeight(HORIZONTAL_HEIGHT); // Set height for horizontal video
    } else {
      setCurrentVideoId(vertVideoId);
      setCurrentWidth(VERTICAL_WIDTH); // Set width for vertical video
      setCurrentHeight(VERTICAL_HEIGHT); // Set height for vertical video
    }
  }, [vertVideoId, horizVideoId, windowWidth]);

  useEffect(() => {
    if (playerRef.current) {
      const options = {
        id: parseInt(currentVideoId, 10),
        title: false,
        byline: false,
        portrait: false,
        autoplay: true,
        height: currentHeight,
        width: currentWidth,
      };
      const player = new VimeoPlayer(playerRef.current, options);

      return () => {
        player.destroy();
      };
    }
  }, [currentVideoId, currentWidth, currentHeight]);

  return (
    <div
      ref={playerRef}
      style={{ width: currentWidth, height: currentHeight }}
    />
  );
};

export default Player;
