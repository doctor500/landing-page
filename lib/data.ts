/**
 * Content Data extracted from ideas/content-data-source.md
 * Last Updated: 2026-01-01
 */

export interface CareerPosition {
    company: string
    role: string
    location: string
    period: string
    duration: string
    description: string
    achievements: string[]
    technologies?: string[]
}

export interface Testimonial {
    name: string
    title: string
    company: string
    linkedIn: string
    quote: string
}

export interface Project {
    name: string
    description: string
    period: string
    impact: string[]
    technologies?: string[]
    link?: string
}

export interface Stat {
    value: string
    label: string
    sublabel: string
    icon: string
}

// Note: PortfolioLink, ContactLink, and personalInfo are now in lib/content.ts

// Career Timeline Data
export const careerTimeline: CareerPosition[] = [
    {
        company: 'Rakuten',
        role: 'Software Engineer - CI/CD Platform',
        location: 'Tokyo, Japan',
        period: 'Oct 2025 - Present',
        duration: '3 months',
        description: 'CI/CD platform development and automation',
        achievements: [],
        technologies: ['Jenkins', 'Kubernetes', 'GitHub Actions']
    },
    {
        company: 'GovTech Procurement',
        role: 'Infrastructure Engineer',
        location: 'Indonesia',
        period: 'Jan 2024 - Sep 2025',
        duration: '1 year 9 months',
        description: 'Infrastructure automation and cloud migration',
        achievements: [
            '600+ services migrated to government-certified cloud',
            '100% infrastructure-as-code adoption',
            'Zero security incidents',
            'SPSE Multi-tenancy & Optimization',
            'Teleport Access Control implementation'
        ],
        technologies: ['GCP', 'Kubernetes', 'Terraform', 'Cloud Run', 'Pomerium', 'Teleport']
    },
    {
        company: 'GoTo Group',
        role: 'DevOps Engineer',
        location: 'Jakarta, Indonesia',
        period: 'Nov 2021 - Dec 2023',
        duration: '2 years 2 months',
        description: 'DevOps automation and cost optimization',
        achievements: [
            '90%+ infrastructure cost reduction',
            '99.9% availability maintained',
            'GKE Spot Instances with multi-zone HA',
            'Vault Cluster implementation for Selly.id'
        ],
        technologies: ['GCP', 'GKE', 'Kubernetes', 'Vault', 'Terraform']
    },
    {
        company: 'Pegipegi',
        role: 'Release Engineer',
        location: 'Jakarta, Indonesia',
        period: 'Mar 2020 - Oct 2021',
        duration: '1 year 8 months',
        description: 'CI/CD pipeline standardization',
        achievements: [
            'Jenkins Shared Library implementation',
            'Standardized build/release processes',
            'Phabricator repository management',
            'Container-based CI/CD environment'
        ],
        technologies: ['Jenkins', 'Kubernetes', 'Groovy', 'Docker', 'Phabricator']
    },
    {
        company: 'BINUS IT Division',
        role: 'Data Center Staff',
        location: 'Jakarta, Indonesia',
        period: 'Mar 2018 - Feb 2020',
        duration: '2 years',
        description: 'Data center operations and automation',
        achievements: [
            'PDDikti Reporting Automation',
            'Data pipeline development',
            'One-click reporting process'
        ],
        technologies: ['Pentaho', 'PHP Laravel', 'MySQL']
    }
]

// Key Statistics
export const stats: Stat[] = [
    {
        value: '90%+',
        label: 'Cost Reduction',
        sublabel: 'Infrastructure Optimization',
        icon: 'chart'
    },
    {
        value: '99.9%',
        label: 'Uptime',
        sublabel: 'System Availability',
        icon: 'shield'
    },
    {
        value: '600+',
        label: 'Services',
        sublabel: 'Migrated to Cloud',
        icon: 'cloud'
    },
    {
        value: '6+',
        label: 'Years',
        sublabel: 'Infrastructure Experience',
        icon: 'rocket'
    },
    {
        value: '20+',
        label: 'Projects',
        sublabel: 'Infrastructure Deliveries',
        icon: 'projects'
    },
    {
        value: '29',
        label: 'Recommendations',
        sublabel: 'LinkedIn Testimonials',
        icon: 'quote'
    }
]

