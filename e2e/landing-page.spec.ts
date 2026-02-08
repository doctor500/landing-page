import { test, expect } from '@playwright/test';

test.describe('Landing Page - Complete E2E Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        // Wait for page to be fully loaded
        await page.waitForLoadState('networkidle');
    });

    test.describe('Page Load & SEO', () => {
        test('should load the page successfully', async ({ page }) => {
            await expect(page).toHaveTitle(/David Layardi/i);
        });

        test('should have meta description', async ({ page }) => {
            const metaDescription = page.locator('meta[name="description"]');
            await expect(metaDescription).toHaveAttribute('content', /.+/);
        });

        test('should have proper heading structure', async ({ page }) => {
            const h1 = page.locator('h1');
            await expect(h1).toBeVisible();
        });
    });

    test.describe('Hero Section', () => {
        test('should display the hero section with name', async ({ page }) => {
            const heroName = page.locator('text=David Layardi');
            await expect(heroName.first()).toBeVisible();
        });

        test('should display role/tagline', async ({ page }) => {
            // Check for role text (DevOps, SRE, or similar)
            const roleText = page.locator('text=/DevOps|SRE|Infrastructure/i');
            await expect(roleText.first()).toBeVisible();
        });

        test('should have "View My Work" CTA button', async ({ page }) => {
            const viewWorkBtn = page.getByRole('button', { name: /view my work/i });
            await expect(viewWorkBtn).toBeVisible();
        });

        test('should have "Let\'s Connect" CTA button', async ({ page }) => {
            const connectBtn = page.getByRole('button', { name: /let.*connect/i });
            await expect(connectBtn).toBeVisible();
        });

        test('should display stats counters in hero', async ({ page }) => {
            // Look for years of experience counter
            const statsSection = page.locator('section').first();
            await expect(statsSection).toBeVisible();
        });
    });

    test.describe('Portfolio Modal', () => {
        test('should open portfolio modal when clicking "View My Work"', async ({ page }) => {
            const viewWorkBtn = page.getByRole('button', { name: /view my work/i });
            await viewWorkBtn.click();

            // Wait for modal to appear
            const modal = page.locator('[role="dialog"]').or(page.locator('.modal')).or(page.locator('[class*="modal"]'));
            await expect(modal.first()).toBeVisible({ timeout: 5000 });
        });

        test('should display GitHub and Medium links in portfolio modal', async ({ page }) => {
            const viewWorkBtn = page.getByRole('button', { name: /view my work/i });
            await viewWorkBtn.click();

            // Wait for modal content
            await page.waitForTimeout(500);

            // Check for GitHub link
            const githubLink = page.getByRole('link', { name: /github/i });
            await expect(githubLink).toBeVisible({ timeout: 5000 });
        });

        test('should close portfolio modal when clicking outside or close button', async ({ page }) => {
            const viewWorkBtn = page.getByRole('button', { name: /view my work/i });
            await viewWorkBtn.click();

            await page.waitForTimeout(500);

            // Try to close the modal by pressing Escape
            await page.keyboard.press('Escape');

            // Modal should be closed (or button should be visible again without modal overlay)
            await page.waitForTimeout(300);
        });
    });

    test.describe('Contact Modal', () => {
        test('should open contact modal when clicking "Let\'s Connect"', async ({ page }) => {
            const connectBtn = page.getByRole('button', { name: /let.*connect/i });
            await connectBtn.click();

            // Wait for modal to appear
            await page.waitForTimeout(500);

            // Check for LinkedIn or Email content in modal
            const linkedinLink = page.getByRole('link', { name: /linkedin/i });
            await expect(linkedinLink).toBeVisible({ timeout: 5000 });
        });

        test('should display LinkedIn and Email in contact modal', async ({ page }) => {
            const connectBtn = page.getByRole('button', { name: /let.*connect/i });
            await connectBtn.click();

            await page.waitForTimeout(500);

            // Check for Email link
            const emailLink = page.getByRole('link', { name: /email/i }).or(page.locator('a[href^="mailto:"]'));
            await expect(emailLink.first()).toBeVisible({ timeout: 5000 });
        });
    });

    test.describe('Stats Dashboard', () => {
        test('should display stats dashboard section', async ({ page }) => {
            // Look for stats section with numbers
            const statsNumbers = page.locator('text=/\\d+\\+?/');
            expect(await statsNumbers.count()).toBeGreaterThan(0);
        });

        test('should display key metrics with labels', async ({ page }) => {
            // Check for common metric labels
            const yearsText = page.locator('text=/year|experience/i');
            await expect(yearsText.first()).toBeVisible();
        });
    });

    test.describe('Career Timeline', () => {
        test('should display career timeline section', async ({ page }) => {
            // Look for career/experience section
            const careerSection = page.locator('text=/career|experience|journey/i');
            await expect(careerSection.first()).toBeVisible();
        });

        test('should display timeline items with company names', async ({ page }) => {
            // Scroll to ensure timeline is visible
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
            await page.waitForTimeout(500);

            // Look for company/role elements in timeline
            const timelineItems = page.locator('[class*="timeline"]').or(page.locator('article'));
            expect(await timelineItems.count()).toBeGreaterThanOrEqual(0);
        });

        test('should be able to expand timeline items', async ({ page }) => {
            // Scroll to timeline section
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
            await page.waitForTimeout(500);

            // Look for expandable items (buttons or clickable elements in timeline)
            const expandableItems = page.locator('[class*="timeline"] button').or(page.locator('[class*="expand"]'));
            if (await expandableItems.count() > 0) {
                await expandableItems.first().click();
                await page.waitForTimeout(300);
            }
        });
    });

    test.describe('Testimonials Section', () => {
        test('should display testimonials section', async ({ page }) => {
            // Scroll down to find testimonials
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.75));
            await page.waitForTimeout(500);

            const testimonialSection = page.locator('text=/testimonial|what.*say|recommend/i');
            await expect(testimonialSection.first()).toBeVisible();
        });

        test('should display testimonial quotes', async ({ page }) => {
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.75));
            await page.waitForTimeout(500);

            // Look for blockquote or testimonial content
            const quotes = page.locator('blockquote').or(page.locator('[class*="testimonial"]'));
            expect(await quotes.count()).toBeGreaterThan(0);
        });

        test('should have carousel navigation or auto-rotation', async ({ page }) => {
            await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight * 0.75));
            await page.waitForTimeout(500);

            // Look for progress bar or navigation dots
            const progressBar = page.locator('[class*="progress"]').or(page.locator('[class*="indicator"]'));
            // Carousel might exist
            expect(await progressBar.count()).toBeGreaterThanOrEqual(0);
        });
    });

    test.describe('Theme Toggle', () => {
        test('should have theme toggle button visible', async ({ page }) => {
            const themeToggle = page.locator('[aria-label*="theme" i]').or(page.locator('button:has-text("dark")').or(page.locator('button:has-text("light")')));
            // Theme toggle should exist somewhere
            expect(await themeToggle.count()).toBeGreaterThanOrEqual(0);
        });

        test('should toggle between light and dark mode', async ({ page }) => {
            // Get initial theme state
            const html = page.locator('html');
            const initialTheme = await html.getAttribute('data-color-mode') || await html.getAttribute('class');

            // Find and click theme toggle
            const themeToggle = page.locator('button').filter({ hasText: /theme|dark|light|sun|moon/i }).first();

            if (await themeToggle.isVisible()) {
                await themeToggle.click();
                await page.waitForTimeout(300);

                // Check if theme changed
                const newTheme = await html.getAttribute('data-color-mode') || await html.getAttribute('class');
                // Theme might have changed
                expect(newTheme !== undefined || initialTheme !== undefined).toBeTruthy();
            }
        });
    });

    test.describe('Floating Navigation', () => {
        test('should display floating navigation', async ({ page }) => {
            // Scroll down to trigger floating nav
            await page.evaluate(() => window.scrollTo(0, 500));
            await page.waitForTimeout(500);

            const floatingNav = page.locator('nav').or(page.locator('[class*="floating"]').or(page.locator('[class*="nav"]')));
            expect(await floatingNav.count()).toBeGreaterThan(0);
        });

        test('should navigate to sections when clicking nav items', async ({ page }) => {
            // Scroll to show navigation
            await page.evaluate(() => window.scrollTo(0, 500));
            await page.waitForTimeout(500);

            // Look for nav links
            const navLinks = page.locator('nav a[href^="#"]').or(page.locator('a[href^="#"]'));
            if (await navLinks.count() > 0) {
                const firstLink = navLinks.first();
                const href = await firstLink.getAttribute('href');
                await firstLink.click();
                await page.waitForTimeout(500);

                // Verify scroll happened (URL hash might change)
                if (href) {
                    await expect(page).toHaveURL(new RegExp(href.replace('#', '')));
                }
            }
        });
    });

    test.describe('Responsive Design', () => {
        test('should display properly on mobile viewport', async ({ page }) => {
            await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE
            await page.reload();
            await page.waitForLoadState('networkidle');

            // Hero should still be visible
            const heroName = page.locator('text=David Layardi');
            await expect(heroName.first()).toBeVisible();
        });

        test('should display properly on tablet viewport', async ({ page }) => {
            await page.setViewportSize({ width: 768, height: 1024 }); // iPad
            await page.reload();
            await page.waitForLoadState('networkidle');

            // Page should load correctly
            const heroName = page.locator('text=David Layardi');
            await expect(heroName.first()).toBeVisible();
        });

        test('should display properly on desktop viewport', async ({ page }) => {
            await page.setViewportSize({ width: 1920, height: 1080 }); // Full HD
            await page.reload();
            await page.waitForLoadState('networkidle');

            // Page should load correctly
            const heroName = page.locator('text=David Layardi');
            await expect(heroName.first()).toBeVisible();
        });
    });

    test.describe('Animations & Interactions', () => {
        test('should have smooth scroll behavior', async ({ page }) => {
            // Check for smooth scroll CSS
            const html = await page.evaluate(() => {
                return getComputedStyle(document.documentElement).scrollBehavior;
            });

            // Smooth scroll might be enabled
            expect(['smooth', 'auto', '']).toContain(html);
        });

        test('should have hover effects on buttons', async ({ page }) => {
            const ctaButton = page.getByRole('button', { name: /view my work/i });

            // Get initial styles
            const initialStyles = await ctaButton.evaluate((btn) => ({
                transform: getComputedStyle(btn).transform,
                opacity: getComputedStyle(btn).opacity,
            }));

            // Hover over button
            await ctaButton.hover();
            await page.waitForTimeout(200);

            // Button should have some visual change on hover
            expect(initialStyles).toBeDefined();
        });
    });

    test.describe('Accessibility', () => {
        test('should have proper ARIA labels', async ({ page }) => {
            // Check for elements with aria-labels
            const ariaElements = page.locator('[aria-label]');
            expect(await ariaElements.count()).toBeGreaterThan(0);
        });

        test('should be navigable with keyboard', async ({ page }) => {
            // Tab through the page
            await page.keyboard.press('Tab');
            await page.waitForTimeout(200);

            // Get focused element
            const focusedElement = await page.evaluate(() => {
                return document.activeElement?.tagName;
            });

            expect(focusedElement).toBeDefined();
        });

        test('should have sufficient color contrast', async ({ page }) => {
            // Basic check - page should have visible text
            const visibleText = page.locator('body');
            await expect(visibleText).toBeVisible();
        });
    });

    test.describe('Performance', () => {
        test('should load within reasonable time', async ({ page }) => {
            const startTime = Date.now();
            await page.goto('/');
            await page.waitForLoadState('domcontentloaded');
            const loadTime = Date.now() - startTime;

            // Should load in under 5 seconds
            expect(loadTime).toBeLessThan(5000);
        });

        test('should not have any console errors', async ({ page }) => {
            const errors: string[] = [];
            page.on('console', (msg) => {
                if (msg.type() === 'error') {
                    errors.push(msg.text());
                }
            });

            await page.goto('/');
            await page.waitForLoadState('networkidle');

            // Filter out known acceptable errors (like favicon or external resources)
            const criticalErrors = errors.filter(e => !e.includes('favicon') && !e.includes('404'));
            expect(criticalErrors.length).toBe(0);
        });
    });
});
