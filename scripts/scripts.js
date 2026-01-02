window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav-wrapper");
  console.log(nav);

  if (window.scrollY > 10) {
    nav.classList.add("is-scrolled");
  } else {
    nav.classList.remove("is-scrolled");
  }
});

const cardsData = [
  {
    title: "Website Design",
    desc: "Stunning,conversion-focused website that capture your brand essence and engage  visitors",
    img: "../assets/myIcons/svg-6.svg",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
  },
  {
    title: "Website SEO",
    desc: "Boost your organic visibility and dominate search rankings with porven SEO strategies",
    img: "/assets/myIcons/svg-7.svg",
    gradient: "linear-gradient(135deg, #16a34a, #4ade80)",
  },
  {
    title: "Local SEO",
    desc: "Dominate local searches and attract nearby customers actively looking for your services",
    img: "/assets/myIcons/svg-8.svg",
    gradient: "linear-gradient(135deg, #f2920f, #f17e13)"
    
  },
  {
    title: "Google Ads",
    desc: "Targeted campaigns that deliver measurable ROI and drive qualified leads instantly",
    img: "/assets/myIcons/svg-9.svg",
    gradient: "linear-gradient(135deg, #f04057, #ec4899)"
  },
  {
    title: "Meta Ads",
    desc: "Reach your ideal autience on Facebook and instagram with precision-targeted campaings",
    img: "/assets/myIcons/svg-10.svg",
    gradient: "linear-gradient(135deg, #9333ea, #ec4899)"
  },
  {
    title: "Content Writing",
    desc: "Compelling content that resonates with your audience and drives meaningful engagement",
    img: "/assets/myIcons/svg-11.svg",
     gradient: "linear-gradient(135deg,  #596df2, #467bf5)"
   
  },
  {
    title: "Social Media Marketing",
    desc: "Build a powerful social presence that converts followers into loyal customers",
    img: "/assets/myIcons/svg-12.svg",
     gradient: "linear-gradient(135deg,   #49b7bb, #4bb7cb)"
   
  },
];

const container = document.getElementById("card-container");

cardsData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card", "inter");

  // store gradient per card
  cardElement.style.setProperty("--card-gradient", card.gradient);

  cardElement.innerHTML = `
    <div class="card-img">
      <img src="${card.img}" alt="${card.title}">
    </div>
    <div class="card-body">
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
    </div>
  `;

  container.appendChild(cardElement);
});

