export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Certification {
  name: string;
  institution: string;
  year: string;
}