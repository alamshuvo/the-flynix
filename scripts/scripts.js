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
     gradient: "linear-gradient(135deg, #2563eb, #06b6d4)"
  },
  {
    title: "Website SEO",
    desc: "Boost your organic visibility and dominate search rankings with porven SEO strategies",
    img: "/assets/myIcons/svg-7.svg"
  },
  {
    title: "Local SEO",
    desc: "Dominate local searches and attract nearby customers actively looking for your services",
    img: "/assets/myIcons/svg-8.svg"
  },
  {
    title: "Google Ads",
    desc: "Targeted campaigns that deliver measurable ROI and drive qualified leads instantly",
    img: "/assets/myIcons/svg-9.svg"
  },
  {
    title: "Meta Ads",
    desc: "Reach your ideal autience on Facebook and instagram with precision-targeted campaings",
    img: "/assets/myIcons/svg-10.svg"
  },
  {
    title:"Content Writing",
    desc:"Compelling content that resonates with your audience and drives meaningful engagement",
    img:"/assets/myIcons/svg-11.svg"
  },
  {
    title:"Social Media Marketing",
    desc:"Build a powerful social presence that converts followers into loyal customers",
    img:"/assets/myIcons/svg-12.svg"
  }
];

const container = document.getElementById("card-container");

cardsData.forEach(card => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");

  cardElement.innerHTML = `
      <div class="card-img" style="background:${card.gradient}">
  <img src="${card.img}" alt="${card.title}">
</div>
    <div class="card-body">
      <div class="card-title">${card.title}</div>
      <div class="card-desc">${card.desc}</div>
    </div>

  `;

  container.appendChild(cardElement);
});
