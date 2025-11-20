import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Play, CheckCircle2 } from 'lucide-react';

const MediaPlayerPractice = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle" className="hover:text-foreground">useImperativeHandle</Link>
        <span>/</span>
        <Link to="/hooks/use-imperative-handle/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Media Player</span>
      </nav>

      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Play className="h-12 w-12 text-primary" />
          <div>
            <h1 className="text-4xl font-bold">Media Player Control</h1>
            <div className="flex items-center gap-2 mt-2">
              <Badge variant="destructive">Advanced</Badge>
              <Badge variant="outline">useImperativeHandle</Badge>
            </div>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">
          Build a custom media player with imperative controls for advanced features
        </p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>🎯 Challenge</CardTitle>
            <CardDescription>Create a video/audio player with comprehensive imperative controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Build a fully-featured media player component that exposes methods for play, pause, seek, volume, playback speed, and fullscreen. Create a custom control panel that uses these methods.</p>
            
            <div className="bg-muted p-4 rounded-lg">
              <p className="font-semibold mb-2">Your task:</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Create MediaPlayer component with forwardRef</li>
                <li>Expose methods: play(), pause(), togglePlayPause(), seek(time), setVolume(level), setPlaybackRate(rate), toggleFullscreen(), getCurrentTime(), getDuration()</li>
                <li>Display video/audio element with custom controls</li>
                <li>Progress bar with seek functionality</li>
                <li>Volume slider</li>
                <li>Playback speed selector (0.5x, 1x, 1.5x, 2x)</li>
                <li>Time display (current / duration)</li>
                <li>Keyboard shortcuts (Space: play/pause, F: fullscreen, Arrow keys: seek)</li>
                <li>Picture-in-picture support</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>📋 Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>MediaPlayer accepts src prop (video/audio URL)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>All listed methods exposed via useImperativeHandle</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Custom control bar overlaying the video</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Progress bar shows buffered and played portions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Click/drag on progress bar to seek</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Volume slider (0-100%)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Playback speed dropdown</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Fullscreen toggle button</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Picture-in-picture button</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
                <span>Keyboard shortcuts functional</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>🎨 Wireframe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-border rounded-lg p-6 space-y-4">
              <div className="bg-muted aspect-video rounded flex items-center justify-center text-6xl">
                ▶️
              </div>
              
              <div className="border rounded p-3 space-y-3">
                <div>
                  <div className="h-2 bg-muted rounded-full relative">
                    <div className="h-2 bg-primary rounded-full w-1/3" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <button className="w-8 h-8 flex items-center justify-center border rounded">
                      [▶]
                    </button>
                    <span className="text-sm">00:30 / 01:30</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Speed: 1x</span>
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="h-2 bg-primary rounded-full w-3/4" />
                    </div>
                    <button className="w-8 h-8 flex items-center justify-center border rounded">
                      [⛶]
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="text-xs text-muted-foreground">
                Keyboard: Space (play/pause), F (fullscreen), ← → (seek)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>💡 Hints</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I control the media element?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Use useRef to access the video/audio element. Call native methods: mediaRef.current.play(), mediaRef.current.pause(). Set properties: mediaRef.current.currentTime, mediaRef.current.volume, mediaRef.current.playbackRate.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I implement the progress bar?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Listen to 'timeupdate' event to update progress. Calculate: (currentTime / duration) * 100. For seeking, calculate clicked position as percentage of bar width, then set currentTime = (percentage / 100) * duration.
              </p>
            </details>
            <details className="group">
              <summary className="cursor-pointer font-medium hover:text-primary">
                How do I implement keyboard shortcuts?
              </summary>
              <p className="mt-2 text-sm text-muted-foreground pl-4">
                Add keydown event listener in useEffect. Check event.key: 'Space' for play/pause, 'f' for fullscreen, 'ArrowLeft'/'ArrowRight' for seek ±10s. Remember to preventDefault() to avoid page scroll.
              </p>
            </details>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>✅ Testing Checklist</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Play/pause controls work</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Progress bar seeks correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Volume control adjusts audio level</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Playback speed changes work</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Fullscreen toggle functional</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Picture-in-picture works</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Keyboard shortcuts respond correctly</span>
              </li>
              <li className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                <span className="text-sm">Time display updates accurately</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MediaPlayerPractice;
