import React from "react";

export default function InstagramEmbed({ url }) {
  return (
    <iframe
      src={`${url}embed`}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      loading="lazy"
      style={{
        width: "100%",
        height: "480px",
        border: "none",
        borderRadius: "12px"
      }}
      title="Instagram post"
    />
  );
}
