module.exports = {
  title: "The Workshop Studio",
  description: "The Workshop Studio — Berlin",
  author: "The Workshop Studio",
  baseURL: process.env.ELEVENTY_ENV === 'production' ? 'https://theworkshop-studio.xyz' : 'http://localhost:8080',
  pathPrefix: '',
  googleAnalytics: "G-X7KFRJYWBL",
  meta: {
    themeColor: "#FF8760",
    tileColor: "#FF8760"
  },
  navigation: [
    {
      name: "About",
      href: "/",
      current: false
    },
    {
      name: "Work", 
      href: "/work",
      current: false
    },
    {
      name: "Tools",
      href: "/tools", 
      current: false
    },
    {
      name: "Publications",
      href: "/publications",
      current: false
    },
    {
      name: "Berlin Workshop",
      href: "/berlin-workshop/",
      current: false
    },
    {
      name: "Goal-Setting Workshop",
      href: "/end-of-year-workshop/",
      current: false
    }
  ]
};
