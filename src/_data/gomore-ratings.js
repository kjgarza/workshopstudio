module.exports = {
  project: {
    year: "'24",
    client: "GoMore",
    title: "Ratings", 
    headline: ["Star", "wars"],
    skills: [
      "Product design",
      "UX design", 
      "UX research",
      "QA",
      "Design systems",
      "Frontend development",
      "Copywriting"
    ],
    description: "GoMore used to have a rudimentary rating system. When searching for a car you'd see an ocean of little yellow five-stars. Colourful? Yes. Useful? No. Prospective renters were left with no way of differentiating the quality of listings."
  },
  
  content: {
    sections: [
      {
        type: "image",
        image: {
          src: "/img/gomore/ratings/ratings_5-stars.png",
          alt: "Search results with many five-star ratings", 
          classes: "rounded main-grid__3-4 align-self--center",
          caption: {
            class: "main-grid__2 grid-row--1",
            text: "Five-stars all around. Everything looked... a little too perfect."
          }
        }
      },
      {
        type: "blockquote",
        blockquote: {
          class: "main-grid__2-4",
          quote: {
            startQuote: "\"",
            text: "Someone has to do something about this"
          },
          cite: {
            class: "marquee", 
            text: "—I muttered<br> to myself"
          },
          followupText: "Luckily my boss had literally just asked me to \"do something about this\". So I grabbed myself a can of Danskvand<span class=\"asterisk\"></span> from the fridge downstairs, rolled up my sleeves and got to work.",
          footnote: "<span class=\"asterisk\"></span>Translates to \"Danish water\", bizarrely this is what Danes call sparkling water."
        }
      },
      {
        type: "image",
        image: {
          src: "/img/gomore/ratings/research.png",
          alt: "Competitor research of ratings and reviews",
          classes: "rounded main-grid__2-4 align-self--center", 
          caption: {
            class: "main-grid__5 grid-row--1",
            text: "I sure know how to take a screenshot."
          }
        }
      },
      {
        type: "text-section",
        section: {
          content: "I carefully read articles on UX best practices, I rather hastily skimmed <a href=\"https://firstmonday.org/ojs/index.php/fm/article/view/7908\" target=\"_blank\">an academic paper</a> titled \"Rating mechanisms among participants in sharing economy platforms\", I benchmarked competitors, best-in-class companies and every thing in-between. I scoured message boards, amused by the passionate ramblings from both sides of the peer-to-peer playing field."
        }
      },
      {
        type: "image", 
        image: {
          src: "/img/gomore/ratings/funny_quote_1.png",
          alt: "An amusing anecdote about receiving 4 stars on Airbnb",
          classes: "rounded main-grid__3-5 align-self--center"
        }
      },
      {
        type: "text-section",
        section: {
          heading: {
            class: "main-grid__2-3",
            text: "Increasing the quantity"
          },
          content: "We re-built our ratings system from the ground up. Starting with the way we gather ratings, we introduced new communications; including messaging in the product, and push notifications and emails off-platform."
        }
      }
    ]
  }
};