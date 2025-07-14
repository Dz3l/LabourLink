import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HardHat, Building, Users, MapPin, Star, Search } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <HardHat className="h-20 w-20 text-primary mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6">
            Connect Construction Workers with Opportunities
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Labourlink bridges the gap between skilled construction workers and contractors in developing countries. 
            Find work faster, hire better, build stronger communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workers">
              <Button size="lg" className="w-full sm:w-auto">
                <HardHat className="mr-2 h-5 w-5" />
                I'm a Worker
              </Button>
            </Link>
            <Link to="/contractors">
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                <Building className="mr-2 h-5 w-5" />
                I'm a Contractor
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Labourlink Works</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-primary mb-4" />
                <CardTitle>National ID Authentication</CardTitle>
                <CardDescription>
                  Secure login using national identification for verified, trustworthy profiles.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Smart Job Matching</CardTitle>
                <CardDescription>
                  AI-powered matching connects workers with projects based on skills, location, and experience.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <MapPin className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Location-Based Search</CardTitle>
                <CardDescription>
                  Find opportunities in your area or discover workers nearby for your projects.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Star className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Skill Profiles</CardTitle>
                <CardDescription>
                  Showcase your construction skills and build a reputation through verified work history.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Building className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Project Management</CardTitle>
                <CardDescription>
                  Contractors can post detailed project requirements and manage their workforce efficiently.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <HardHat className="h-10 w-10 text-primary mb-4" />
                <CardTitle>Mobile Accessible</CardTitle>
                <CardDescription>
                  Access opportunities from any device - smartphone, tablet, or computer.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of workers and contractors already using Labourlink
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/workers">
              <Button size="lg">Find Work Today</Button>
            </Link>
            <Link to="/contractors">
              <Button size="lg" variant="outline">Hire Workers</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
