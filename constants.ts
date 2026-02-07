import { ProgramPhase, TeacherFeature, ParentFeature, TeamMember } from './types';
import { MessageSquare, Zap, Workflow, Palette, Smartphone, BookOpen, Briefcase, Gamepad2 } from 'lucide-react';

export const STUDENT_PHASES: ProgramPhase[] = [
  {
    id: 1,
    title: "Conversational AI & Smart Assistants",
    description: "Students learn to communicate with AI, ask questions effectively, compare answers, and understand simple AI-generated explanations.",
    icon: "MessageSquare"
  },
  {
    id: 2,
    title: "Productivity & Creativity Boosting",
    description: "Students learn summarizing, planning studies, making posters, presentations, videos, and turning text into speech.",
    icon: "Zap"
  },
  {
    id: 3,
    title: "Automation & Digital Tasks",
    description: "Students learn to automate workflows, generate presentations, translate content, and organize assignments efficiently.",
    icon: "Workflow"
  },
  {
    id: 4,
    title: "Multimedia & Creative Expression",
    description: "Students learn image generation, animation creation, structured writing, and assisted video editing.",
    icon: "Palette"
  },
  {
    id: 5,
    title: "Web, Apps & Future Tech Builders",
    description: "Students learn instant website creation, app building without coding, UI/UX prototyping, and research organization.",
    icon: "Smartphone"
  },
  {
    id: 6,
    title: "Smarter Studying With AI",
    description: "Students use AI to solve academic problems, extract answers from textbooks, research, and create practice lessons.",
    icon: "BookOpen"
  },
  {
    id: 7,
    title: "Career Exploration & Life Skills",
    description: "Students explore future careers, practice communication, improve speaking skills, and learn effective prompting.",
    icon: "Briefcase"
  },
  {
    id: 8,
    title: "Fun, Games & AI Creativity",
    description: "Students use AI for storytelling, music creation, interactive characters, and playful educational games.",
    icon: "Gamepad2"
  }
];

export const TEACHER_FEATURES: TeacherFeature[] = [
  { title: "AI-Assisted Planning", description: "Generate lesson plans and curricula in seconds." },
  { title: "Rapid Material Creation", description: "Create worksheets, quizzes, and slides instantly." },
  { title: "Interactive Classes", description: "Engage students with AI-driven simulations and debates." },
  { title: "Automated Feedback", description: "Grade assignments and provide personalized feedback automatically." },
  { title: "Simplified Complexity", description: "Break down complex topics into digestible explanations." },
];

export const PARENT_FEATURES: ParentFeature[] = [
  { title: "Algorithm Reset", description: "Step-by-step guide to fixing YouTube recommendations." },
  { title: "Healthy Digital Habits", description: "Strategies to improve children's screen time quality." },
  { title: "Academic Support", description: "Using AI tools for homework help and language learning." },
  { title: "Safety First", description: "Understanding how to use AI tools safely and effectively." },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Mohammed Sabeeh",
    role: "Founder & CEO",
    description: "A computer engineer, entrepreneur, and AI trainer dedicated to empowering the next generation with future-ready learning",
    image: "https://picsum.photos/400/500?random=1001"
  },
  {
    id: 2,
    name: "Marcus Thorne",
    role: "Head of AI Curriculum",
    description: "EdTech veteran dedicated to making complex machine learning concepts accessible to kids.",
    image: "https://picsum.photos/400/500?random=1002"
  },
  {
    id: 3,
    name: "Sarah Lin",
    role: "Lead Experience Designer",
    description: "Creating safe, engaging, and golden-ratio optimized digital environments for students.",
    image: "https://picsum.photos/400/500?random=1003"
  },
  {
    id: 4,
    name: "David Chen",
    role: "Chief Technology Officer",
    description: "Architecting the secure, privacy-first infrastructure that powers XenoraLearning.",
    image: "https://picsum.photos/400/500?random=1004"
  },
  {
    id: 5,
    name: "Olivia Ross",
    role: "Parent Education Specialist",
    description: "Helping families navigate the digital age with practical algorithm-reset strategies.",
    image: "https://picsum.photos/400/500?random=1005"
  },
  {
    id: 6,
    name: "James Alcott",
    role: "Community Director",
    description: "Building the global network of XenoraLearning certified teachers and student workshops.",
    image: "https://picsum.photos/400/500?random=1006"
  }
];