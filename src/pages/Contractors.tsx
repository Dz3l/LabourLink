import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Users, MapPin, DollarSign } from "lucide-react";

const Contractors = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <Building className="h-16 w-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Contractor Dashboard</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find skilled workers for your construction projects. Post jobs and hire verified professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Post Projects</CardTitle>
              <CardDescription>
                List your construction projects with details about manpower needed, skills required, and timeline.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Post a Job</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MapPin className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Find Workers</CardTitle>
              <CardDescription>
                Search for qualified workers in your area based on skills, experience, and availability.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full">Search Workers</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <DollarSign className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Manage Projects</CardTitle>
              <CardDescription>
                Track project progress, manage payments, and rate workers for future reference.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" className="w-full">View Dashboard</Button>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Hire?</h2>
          <Button size="lg" className="mr-4">Contractor Login</Button>
          <Button size="lg" variant="outline">Register Company</Button>
        </div>
      </div>
    </div>
  );
};

export default Contractors;