// Testimonials (Featured)
export const testimonials: Testimonial[] = [
    {
        name: 'Felix Jingga',
        title: 'Chief Technology Officer',
        company: 'GovTech Procurement',
        linkedIn: 'https://www.linkedin.com/in/felixjingga/',
        quote: `If I had to describe David in one word, it would be 'unflappable'. In every situation, from routine maintenance to high-stakes migrations, he brings a sense of calm, focus, and absolute reliability that is invaluable.

His technical craft is second to none. He was a cornerstone of the team that achieved a staggering 90%+ reduction in our monthly infrastructure costs and maintained 99.9% availability.

What I valued most, however, was his intellectual curiosity and trust. He would readily dive into complex, uncharted territory -- often prompted by what he'd jokingly call my 'magical insights' -- and consistently deliver outstanding results.

He is a true A-player, a dedicated professional, and a genuine pleasure to work with. Highly recommended.`
    },
    {
        name: 'Andreas Cendranata',
        title: 'Infrastructure and Security Lead',
        company: 'GovTech Procurement',
        linkedIn: 'https://www.linkedin.com/in/ace002/',
        quote: `It was a pleasure to manage David on our infrastructure team. His expertise in Google Cloud Platform was a tremendous asset, particularly when he led our complex migration from Cloud Run to GKE.

David didn't just stop there; he proactively optimized our costs by implementing GKE on Spot Instances, skillfully architecting a high-availability setup across multiple zones to ensure robust performance.

Beyond his strong technical skills, David is a disciplined and responsible team member. He communicates clearly, collaborates effectively, and is always willing to learn. He would be a valuable addition to any team.`
    }
]

// Technical Skills
export const technicalSkills = {
    cloudPlatforms: [
        { name: 'Google Cloud Platform', level: 95, category: 'Cloud' },
        { name: 'Amazon Web Services', level: 85, category: 'Cloud' }
    ],
    containerOrchestration: [
        { name: 'Kubernetes', level: 90, category: 'Container' },
        { name: 'Docker', level: 90, category: 'Container' }
    ],
    infrastructureAsCode: [
        { name: 'Terraform', level: 95, category: 'IaC' },
        { name: 'Ansible', level: 80, category: 'IaC' }
    ],
    cicd: [
        { name: 'Jenkins', level: 90, category: 'CI/CD' },
        { name: 'GitHub Actions', level: 85, category: 'CI/CD' },
        { name: 'GitLab CI', level: 80, category: 'CI/CD' }
    ],
    security: [
        { name: 'Vault', level: 85, category: 'Security' },
        { name: 'Teleport', level: 85, category: 'Security' },
        { name: 'Pomerium', level: 80, category: 'Security' }
    ]
}

