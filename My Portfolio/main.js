// ローディングここから
const loading = document.getElementById('loading');
const mainText = document.getElementById('main-text');
const nav = document.getElementById('nav-pc');
const blogArea = document.getElementById('blog-area');
const scroll = document.getElementById('scroll');
const scrollText = document.getElementById('scroll-text');
const backgroundNav = document.getElementById('background-nav');
const portfolio = document.getElementById('portfolio');
const portfolioWrapper = document.getElementById('portfolio-wrapper');
const skill = document.getElementById('skill');
const profile = document.getElementById('profile');
const contact = document.getElementById('contact');
const footer = document.getElementById('footer');
const spNavmenu = document.getElementById('nav-sp-menu');
const chancel = document.getElementById('chancel');
const spNav = document.getElementById('nav-sp');


setTimeout(() => {
  loading.style.display = 'none';
}, 2000);

setTimeout(() => {
  mainText.style.display = 'block';
  // ここからメインテキストのランダムシーケンス
  const timer1 = setInterval(() => {
    randomFont();
    text1.textContent = font;
  }, 100);

  const timer2 = setInterval(() => {
    randomFont();
    text2.textContent = font;
  }, 200);

  const timer3 = setInterval(() => {
    randomFont();
    text3.textContent = font;
  }, 140);
  
  const timer4 = setInterval(() => {
    randomFont();
    text4.textContent = font;
  }, 100);
  
  const timer5 = setInterval(() => {
    randomFont();
    text5.textContent = font;
  }, 90);
  
  const timer6 = setInterval(() => {
    randomFont();
    text6.textContent = font;
  }, 90);
  
  const timer7 = setInterval(() => {
    randomFont();
    text7.textContent = font;
  }, 90);
  
  const timer8 = setInterval(() => {
    randomFont();
    text8.textContent = font;
  }, 90);
  
  const timer9 = setInterval(() => {
    randomFont();
    text9.textContent = font;
  }, 90);

  const timer10 = setInterval(() => {
    randomFont();
    text10.textContent = font;
  }, 90);

  const timer11 = setInterval(() => {
    randomFont();
    text11.textContent = font;
  }, 90);

  const timer12 = setInterval(() => {
    randomFont();
    text12.textContent = font;
  }, 90);

  const timer13 = setInterval(() => {
    randomFont();
    text13.textContent = font;
  }, 90);

  const timer14 = setInterval(() => {
    randomFont();
    text14.textContent = font;
  }, 90);

  const timer15 = setInterval(() => {
    randomFont();
    text15.textContent = font;
  }, 90);

  const timer16 = setInterval(() => {
    randomFont();
    text16.textContent = font;
  }, 90);

  const timer17 = setInterval(() => {
    randomFont();
    text17.textContent = font;
  }, 90);

  const timer18 = setInterval(() => {
    randomFont();
    text18.textContent = font;
  }, 90);

  const timer19 = setInterval(() => {
    randomFont();
    text19.textContent = font;
  }, 90);

  const timer20 = setInterval(() => {
    randomFont();
    text20.textContent = font;
  }, 90);

  const timer21 = setInterval(() => {
    randomFont();
    text21.textContent = font;
  }, 90);

  const timer22 = setInterval(() => {
    randomFont();
    text22.textContent = font;
  }, 90);

  const timer23 = setInterval(() => {
    randomFont();
    text23.textContent = font;
  }, 90);

  const timer24 = setInterval(() => {
    randomFont();
    text24.textContent = font;
  }, 90);

  const timer25 = setInterval(() => {
    randomFont();
    text25.textContent = font;
  }, 90);


  // ここからメインテキストのランダム文字タイマーリセット
  setTimeout(() => {
    clearInterval(timer1);
    text1.textContent = 'T';
    text2.style.display = 'block';
  }, 1500);

  setTimeout(() => {
    clearInterval(timer2);
    text2.textContent = 'h';
    text3.style.display = 'block';
  }, 1800);
  
  setTimeout(() => {
    clearInterval(timer3);
    text3.textContent = 'a';
    text4.style.display = 'block';
  }, 2100);
  
  setTimeout(() => {
    clearInterval(timer4);
    text4.textContent = 'n';
    text5.style.display = 'block';
  }, 2400);
  
  setTimeout(() => {
    clearInterval(timer5);
    text5.textContent = 'k';
    text6.style.display = 'block';
  }, 2700);
  
  setTimeout(() => {
    clearInterval(timer6);
    text6.textContent = 'y';
    text7.style.display = 'block';
  }, 3000);
  
  setTimeout(() => {
    clearInterval(timer7);
    text7.textContent = 'o';
    text8.style.display = 'block';
  }, 3300);
  
  setTimeout(() => {
    clearInterval(timer8);
    text8.textContent = 'u';
    text9.style.display = 'block';
  }, 3600);

  setTimeout(() => {
    clearInterval(timer9);
    text9.textContent = 'f';
    text10.style.display = 'block';
  }, 3900);

  setTimeout(() => {
    clearInterval(timer10);
    text10.textContent = 'o';
    text11.style.display = 'block';
  }, 4200);

  setTimeout(() => {
    clearInterval(timer11);
    text11.textContent = 'r';
    text12.style.display = 'block';
  }, 4500);

  setTimeout(() => {
    clearInterval(timer12);
    text12.textContent = 'v';
    text13.style.display = 'block';
  }, 4800);

  setTimeout(() => {
    clearInterval(timer13);
    text13.textContent = 'i';
    text14.style.display = 'block';
  }, 5100);

  setTimeout(() => {
    clearInterval(timer14);
    text14.textContent = 's';
    text15.style.display = 'block';
  }, 5400);

  setTimeout(() => {
    clearInterval(timer15);
    text15.textContent = 'i';
    text16.style.display = 'block';
  }, 5700);

  setTimeout(() => {
    clearInterval(timer16);
    text16.textContent = 't';
    text17.style.display = 'block';
  }, 6000);

  setTimeout(() => {
    clearInterval(timer17);
    text17.textContent = 'i';
    text18.style.display = 'block';
  }, 6300);

  setTimeout(() => {
    clearInterval(timer18);
    text18.textContent = 'n';
    text19.style.display = 'block';
  }, 6600);

  setTimeout(() => {
    clearInterval(timer19);
    text19.textContent = 'g';
    text20.style.display = 'block';
  }, 6900);

  setTimeout(() => {
    clearInterval(timer20);
    text20.textContent = 'm';
    text21.style.display = 'block';
  }, 7200);

  setTimeout(() => {
    clearInterval(timer21);
    text21.textContent = 'y';
    text22.style.display = 'block';
  }, 7500);

  setTimeout(() => {
    clearInterval(timer22);
    text22.textContent = 's';
    text23.style.display = 'block';
  }, 7800);

  setTimeout(() => {
    clearInterval(timer23);
    text23.textContent = 'i';
    text24.style.display = 'block';
  }, 8100);

  setTimeout(() => {
    clearInterval(timer24);
    text24.textContent = 't';
    text25.style.display = 'block';
  }, 8400);

  setTimeout(() => {
    clearInterval(timer25);
    text25.textContent = 'e';
  }, 8700);
  // ここまでメインテキストのランダムタイマーリセット

}, 2500);

