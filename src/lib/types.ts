export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Icon name from lucide-react
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
}
