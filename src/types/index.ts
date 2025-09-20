// Domain entities and interfaces following SOLID principles
import { LucideIcon } from 'lucide-react';

export interface PricingTier {
  id: string;
  name: string;
  level: 'Basic' | 'Business' | 'Entrepreneur';
  price: number;
  currency: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface HeroContent {
  title: string;
  subtitle: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  imageUrl: string;
}
