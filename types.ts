export interface ProgramPhase {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface FeaturePoint {
  title: string;
  description: string;
}

export interface TeacherFeature {
  title: string;
  description: string;
}

export interface ParentFeature {
  title: string;
  description: string;
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  image: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
}