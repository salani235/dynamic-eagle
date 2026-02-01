
export interface ServiceCategory {
  title: string;
  description: string;
  items: string[];
  icon: string;
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Training' | 'Events' | 'Logistics' | 'Hospitality';
  date: string;
  author: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Training' | 'Events' | 'Logistics' | 'Hospitality';
  image: string;
  description: string;
}

export enum ThemeColors {
  PRIMARY = '#EE3124', // Logo Red
  SECONDARY = '#F37021', // Logo Orange
  DARK = '#0F172A',
  LIGHT = '#F8FAFC'
}