setTimeout(() => {
  nav.style.display = 'flex';
  blogArea.style.display = 'block';
}, 11500);

setTimeout(() => {
  scroll.style.display = 'block';
},15000);
// ローディングここまで

const fontbox = ['a', 'b', 'c','d','e','f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');
const text5 = document.getElementById('text5');
const text6 = document.getElementById('text6');
const text7 = document.getElementById('text7');
const text8 = document.getElementById('text8');
const text9 = document.getElementById('text9');
const text10= document.getElementById('text10');
const text11= document.getElementById('text11');
const text12= document.getElementById('text12');
const text13= document.getElementById('text13');
const text14= document.getElementById('text14');
const text15= document.getElementById('text15');
const text16= document.getElementById('text16');
const text17= document.getElementById('text17');
const text18= document.getElementById('text18');
const text19= document.getElementById('text19');
const text20= document.getElementById('text20');
const text21= document.getElementById('text21');
const text22= document.getElementById('text22');
const text23= document.getElementById('text23');
const text24= document.getElementById('text24');
const text25= document.getElementById('text25');


const randomFont = () => {
let fontnumber = Math.floor(Math.random() * fontbox.length);
font = fontbox[fontnumber];
}

const removeScroll = () => {
  // console.log(window.scrollY);
  let windowHight = window.innerHeight * 0.5;
  console.log(windowHight);
  let portfolioHeight = portfolio.getBoundingClientRect();
  console.log(portfolioHeight.bottom);
  let skillHeight = skill.getBoundingClientRect();
  console.log(skillHeight.bottom);
  let profileHeight = profile.getBoundingClientRect();
  let contactHeight = contact.getBoundingClientRect();



  if (windowHight >= portfolioHeight.top && windowHight < skillHeight.top) {
    backgroundNav.style.display = "block";
    portfolioWrapper.style.display = "block";
    scroll.classList.remove('add-scroll');
    scroll.classList.add('remove-scroll');
    backgroundNav.textContent = "Portfolio";
  }


    else if (windowHight > portfolioHeight.bottom && windowHight < skillHeight.bottom) {
    backgroundNav.textContent = "Skill";
      // backgroundNav.style.display = "block";
      // portfolio.style.margin = "100px 0 200px 0";
      skill.classList.add('add-skill');
  }

  else if (windowHight > profileHeight.top && windowHight < contactHeight.top) {
    backgroundNav.textContent = "Profile";
      // backgroundNav.style.display = "block";
      profile.classList.add('add-profile');
  }

  else if (windowHight > contactHeight.top) {
    backgroundNav.textContent = "Contact";
      // backgroundNav.style.display = "block";
      contact.classList.add('add-contact');
  }

  else {
    backgroundNav.style.display = "none";
    // portfolioWrapper.style.display = "none";
    // skill.style.display = "none";
    scroll.classList.remove('remove-scroll');
    scroll.classList.add('add-scroll');
    scrollText.textContent = 'please scroll';
  }
};

document.addEventListener('scroll', removeScroll);


//sp用ナビメニュー
const addspNavmenu = () => {
  spNav.style.display = 'flex';
}

const removespNavmenu = () => {
  spNav.style.display = 'none';
}

spNavmenu.addEventListener('click', addspNavmenu);

chancel.addEventListener('click', removespNavmenu);