// Featured Projects
export const featuredProjects: Project[] = [
    {
        name: 'SPSE Cloud Migration',
        description: '600+ services migrated from bare metal to government-certified cloud with enhanced security and reliability',
        period: 'May - Dec 2024',
        impact: [
            'Enhanced Security Posture',
            'Improved Reliability',
            '100% IaC Automation',
            'Zero Downtime Migration'
        ],
        technologies: ['GCP', 'Kubernetes', 'Terraform', 'Cloud Run']
    },
    {
        name: 'Infrastructure Cost Optimization',
        description: 'Achieved 90%+ cost reduction through strategic automation and GKE Spot Instances implementation',
        period: 'Aug - Sep 2022',
        impact: [
            '90%+ Cost Reduction',
            '99.9% Availability Maintained',
            'Multi-zone High Availability',
            'Zero Code Changes Required'
        ],
        technologies: ['GKE', 'Spot Instances', 'Terraform', 'Kubernetes']
    },
    {
        name: 'Teleport Access Control',
        description: 'Approval-based access management with full activity auditing',
        period: 'Feb - Oct 2024',
        impact: [
            'Approval-based Access',
            'Full Activity Auditing',
            'Terraform-managed Configuration',
            '600+ Services Secured'
        ],
        technologies: ['Teleport', 'Terraform', 'GCP']
    },
    {
        name: 'Vault Secret Management',
        description: 'Kubernetes-native secret management with historical change tracking',
        period: 'Aug - Sep 2022',
        impact: [
            'Configuration & Secret Management',
            'Zero Code Changes Required',
            'Historical Change Tracking',
            'Kubernetes-native Deployment'
        ],
        technologies: ['Vault', 'Kubernetes', 'Terraform']
    },
    {
        name: 'Jenkins Shared Library',
        description: 'Standardized CI/CD pipelines across multiple teams',
        period: 'Dec 2020 - Jul 2021',
        impact: [
            'Standardized Build/Release',
            'Centralized Pipeline Management',
            'Improved Debugging',
            'Hundreds of Job Pipelines'
        ],
        technologies: ['Jenkins', 'Groovy', 'Kubernetes']
    },
    {
        name: 'Open Source CV Builder',
        description: 'Markdown-based CV generator with GitHub Pages integration',
        period: '2023',
        impact: [
            '5 Stars on GitHub',
            'Open Source Contribution',
            'Focus on Content Over Complexity',
            'Active Community Usage'
        ],
        technologies: ['Jekyll', 'GitHub Actions', 'Markdown'],
        link: 'https://github.com/doctor500/cv'
    }
]

// GitHub Stats
export const githubStats = {
    totalRepos: 18,
    totalStars: 13,
    totalForks: 22,
    languages: 8,
    topProjects: [
        {
            name: 'cv',
            description: 'Build & Generate CV using Markdown template as PDF and Github Pages',
            stars: 5,
            forks: 6,
            language: 'CSS',
            link: 'https://github.com/doctor500/cv'
        },
        {
            name: 'sonarqube-on-kubernetes',
            description: 'YAML configuration to deploy SonarQube on Kubernetes',
            stars: 5,
            forks: 16,
            language: 'YAML',
            link: 'https://github.com/doctor500/sonarqube-on-kubernetes'
        },
        {
            name: 'jenkins-psl',
            description: 'Standard library for Jenkins pipelines',
            stars: 0,
            forks: 0,
            language: 'Groovy'
        }
    ]
}

// Certifications
export const certifications = [
    {
        name: 'Associate Cloud Engineer',
        organization: 'Google Cloud Platform',
        verified: true,
        category: 'Cloud'
    },
    {
        name: 'DevOps Engineering on AWS',
        organization: 'Amazon Web Services',
        verified: true,
        category: 'Cloud'
    },
    {
        name: 'Google Cloud Fundamentals',
        organization: 'Google Cloud',
        verified: true,
        category: 'Cloud'
    },
    {
        name: 'GCP Essentials',
        organization: 'Google Cloud',
        verified: true,
        category: 'Cloud'
    },
    {
        name: 'DevOps Essential',
        organization: 'Google Cloud',
        verified: true,
        category: 'DevOps'
    },
    {
        name: 'Developing on AWS',
        organization: 'AWS Startup Technical Training',
        verified: true,
        category: 'Cloud'
    },
    {
        name: 'Agile Foundations',
        organization: 'Agile Training',
        verified: true,
        category: 'Methodology'
    },
    {
        name: 'Certified Microsoft Innovative Educator',
        organization: 'Microsoft',
        verified: true,
        category: 'Education'
    }
]

// Note: personalInfo, portfolioLinks, and contactLinks have been moved to lib/content.ts
// They are now derived from JSON files in the content/ directory
