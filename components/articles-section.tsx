'use client'

import { motion } from 'framer-motion'
import { getLatestArticles, medium } from '@/lib/content'

/**
 * Articles Section Component
 * 
 * Displays latest Medium articles with:
 * - Article cards with title, date, read time
 * - Claps count for popular articles
 * - Preview text
 * - Link to full Medium profile
 */

interface ArticleCardProps {
    article: {
        title: string
        url: string
        publishedDate: string
        readingTime: string
        claps: number
        preview: string
    }
    index: number
}

function ArticleCard({ article, index }: ArticleCardProps) {
    return (
        <motion.a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="article-card block group"
        >
            {/* Article Icon */}
            <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'var(--bgColor-accent-muted)' }}>
                    <svg className="w-5 h-5 text-accent-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </div>

                <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-accent-cyan transition-colors line-clamp-2">
                        {article.title}
                    </h3>

                    {/* Meta */}
                    <div className="flex items-center gap-3 text-sm text-foreground-muted mb-3">
                        <span>{article.publishedDate}</span>
                        <span>•</span>
                        <span>{article.readingTime}</span>
                        {article.claps > 10 && (
                            <>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                    {article.claps}
                                </span>
                            </>
                        )}
                    </div>

                    {/* Preview */}
                    <p className="text-sm text-foreground-muted line-clamp-2">
                        {article.preview}
                    </p>

                    {/* Read More */}
                    <div className="mt-3 flex items-center text-sm text-accent-cyan opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Read article</span>
                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                            fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.a>
    )
}

export function ArticlesSection() {
    const articles = getLatestArticles(3)

    return (
        <section id="articles" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--fgColor-default)' }}>
                        Latest Articles
                    </h2>
                    <p className="text-xl" style={{ color: 'var(--fgColor-muted)' }}>
                        Insights on infrastructure, automation, and cloud-native technologies
                    </p>
                </motion.div>

                {/* Articles List */}
                <div className="space-y-4 mb-8">
                    {articles.map((article, index) => (
                        <ArticleCard key={article.url} article={article} index={index} />
                    ))}
                </div>

                {/* View More Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href={medium.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 glass-card-gradient font-semibold rounded-lg hover:scale-105 transition-all duration-300"
                    >
                        <span>View More on Medium</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
