const slides = document.querySelectorAll(".overlay_box");
const titles = document.querySelector("h1");
const socialIcons = document.querySelector("ul");
const steps = document.querySelector(".step");
const nextBtn = document.querySelector(".right");
const prevBtn = document.querySelector(".left");
const backgroundImg = document.querySelector(".background");
const imgLength = backgroundImg.naturalWidth;
const sliderLength = imgLength / slides.length;
const sliderContent = document.querySelector(".slide_content");
let countButtonClicks = 0;
let page = 0;

const content = [
  {
    id: 1,
    title: "we are breaking<br> our vow <br>of silence",
    step: "In January 2011, after a decade of digital,we opened the doors to our temple.<br>Follow our eightfold path to digital enlightment here",
    classname: 'positionTopLeft',
  },
  {
    id: 2,
    title: "talent is given <br>trueskill is <br>earned",
    step: "Step 1 out of 8 on the path of digital enlightment",
    classname: 'positionCenterLeft',
  },
  {
    id: 3,
    title: "be flexible to <br>change and <br>sturdy in conviction",
    step: "Step 2 out of 8 on the path of digital enlightment",
    classname: 'positionCenterLeft',
  },
  {
    id: 4,
    title: "use many skills <br>yet work as one",
    step: "Step 3 out of 8 on the path of digital enlightment",
    classname: 'positionCenterRight',
  },
  {
    id: 5,
    title: "to master <br>anything find<br> interest in<br> everything",
    step: "Step 4 out of 8 on the path of digital enlightment",
    classname: 'positionCenterRight',
  },
  {
    id: 6,
    title:
      "individuals <br>flourish <br>if culture<br> and wisdom <br>are shared",
    step: "Step 5 out of 8 on the path of digital enlightment",
    classname: 'positionCenterRight',
  },
  {
    id: 7,
    title: "train for <br>perfection but <br>aim for more",
    step: "Step 6 out of 8 on the path of digital enlightment",
    classname: 'positionCenterLeft',
  },
  {
    id: 8,
    title: "take pride in your <br>work but do not <br>seek praise",
    step: "Step 7 out of 8 on the path of digital enlightment",
    classname: 'positionCenterLeft',
  },
  {
    id: 9,
    title: "temporary <br> sacrifice brings <br>lasting results",
    step: "Step 8 out of 8 on the path of digital enlightment",
    classname: 'positionCenterLeft',
  },
  {
    id: 10,
    title: "become a monk",
    step: `Interested in joining our monastery?<br>Check out our current openings on <span style = "text-decoration:underline;font-weight:400">media.monks.com/careers</span>.`,
    classname: 'positionTopRight',
  },
];

// PRELOADER FUNCTIONALITY
window.addEventListener("load", () => {
  const overlay = document.querySelector(".preloader_wrapper");
  overlay.className += ' hidden';
});

// APP FUNCTIONALITY
nextBtn.addEventListener("click", () => {
  page++;
  if (page === slides.length) {
    page = 0;
    backgroundImg.style.transform = `translateX(0px)`;
    backgroundImg.style.transition = "all 1s ease";
    contentLoader(page);
  } else {
    const offset = `translateX(-${sliderLength - 2}px)`;
    backgroundImg.style.transform += offset;
    backgroundImg.style.transition = "all 1s ease";
    contentLoader(page);
  }
});
prevBtn.addEventListener("click", () => {
  if (page === 0) {
    page = slides.length - 1;
    backgroundImg.style.transform = `translateX(-${sliderLength * (slides.length - 1) }px)`;
    backgroundImg.style.transition = "all 1s ease";
  } else {
    const offset = `translateX(${sliderLength - 2}px)`;
    backgroundImg.style.transform += offset;
    backgroundImg.style.transition = "all 1s ease";
    page--;
    console.log(page);
  }
  contentLoader(page);
});

slides.forEach((slide, index) => {
  let offset = `translateX(${sliderLength - 2}px)`;
  slide.addEventListener("click", () => {
    if (index === slides.length - 1) {
      page === 0;
      backgroundImg.style.transform = `translateX(0px)`;
      backgroundImg.style.transition = "all 1s ease";
      
      contentLoader(page);
    } else {
      backgroundImg.style.transform = `translateX(-${index * sliderLength}px)`;
      
      contentLoader(index);
    }

    //TRIED TO REMOVE THE CLASS FROM ALL THE OVERLAY BOXES AND ADD ONLY TO THE ONE 
    //WITH THE EVENT LISTENER BUT IT WASN'T WORKING...
    // slides.classList.remove('white')
    // slide[index].classList.add('white')
    page = index;
  });
});


function contentLoader(page){
  titles.style.opacity = 0;
  setTimeout(function(){
    for (let i = titles.classList.length - 1; i>= 0; i--) {
      console.log(titles.classList) 
      const className = titles.classList[i];
      if (className.startsWith('position')) {
          titles.classList.remove(className);
      }
    }
    if (page == 9){
      steps.classList.add("footer");
      socialIcons.style.display = 'flex'
    }
    else{
      steps.classList.remove("footer");
      socialIcons.style.display = 'none'
    }
    titles.innerHTML = content[page].title;
    titles.classList.add(content[page].classname);
    titles.style.opacity = 1;

  }, 700)
  
  
  steps.innerHTML = content[page].step;
}
