/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://yajima.sytes.net',
    generateRobotsTxt: true,
    sitemapSize: 7000,
}
