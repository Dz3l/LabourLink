import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { workerProfile, Job } from "@/data/mockJobs";
import { MapPin, Clock, Users, Star, Phone, Award, Calendar } from "lucide-react";

interface WorkerDashboardProps {
  nationalId: string;
}

const WorkerDashboard = ({ nationalId }: WorkerDashboardProps) => {
  const [appliedJobs, setAppliedJobs] = useState<string[]>([]);
  const [recommendedJobs, setRecommendedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await fetch('/api/recommend', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            skills: workerProfile.skills,
            location: workerProfile.location,
          }),
        });
        const data = await response.json();
        setRecommendedJobs(data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  const handleApplyJob = (jobId: string) => {
    setAppliedJobs(prev => [...prev, jobId]);
  };

  const getUrgencyColor = (urgency: Job["urgency"]) => {
    switch (urgency) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "outline";
      default: return "outline";
    }
  };

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Worker Profile Header */}
      <Card className="mb-6">
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="text-lg font-bold bg-primary text-primary-foreground">
                  {workerProfile.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">{workerProfile.name}</h1>
                <p className="text-muted-foreground">National ID: {nationalId}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="font-semibold">{workerProfile.rating}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 text-primary mr-1" />
                    <span>{workerProfile.completedJobs} jobs completed</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-muted-foreground mr-1" />
                    <span>{workerProfile.phone}</span>
                  </div>
                </div>
              </div>
            </div>
            <Button variant="outline">Edit Profile</Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2">Location</h3>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                <span>{workerProfile.location}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Experience</h3>
              <span>{workerProfile.experience}</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Skills</h3>
              <div className="flex flex-wrap gap-1">
                {workerProfile.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommended Jobs */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Recommended Jobs for You</h2>
        <div className="grid gap-4">
          {recommendedJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {job.title}
                      <Badge variant={getUrgencyColor(job.urgency)}>
                        {job.urgency} priority
                      </Badge>
                    </CardTitle>
                    <CardDescription className="mt-1">
                      {job.company} • {job.location}, {job.county}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-primary">{job.payRate}</div>
                    <div className="text-sm text-muted-foreground">{job.duration}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{job.workersNeeded} workers needed</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">Posted {job.postedDate}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">{job.duration} project</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-sm mb-2">Required Skills:</h4>
                  <div className="flex flex-wrap gap-1">
                    {job.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span className="text-sm">{job.location}, {job.county}</span>
                  </div>
                  
                  {appliedJobs.includes(job.id) ? (
                    <Button disabled>Applied</Button>
                  ) : (
                    <Button onClick={() => handleApplyJob(job.id)}>
                      Apply Now
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkerDashboard;