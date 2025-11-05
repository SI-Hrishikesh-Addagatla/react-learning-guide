import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Video, CheckCircle2 } from 'lucide-react';

const VideoPlayerPractice = () => {
  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto space-y-8">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="hover:text-foreground">Home</Link>
        <span>/</span>
        <Link to="/hooks" className="hover:text-foreground">Hooks</Link>
        <span>/</span>
        <Link to="/hooks/use-ref" className="hover:text-foreground">useRef</Link>
        <span>/</span>
        <Link to="/hooks/use-ref/practice" className="hover:text-foreground">Practice</Link>
        <span>/</span>
        <span className="text-foreground">Video Player</span>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-4">
          <Video className="h-10 w-10 text-primary" />
          <h1 className="text-4xl font-bold">Custom Video Player</h1>
          <Badge variant="destructive">Advanced</Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          Build a fully-featured video player with custom controls using refs.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>🎯 Challenge</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Create a custom video player with full playback controls. Use <code className="px-2 py-1 bg-muted rounded">useRef</code> to 
            access the video element and control playback, volume, and seeking.
          </p>
          <p>
            Track the current playback state and time, and provide a custom UI for all controls.
          </p>
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
              <span>Use <code className="px-2 py-1 bg-muted rounded">useRef</code> to access video element</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Play/Pause button with state tracking</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Volume control (mute/unmute + slider)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Progress bar showing current time</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Skip forward/backward buttons (±10 seconds)</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Display current time and duration</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
              <span>Playback speed control (0.5x, 1x, 1.5x, 2x)</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>🎨 Wireframe</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-4 space-y-4">
            <div className="aspect-video bg-muted rounded flex items-center justify-center text-muted-foreground">
              Video Element
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-muted rounded-full">
                <div className="h-full w-1/3 bg-primary rounded-full"></div>
              </div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>1:23</span>
                <span>4:56</span>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-between">
              <div className="flex gap-1">
                <div className="px-2 py-1 border rounded text-xs">[⏮ -10s]</div>
                <div className="px-2 py-1 border rounded text-xs">[▶ Play]</div>
                <div className="px-2 py-1 border rounded text-xs">[⏭ +10s]</div>
              </div>
              <div className="flex gap-1">
                <div className="px-2 py-1 border rounded text-xs">[🔊]</div>
                <div className="px-2 py-1 border rounded text-xs">[1x]</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>💡 Hints</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">videoRef.current.play()</code> and <code className="px-2 py-1 bg-muted rounded">.pause()</code></p>
          <p className="text-sm">• Track time with <code className="px-2 py-1 bg-muted rounded">timeupdate</code> event listener</p>
          <p className="text-sm">• Volume: <code className="px-2 py-1 bg-muted rounded">videoRef.current.volume</code> (0 to 1)</p>
          <p className="text-sm">• Speed: <code className="px-2 py-1 bg-muted rounded">videoRef.current.playbackRate</code></p>
          <p className="text-sm">• Seeking: <code className="px-2 py-1 bg-muted rounded">videoRef.current.currentTime += 10</code></p>
          <p className="text-sm">• Use <code className="px-2 py-1 bg-muted rounded">useEffect</code> to add/remove event listeners</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>✅ Testing Checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Play/Pause toggles correctly</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Progress bar updates in real-time</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Skip buttons move video forward/backward 10 seconds</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Volume controls work (mute and slider)</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Playback speed changes work</span>
            </li>
            <li className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <span>Time display shows current and total duration</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPlayerPractice;
