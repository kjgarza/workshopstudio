module.exports = {
  title: "The Workshop Studio",
  description: "The Workshop Studio — Berlin",
  author: "The Workshop Studio",
  baseURL:
    process.env.ELEVENTY_ENV === "production"
      ? "https://theworkshop-studio.xyz"
      : "http://localhost:8080",
  pathPrefix: "",
  googleAnalytics: "G-X7KFRJYWBL",
  meta: {
    themeColor: "#FF8760",
    tileColor: "#FF8760",
  },
  workshopIntro: [
    {
      title: "Who We Are",
      text: "We're two professionals who've spent over ten years in the tech world, working with agile methods to help teams grow and adapt. Somewhere along the way, we realized: these same tools can be just as powerful for personal development.",
    },
    {
      title: "What We Offer",
      text: "Whether you're navigating a major life transition, setting meaningful goals, or just trying to figure out what comes next, our workshops give you a space to pause, reflect, and build a plan that actually feels right for you.",
    },
  ],
  navigation: [
    {
      name: "About",
      href: "/",
      current: false,
    },
    {
      name: "Work",
      href: "/work",
      current: false,
    },
    {
      name: "Tools",
      href: "/tools",
      current: false,
    },
    {
      name: "Publications",
      href: "/publications",
      current: false,
    },
    {
      name: "Berlin Workshop",
      href: "/berlin-workshop/",
      current: false,
    },
    {
      name: "Goal-Setting Workshop",
      href: "/end-of-year-workshop/",
      current: false,
    },
  ],
};
