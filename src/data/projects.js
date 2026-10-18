// All project info lives here. To add a project, copy one object below,
// paste it into the list, and change the fields. It shows up on the homepage
// and gets its own page at /projects/<slug> automatically.
//
// Fields:
//   slug        – url-friendly id (lowercase, dashes), must be unique
//   title       – project name
//   emoji       – little icon on the card
//   summary     – one line for the card
//   description – a paragraph for the detail page
//   tech        – list of tools used
//   demo        – what to show on the detail page (pick one type):
//                   { type: "video", src: "/media/file.mp4" }
//                   { type: "pdf",   src: "/media/file.pdf" }
//                   { type: "site",  src: "https://..." }   (embeds the live site)
//                 put media files in public/media/
//   links       – buttons on the detail page: [{ label, url }]
//   badge       – optional little note on the card (or leave it out)

export const projects = [
  {
    slug: "signal-and-noise",
    title: "the signal and the noise",
    emoji: "📈",
    summary: "can stocktwits sentiment predict next-day stock moves?",
    description:
      "an ml project testing whether stocktwits sentiment can predict next-day stock moves, using 4.2m posts across aapl, amzn, nvda, and tsla.",
    tech: ["python", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    demo: { type: "site", src: "https://stocktwits-market-prediction.streamlit.app/?embed=true" },
    links: [
      { label: "github", url: "https://github.com/sonakshipanda/stocktwits-market-prediction" },
      { label: "live demo", url: "https://stocktwits-market-prediction.streamlit.app" },
    ],
  },
  {
    slug: "triton-food-pantry",
    title: "triton food pantry",
    emoji: "🥕",
    summary: "ucsd’s campus food resources, all in one place.",
    description:
      "a website that brings ucsd’s campus food resources together in one place: pantry inventory, food-related club events, and recipes you can make with pantry ingredients.",
    tech: ["html5", "css3", "javascript", "papaparse", "tailwind css"],
    demo: { type: "site", src: "https://cherryonntopp.github.io/Team7-Triton/index.html" },
    links: [
      { label: "github", url: "https://github.com/cherryonntopp/Team7-Triton" },
      { label: "live demo", url: "https://cherryonntopp.github.io/Team7-Triton/index.html" },
    ],
  },
  {
    slug: "brain-tumor-classification",
    title: "brain tumor classification",
    emoji: "🧠",
    summary: "a cnn that sorts brain mri scans into four categories.",
    description:
      "a deep learning model that classifies brain mri scans into four categories: glioma, meningioma, pituitary tumor, or no tumor.",
    tech: ["python", "tensorflow/keras", "custom cnn", "numpy", "matplotlib"],
    demo: { type: "video", src: "/media/brain-tumor-demo.mp4" },
    links: [
      { label: "github", url: "https://github.com/cherryonntopp/Brain-Tumor-Classification" },
    ],
  },
  {
    slug: "nasa-viper-wheel",
    title: "nasa viper (moon rover)",
    emoji: "🌙",
    summary: "a 3d-printable titanium wheel with built-in shock absorption.",
    description:
      "a fully 3d-printable, single-piece titanium wheel for nasa’s viper lunar rover, with built-in leaf springs that absorb shock without a separate suspension system.",
    tech: ["autodesk fusion 360", "matlab", "material analysis"],
    demo: { type: "pdf", src: "/media/viper-agu-poster.pdf" },
    badge: "presented @ agu, washington dc",
    links: [
      { label: "research abstract", url: "https://ui.adsabs.harvard.edu/abs/2024AGUFMED41C2512I/abstract" },
      { label: "poster (pdf)", url: "/media/viper-agu-poster.pdf" },
    ],
  },
];
