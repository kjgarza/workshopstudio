module.exports = {
  title: "The Workshop Studio",
  description: "The Workshop Studio — Berlin",
  author: "The Workshop Studio",
  baseURL: process.env.ELEVENTY_ENV === 'production' ? 'https://workshop-studio.com' : 'http://localhost:8080',
  googleAnalytics: "UA-142771867-1",
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
    }
  ]
};
