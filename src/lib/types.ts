export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export type HeroImage = {
  imageUrl: string;
  imageHint: string;
  description: string;
}

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  company: string;
};

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
};

export type Service = {
  icon: React.ReactElement;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
