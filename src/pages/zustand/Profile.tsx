import { useProfileStore } from '@/stores/profileStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { User, Mail, FileText, Bell } from 'lucide-react';

const Profile = () => {
  const { profile, updateProfile, resetProfile } = useProfileStore();

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-4xl font-bold mb-2">User Profile Example</h1>
        <p className="text-muted-foreground">
          Complex state management with persistence using Zustand middleware.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Edit Profile</CardTitle>
            <CardDescription>
              Changes are automatically saved to localStorage
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">
                <User className="inline h-4 w-4 mr-2" />
                Name
              </Label>
              <Input
                id="name"
                value={profile.name}
                onChange={(e) => updateProfile({ name: e.target.value })}
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">
                <Mail className="inline h-4 w-4 mr-2" />
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={profile.email}
                onChange={(e) => updateProfile({ email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">
                <FileText className="inline h-4 w-4 mr-2" />
                Bio
              </Label>
              <Textarea
                id="bio"
                value={profile.bio}
                onChange={(e) => updateProfile({ bio: e.target.value })}
                placeholder="Tell us about yourself..."
                rows={4}
              />
            </div>

            <div className="flex items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="notifications">
                  <Bell className="inline h-4 w-4 mr-2" />
                  Notifications
                </Label>
                <p className="text-sm text-muted-foreground">
                  Receive email notifications
                </p>
              </div>
              <Switch
                id="notifications"
                checked={profile.notifications}
                onCheckedChange={(checked) => updateProfile({ notifications: checked })}
              />
            </div>

            <Button onClick={resetProfile} variant="outline" className="w-full">
              Reset to Default
            </Button>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Preview</CardTitle>
              <CardDescription>Current state of your profile</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center pb-4 border-b">
                <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                  <User className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  {profile.name || 'No name set'}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {profile.email || 'No email set'}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium mb-1">Bio</p>
                  <p className="text-sm text-muted-foreground">
                    {profile.bio || 'No bio set'}
                  </p>
                </div>

                <div>
                  <p className="text-sm font-medium mb-1">Notifications</p>
                  <Badge variant={profile.notifications ? 'default' : 'secondary'}>
                    {profile.notifications ? 'Enabled' : 'Disabled'}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Persistence Demo</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This store uses the <code className="bg-muted px-1 rounded">persist</code> middleware.
                Try refreshing the page - your data will still be here!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
