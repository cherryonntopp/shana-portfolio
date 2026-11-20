// All project info lives here. To add a project, copy one object below,
// paste it into the list, and change the fields. It shows up on the homepage
// and gets its own page at /projects/<slug> automatically.
//
// Fields:
//   slug        – url-friendly id (lowercase, dashes), must be unique
//   title       – project name
//   image       – screenshot/photo for the card (put it in public/media/)
//   summary     – one line for the card
//   description – a paragraph for the detail page
//   tech        – list of tools used
//   demo        – what to show on the detail page (pick one type):
//                   { type: "video", src: "/media/file.mp4" }
//                   { type: "pdf",   src: "/media/file.pdf" }
//                   { type: "site",  src: "https://..." }   (embeds the live site)
//                 put media files in public/media/
//   links       – buttons on the detail page: [{ label, url }]
//   badge       – optional short note on the card (or leave it out)

export const projects = [
  {
    slug: "signal-and-noise",
    title: "The Signal and the Noise",
    image: "/media/cover-signal.jpg",
    summary: "Testing whether StockTwits sentiment predicts next-day stock moves.",
    description:
      "A machine learning project testing whether StockTwits sentiment can predict next-day stock moves, using 4.2M posts across AAPL, AMZN, NVDA, and TSLA.",
    tech: ["Python", "pandas", "scikit-learn", "Matplotlib", "seaborn"],
    demo: { type: "site", src: "https://stocktwits-market-prediction.streamlit.app/?embed=true" },
    links: [
      { label: "GitHub", url: "https://github.com/sonakshipanda/stocktwits-market-prediction" },
      { label: "Live demo", url: "https://stocktwits-market-prediction.streamlit.app" },
    ],
  },
  {
    slug: "triton-food-pantry",
    title: "Triton Food Pantry",
    image: "/media/cover-triton.jpg",
    summary: "UCSD’s campus food resources, all in one place.",
    description:
      "A website that brings UCSD’s campus food resources together in one place: pantry inventory, food-related club events, and recipes you can make with pantry ingredients.",
    tech: ["HTML5", "CSS3", "JavaScript", "PapaParse", "Tailwind CSS"],
    demo: { type: "site", src: "https://cherryonntopp.github.io/Team7-Triton/index.html" },
    links: [
      { label: "GitHub", url: "https://github.com/cherryonntopp/Team7-Triton" },
      { label: "Live demo", url: "https://cherryonntopp.github.io/Team7-Triton/index.html" },
    ],
  },
  {
    slug: "brain-tumor-classification",
    title: "Brain Tumor Classification",
    image: "/media/cover-brain.jpg",
    summary: "A CNN that classifies brain MRI scans into four categories.",
    description:
      "A deep learning model that classifies brain MRI scans into four categories: glioma, meningioma, pituitary tumor, or no tumor.",
    tech: ["Python", "TensorFlow/Keras", "Custom CNN", "NumPy", "Matplotlib"],
    demo: { type: "video", src: "/media/brain-tumor-demo.mp4" },
    links: [
      { label: "GitHub", url: "https://github.com/cherryonntopp/Brain-Tumor-Classification" },
    ],
  },
  {
    slug: "nasa-viper-wheel",
    title: "NASA VIPER Lunar Rover Wheel",
    image: "/media/cover-viper.jpg",
    summary: "A 3D-printable titanium wheel with built-in shock absorption.",
    description:
      "A fully 3D-printable, single-piece titanium wheel for NASA’s VIPER lunar rover, with built-in leaf springs that absorb shock without a separate suspension system.",
    tech: ["Autodesk Fusion 360", "MATLAB", "Material Analysis"],
    demo: { type: "pdf", src: "/media/viper-agu-poster.pdf" },
    badge: "Presented at AGU, Washington, DC",
    links: [
      { label: "Research abstract", url: "https://ui.adsabs.harvard.edu/abs/2024AGUFMED41C2512I/abstract" },
      { label: "Poster (PDF)", url: "/media/viper-agu-poster.pdf" },
    ],
  },
];
