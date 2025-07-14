export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  county: string;
  payRate: string;
  duration: string;
  workersNeeded: number;
  skills: string[];
  description: string;
  postedDate: string;
  urgency: "low" | "medium" | "high";
}

export const mockJobs: Job[] = [
  {
    id: "1",
    title: "Construction Worker - Residential Building",
    company: "Nairobi Builders Ltd",
    location: "Westlands, Nairobi",
    county: "Nairobi",
    payRate: "KES 800/day",
    duration: "3 months",
    workersNeeded: 15,
    skills: ["Masonry", "Concrete Work", "General Construction"],
    description: "Building a 10-story residential complex. Experience in high-rise construction preferred.",
    postedDate: "2024-01-10",
    urgency: "high"
  },
  {
    id: "2",
    title: "Road Construction Crew",
    company: "Kenya Infrastructure Corp",
    location: "Machakos Town",
    county: "Machakos",
    payRate: "KES 1200/day",
    duration: "6 months",
    workersNeeded: 25,
    skills: ["Road Work", "Heavy Machinery", "Excavation"],
    description: "Major highway expansion project. Must be available for outdoor work in all weather conditions.",
    postedDate: "2024-01-12",
    urgency: "medium"
  },
  {
    id: "3",
    title: "Plumbing Assistant",
    company: "Mombasa Water Works",
    location: "Nyali, Mombasa",
    county: "Mombasa",
    payRate: "KES 900/day",
    duration: "2 months",
    workersNeeded: 8,
    skills: ["Plumbing", "Pipe Fitting", "Water Systems"],
    description: "Installing water systems in new residential development. Experience with modern plumbing systems required.",
    postedDate: "2024-01-08",
    urgency: "high"
  },
  {
    id: "4",
    title: "Electrical Installation Team",
    company: "Eldoret Power Solutions",
    location: "Eldoret Central",
    county: "Uasin Gishu",
    payRate: "KES 1500/day",
    duration: "4 months",
    workersNeeded: 12,
    skills: ["Electrical Work", "Wiring", "Safety Protocols"],
    description: "Commercial building electrical installation. Must have basic electrical knowledge and safety certification.",
    postedDate: "2024-01-11",
    urgency: "medium"
  },
  {
    id: "5",
    title: "Roofing Specialist",
    company: "Kisumu Construction Co",
    location: "Kisumu Central",
    county: "Kisumu",
    payRate: "KES 1000/day",
    duration: "1 month",
    workersNeeded: 6,
    skills: ["Roofing", "Sheet Metal", "Welding"],
    description: "Installing metal roofing on warehouse complex. Experience with industrial roofing preferred.",
    postedDate: "2024-01-09",
    urgency: "low"
  },
  {
    id: "6",
    title: "Bridge Construction Worker",
    company: "Nakuru Engineering",
    location: "Nakuru-Naivasha Road",
    county: "Nakuru",
    payRate: "KES 1100/day",
    duration: "8 months",
    workersNeeded: 20,
    skills: ["Steel Work", "Concrete", "Heavy Construction"],
    description: "Major bridge construction project over the Rift Valley. High-altitude work experience required.",
    postedDate: "2024-01-07",
    urgency: "high"
  },
  {
    id: "7",
    title: "Hospital Construction Team",
    company: "Meru Medical Builders",
    location: "Meru Town",
    county: "Meru",
    payRate: "KES 950/day",
    duration: "12 months",
    workersNeeded: 30,
    skills: ["Medical Facility Construction", "Specialized Systems", "Clean Room Work"],
    description: "Building a modern hospital facility. Must follow strict health and safety protocols.",
    postedDate: "2024-01-13",
    urgency: "medium"
  },
  {
    id: "8",
    title: "School Building Project",
    company: "Thika Educational Builders",
    location: "Thika Municipality",
    county: "Kiambu",
    payRate: "KES 850/day",
    duration: "5 months",
    workersNeeded: 18,
    skills: ["General Construction", "Painting", "Finishing Work"],
    description: "Constructing classrooms and administration block for primary school. Community-focused project.",
    postedDate: "2024-01-06",
    urgency: "low"
  }
];

export const workerProfile = {
  nationalId: "12345678",
  name: "John Mwangi",
  skills: ["Masonry", "Concrete Work", "General Construction", "Painting"],
  experience: "5 years",
  rating: 4.7,
  completedJobs: 23,
  location: "Nairobi",
  phone: "+254 712 345 678"
};