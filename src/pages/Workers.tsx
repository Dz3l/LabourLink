import { useState } from "react";
import Navigation from "@/components/Navigation";
import NationalIdLogin from "@/components/NationalIdLogin";
import WorkerDashboard from "@/components/WorkerDashboard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Search, User, Star } from "lucide-react";

const Workers = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (nationalId: string) => {
    setLoggedInUser(nationalId);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  if (loggedInUser) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Worker Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <WorkerDashboard nationalId={loggedInUser} />
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <HardHat className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Worker Portal</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find construction jobs quickly and easily. Create your profile and get hired by verified contractors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <User className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Create Profile</CardTitle>
              <CardDescription>
                Use your National ID to create a verified profile showcasing your skills and experience.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Search className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Find Jobs</CardTitle>
              <CardDescription>
                Browse available construction projects in your area and apply with one click.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Browse Jobs</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Build Reputation</CardTitle>
              <CardDescription>
                Complete projects, earn ratings, and build a strong reputation in the construction industry.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">Learn More</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Working?</h2>
          <Button size="lg" className="mr-4" onClick={() => setIsLoginOpen(true)}>
            Login with National ID
          </Button>
          <Button size="lg" variant="outline">Create Account</Button>
        </div>
      </div>

      <NationalIdLogin 
        open={isLoginOpen}
        onOpenChange={setIsLoginOpen}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default Workers;