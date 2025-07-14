import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Search, User, Star } from "lucide-react";

const Workers = () => {
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
          <Button size="lg" className="mr-4">Login with National ID</Button>
          <Button size="lg" variant="outline">Create Account</Button>
        </div>
      </div>
    </div>
  );
};

export default Workers;