import React from "react";

export default function VideoComponent({ src }) {
  return (
    <iframe
      src={src}
      className="vidos"
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  );
}
