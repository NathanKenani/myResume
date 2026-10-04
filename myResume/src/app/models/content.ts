export interface ResumeContact {
  address: string[];
  phone: string;
  email: string;
}

export interface ResumeProfile {
  name: string;
  title: string;
  summary: string;
  introduction: string;
  contact: ResumeContact;
}

export interface ResumeExperience {
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
}

export interface ResumeEducation {
  institution: string;
  location: string;
  degree: string;
  startDate: string;
  endDate: string;
}

export interface ResumeLanguage {
  name: string;
  proficiency: string;
}

export interface ResumeContent {
  profile: ResumeProfile;
  experience: ResumeExperience[];
  education: ResumeEducation[];
  skills: string[];
  languages: ResumeLanguage[];
}
