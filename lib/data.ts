/**
 * Content Data extracted from ideas/content-data-source.md
 * Last Updated: 2026-02-16
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
        description: 'CI/CD platform development and Agentic AI for infrastructure operations',
        achievements: [
            'Claude Code Plugin for compliance docs — 80% time reduction',
            'AI-powered incident investigation — 24h to under 2h',
            'CI/CD-as-a-Service platform on Kubernetes',
            'Backend automation tooling in Go and Python'
        ],
        technologies: ['Jenkins', 'Kubernetes', 'GitHub Actions', 'Claude Code', 'Go', 'Python', 'Harbor']
    },
    {
        company: 'GovTech Procurement',
        role: 'Infrastructure Engineer',
        location: 'Indonesia',
        period: 'Jan 2024 - Sep 2025',
        duration: '1 year 9 months',
        description: 'Infrastructure automation and cloud migration for government systems',
        achievements: [
            '90%+ daily cost reduction, $150K monthly savings via GKE migration',
            '600+ services migrated to government-certified cloud',
            'Mail Services to Kubernetes — 6x scaling performance',
            'Audited access control for 500+ resources via Teleport',
            'Zero security incidents throughout tenure'
        ],
        technologies: ['GCP', 'Kubernetes', 'Terraform', 'Cloud Run', 'Pomerium', 'Teleport']
    },
    {
        company: 'GoTo Group',
        role: 'DevOps Engineer',
        location: 'Jakarta, Indonesia',
        period: 'Nov 2021 - Dec 2023',
        duration: '2 years 2 months',
        description: 'DevOps automation and cost optimization for Southeast Asia\'s largest tech company',
        achievements: [
            'Up to 50% hourly AWS infrastructure cost reduction',
            '99.9% availability maintained during optimization',
            'Cloud SQL Migration optimized from 2h to 15min (GCP DMS)',
            'GKE Spot Instances with multi-zone high availability',
            'Vault Cluster implementation for Selly.id'
        ],
        technologies: ['GCP', 'GKE', 'Kubernetes', 'Vault', 'Terraform', 'AWS']
    },
    {
        company: 'Pegipegi',
        role: 'Release Engineer',
        location: 'Jakarta, Indonesia',
        period: 'Mar 2020 - Oct 2021',
        duration: '1 year 8 months',
        description: 'CI/CD pipeline standardization and automation',
        achievements: [
            'Jenkins pipelines standardized — 80%+ redundant file reduction',
            'Provisioning time decreased 6x using Kubernetes',
            'Container-based CI/CD environment',
            '85% build time reduction'
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

// Key Statistics - System Monitoring Style
export const stats: Stat[] = [
    {
        value: '90%+',
        label: 'Cost Savings',
        sublabel: '$2M+ annually',
        icon: 'chart'
    },
    {
        value: '99.9%',
        label: 'Availability',
        sublabel: 'Zero downtime',
        icon: 'shield'
    },
    {
        value: '600+',
        label: 'Migrations',
        sublabel: 'Services to cloud',
        icon: 'cloud'
    },
    {
        value: '85%',
        label: 'Build Time',
        sublabel: 'Reduction achieved',
        icon: 'rocket'
    },
    {
        value: '80%',
        label: 'Doc Automation',
        sublabel: 'AI-powered creation',
        icon: 'projects'
    },
    {
        value: '12x',
        label: 'Faster Response',
        sublabel: '24h → 2h investigation',
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
    ],
    agenticAI: [
        { name: 'Claude Code', level: 85, category: 'AI' },
        { name: 'AI Agent Development', level: 80, category: 'AI' },
        { name: 'MCP (Model Context Protocol)', level: 80, category: 'AI' }
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
    },
    {
        name: 'Compliance Document Automation',
        description: 'Claude Code Plugin for auto-generating compliance-ready operation documents at Rakuten',
        period: '2025',
        impact: [
            '80% Time Reduction',
            'AI-Powered Generation',
            'Compliance-Ready Output',
            'Agentic Workflow Design'
        ],
        technologies: ['Claude Code', 'AI Agent', 'MCP']
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
