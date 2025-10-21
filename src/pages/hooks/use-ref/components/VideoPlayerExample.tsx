import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';

export const VideoPlayerExample = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const restart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const skipAhead = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Video Player Controls</h2>
        <div className="space-y-4">
          <div className="bg-muted rounded-lg overflow-hidden">
            <video
              ref={videoRef}
              className="w-full"
              onEnded={() => setIsPlaying(false)}
            >
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button onClick={togglePlay}>
              {isPlaying ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button onClick={restart} variant="secondary">
              <RotateCcw className="w-4 h-4 mr-2" />
              Restart
            </Button>
            <Button onClick={toggleMute} variant="outline">
              {isMuted ? <VolumeX className="w-4 h-4 mr-2" /> : <Volume2 className="w-4 h-4 mr-2" />}
              {isMuted ? 'Unmute' : 'Mute'}
            </Button>
            <Button onClick={() => skipAhead(-10)} variant="outline">
              -10s
            </Button>
            <Button onClick={() => skipAhead(10)} variant="outline">
              +10s
            </Button>
          </div>
        </div>
      </Card>

      <Card className="p-6 bg-muted/50">
        <h3 className="text-lg font-semibold mb-3">Code Example</h3>
        <pre className="bg-background p-4 rounded-lg overflow-x-auto text-sm">
          <code>{`const videoRef = useRef<HTMLVideoElement>(null);
const [isPlaying, setIsPlaying] = useState(false);

const togglePlay = () => {
  if (videoRef.current) {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }
};

const skipAhead = (seconds: number) => {
  if (videoRef.current) {
    videoRef.current.currentTime += seconds;
  }
};

return (
  <div>
    <video ref={videoRef}>
      <source src="video.mp4" type="video/mp4" />
    </video>
    <Button onClick={togglePlay}>
      {isPlaying ? 'Pause' : 'Play'}
    </Button>
  </div>
);`}</code>
        </pre>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-semibold mb-3">Key Concepts</h3>
        <ul className="space-y-2 text-muted-foreground">
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Control media elements using ref methods like <code className="px-2 py-1 bg-muted rounded">play()</code> and <code className="px-2 py-1 bg-muted rounded">pause()</code></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Access properties like <code className="px-2 py-1 bg-muted rounded">currentTime</code> and <code className="px-2 py-1 bg-muted rounded">muted</code></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Combine refs with state for UI updates</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Handle video events like <code className="px-2 py-1 bg-muted rounded">onEnded</code></span>
          </li>
        </ul>
      </Card>
    </div>
  );
};
