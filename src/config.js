module.exports = {
  markdownItOptions: {
    html: true,
    xhtmlOut: false,
    breaks: true,
    langPrefix: "language-",
    linkify: true,
    typographer: false,
    quotes: "“”‘’"
  },
  scrollToOptions: {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
  },
  dateFormat: "MMMM DD, YYYY",
  authors: [
    {
      name: "Alysson Gatens",
      url: "http://www.icjia.org/biographies/alysson-gatens"
    }
  ],

  meta: {
    url: "https://continuum-mh.netlify.com",
    title:
      "Mental Health Disorders and the Criminal Justice System: A Continuum of Evidence-Informed Practices",
    description:
      "In the United States, more than 20 million individuals have substance use disorders (SUDs)—not including individuals with more mild or moderate substance use and misuse. Of those with SUDs, just over 10 percent ultimately receive treatment. On average, costs incurred in the United States from alcohol and drug use due to lost work productivity, health care expenses, motor vehicle accidents, and criminal justice costs exceeds $400 billion. Almost half of the cost is at the taxpayers’ expense.",

    lastUpdate: "2019-04-23",
    fb_Image: "https://continuum-mh.netlify.com/splash-cropped-min.png",
    fb_AppId: "658596667606445",
    fb_Type: "article",
    fb_Locale: "en_US",
    fb_Author: "https://www.facebook.com/ICJIA",
    twitter_User: "ICJIA_Illinois"
  },

  siteConfig: {
    pages: {
      type: "page",
      sortOn: "position"
    },
    intercepts: {
      type: "modal",
      sortOn: "position"
    }
  },

  primaryColor: "indigo darken-1",
  secondaryColor: "indigo darken-2",
  theme: {
    dark: {
      color: "#333",
      background: "#fafafa"
    },
    light: {
      color: "#333",
      background: "#efefef"
    },
    white: {
      color: "#333",
      background: "#fff"
    },
    icjia: {
      color: "#fff",
      background: "#3949AB"
    }
  },
  debug: false
};
