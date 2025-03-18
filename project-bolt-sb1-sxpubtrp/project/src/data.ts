import { Project, Experience, Certification } from './types';

export const projects: Project[] = [
  {
    title: "Smart Surveillance System",
    description: "Implemented real-time object detection on edge devices using AI.",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80",
    technologies: ["Python", "TensorFlow", "OpenCV", "Raspberry Pi"],
  },
  {
    title: "AI-Powered Robotics",
    description: "Designed a robotic arm controlled via deep learning algorithms.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80",
    technologies: ["Python", "PyTorch", "ROS", "Arduino"],
  },
  {
    title: "Energy-Efficient AI Model",
    description: "Optimized neural networks for low-power hardware environments.",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
    technologies: ["TensorFlow Lite", "C++", "FPGA", "Python"],
  },
];

export const experiences: Experience[] = [
  {
    title: "AI Hardware Integration Lead",
    company: "TechCorp Solutions",
    period: "2022–Present",
    responsibilities: [
      "Developed AI-powered embedded solutions for edge computing",
      "Designed and deployed machine learning models on IoT devices",
      "Optimized algorithms for real-time data processing on hardware",
    ],
  },
  {
    title: "Embedded AI Developer",
    company: "Innovation Labs",
    period: "2020–2022",
    responsibilities: [
      "Led the development of a computer vision-based automation system",
      "Integrated AI models with microcontroller-based systems",
      "Improved system performance by 30% through hardware acceleration",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Deep Learning Specialization",
    institution: "DeepLearn Institute",
    year: "2023",
  },
  {
    name: "Embedded AI Systems",
    institution: "Tech Academy",
    year: "2022",
  },
  {
    name: "Python for Data Science",
    institution: "DataScience Pro",
    year: "2021",
  },
];

export const skills = {
  programming: ["Python", "C++", "JavaScript"],
  ai_ml: ["TensorFlow", "PyTorch", "OpenCV"],
  hardware: ["Raspberry Pi", "Arduino", "FPGA"],
  software: ["NumPy", "SciPy", "Pandas", "MATLAB"],
  tools: ["Docker", "Git", "Linux", "Jupyter Notebook"],
};