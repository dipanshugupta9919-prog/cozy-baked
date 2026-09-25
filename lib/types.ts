export interface CakeCategory {
  id: string;
  name: string;
  tagline: string;
  description: string;
  idealFor: string[];
  imageSrc: string;
  badge?: string;
  flavorNotes: string[];
  sizes: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  description: string;
  aspect: 'portrait' | 'landscape' | 'square';
  imageSrc: string;
  details: string;
}

export interface TreatItem {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  serves?: string;
  imageSrc?: string;
}
