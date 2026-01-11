/**
 * Content Loader
 * 
 * Loads and types JSON content files.
 * This provides a type-safe interface to content stored in JSON files.
 */

// Import JSON content files
import personalData from '@/content/personal.json'
import sectionsData from '@/content/sections.json'
import linksData from '@/content/links.json'

// ============================================
// Type Definitions
// ============================================

export interface PersonalInfo {
    name: string
    greeting: string
    role: string
    tagline: string
    company: string
    location: string
    yearsOfExperience: string
    heroBio: string
    bio: string
    email: string
    linkedIn: string
    github: string
    medium: string
}

export interface SectionMeta {
    title: string
    subtitle: string
}

export interface Sections {
    career: SectionMeta
    stats: SectionMeta
    testimonials: SectionMeta
}

export interface PortfolioLink {
    name: string
    url: string
    icon: 'github' | 'medium'
    description: string
}

export interface ContactLink {
    name: string
    url?: string
    email?: string
    icon: 'linkedin' | 'email'
    description: string
    type: 'link' | 'mailto'
}

// ============================================
// Typed Exports
// ============================================

/** Personal information and social links */
export const personal: PersonalInfo = personalData

/** Section titles and subtitles */
export const sections: Sections = sectionsData

// ============================================
// Derived Data (combines JSON metadata with URLs)
// ============================================

/** Portfolio links for "View My Work" modal */
export const portfolioLinks: PortfolioLink[] = linksData.portfolio.map(link => ({
    name: link.name,
    url: personal[link.key as keyof PersonalInfo] as string,
    icon: link.icon as 'github' | 'medium',
    description: link.description
}))

/** Contact links for "Let's Connect" modal */
export const contactLinks: ContactLink[] = linksData.contact.map(link => ({
    name: link.name,
    url: link.type === 'link' ? personal[link.key as keyof PersonalInfo] as string : undefined,
    email: link.type === 'mailto' ? personal[link.key as keyof PersonalInfo] as string : undefined,
    icon: link.icon as 'linkedin' | 'email',
    description: link.description,
    type: link.type as 'link' | 'mailto'
}))
