import { useEffect, useRef } from 'react';
import { IoMdClose } from "react-icons/io";

const CallModal = ({ isVideo, onClose, stream, peerStream, username }) => {
  const localVideoRef = useRef();
  const remoteVideoRef = useRef();

  useEffect(() => {
    if (stream && localVideoRef.current) {
      localVideoRef.current.srcObject = stream;
    }
    if (peerStream && remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = peerStream;
    }
  }, [stream, peerStream]);

  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
      <div className="relative bg-[#1E293B] rounded-2xl p-4 max-w-2xl w-full mx-4">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full hover:bg-white/10"
        >
          <IoMdClose size={24} />
        </button>

        <div className="text-center mb-4">
          <h3 className="text-white text-lg font-semibold">
            {isVideo ? 'Video' : 'Voice'} Call with {username}
          </h3>
        </div>

        {isVideo ? (
          <div className="relative aspect-video bg-black/50 rounded-xl overflow-hidden">
            <video
              ref={remoteVideoRef}
              autoPlay
              playsInline
              className="w-full h-full object-cover"
            />
            <video
              ref={localVideoRef}
              autoPlay
              playsInline
              muted
              className="absolute bottom-4 right-4 w-32 aspect-video object-cover rounded-lg border border-white/10"
            />
          </div>
        ) : (
          <div className="h-64 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-violet-500/20 flex items-center justify-center">
              <img
                src={selectedConversation?.profilePic}
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CallModal; 