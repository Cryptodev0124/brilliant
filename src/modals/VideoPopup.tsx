import React from "react";
import ModalVideo from "react-modal-video";

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "bgMEvrd2E",
}: any) => {
  return (
    <>
      {React.createElement(
        ModalVideo as any,
        {
          channel: "youtube",
          isOpen: isVideoOpen,
          videoId: videoId,
          onClose: () => setIsVideoOpen(false),
        }
      )}
    </>
  );
};

export default VideoPopup;
