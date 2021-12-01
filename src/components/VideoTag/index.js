import './styles.css';

const VideoTag = ({ type = "text", borderRadius = 10, disabled, some }) => {
  return (
    <div className="video-tag" style={{ borderRadius: `${borderRadius}px`, opacity: disabled ? 0.5 : 1 }}>
      {type} {some?.a}
    </div>
  );
}

export default VideoTag;
