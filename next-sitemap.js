/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yajimaga-tech-blog.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
}
