const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Arron McCrory - Modern Web Development', // Navigation and Site Title
  siteTitleAlt: 'Arron McCrory', // Alternative Site title for SEO
  siteTitleShort: 'Arron McCrory', // short_name for manifest
  siteHeadline: 'Creating modern web experiences', // Headline for schema.org JSONLD
  siteUrl: 'https://arronmccrory.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.jpg', // Used for SEO and manifest
  siteDescription: 'Arron McCrory Portfolio',
  author: 'Arron McCrory', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
