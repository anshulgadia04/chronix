const VideoPage = () => {
    return (
      <div className="video-section" style={{
        height: "100vh",
        background: "blue",
        color: "white",
        position: "relative",
        top: "100vh", // key: starts offscreen
        zIndex: 10
      }}>
        <h2 style={{ padding: "3rem" }}>Video Section</h2>
      </div>
    );
  };
  
  export default VideoPage;
  