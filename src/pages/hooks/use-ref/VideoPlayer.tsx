import { Link } from 'react-router-dom';
import { VideoPlayerExample } from './components/VideoPlayerExample';

const VideoPlayer = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks" className="text-muted-foreground hover:text-foreground transition-colors">
            Hooks
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/hooks/use-ref" className="text-muted-foreground hover:text-foreground transition-colors">
            useRef
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">Video Player</span>
        </div>
        
        <div>
          <h1 className="text-4xl font-bold mb-2">Video Player Controls</h1>
          <p className="text-xl text-muted-foreground">
            Control media playback using DOM references
          </p>
        </div>
      </div>

      <VideoPlayerExample />
    </div>
  );
};

export default VideoPlayer;
