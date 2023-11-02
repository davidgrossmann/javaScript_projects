const left = document.querySelector(".left");
const right = document.querySelector(".right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");
const bottom = document.querySelector(".bottom");

let slideNumber = 1;

const length = images.length;
console.log("počet obrázků " + length);

// vytvoření koleček pod sliderem

for (let i = 0; i < length; i++) {
    const div = document.createElement("div");
  div.className = "button";
  bottom.appendChild(div);
}

const buttons = document.querySelectorAll(".button");
buttons[0].style.backgroundColor = "white";

//funkce, která resetuje barvu koleček

const resetBg = () => {
    buttons.forEach((button) => {
      button.style.backgroundColor = "transparent";
    });
  };

// naslouchač, který řeší, na které kolečko se klikne 
buttons.forEach((button, i) => {
    button.addEventListener("click", () => {
      resetBg();
      slider.style.transform = `translateX(-${i * 800}px)`;
      slideNumber = i + 1;
      button.style.backgroundColor = "white";
    });
  });


  // funkce která řeší správnou barvu koleček

  const changeColor = ()=>{
    resetBg()
    buttons[slideNumber-1].style.backgroundColor = "white";
  }




const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber*800}px)`;
    slideNumber ++; 
    console.log("číslo slidu " + slideNumber);
};

const firstSlide = () => {
    slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
        console.log("číslo slidu " + slideNumber);
}

const previousSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber - 2) * 800}px)`;
    slideNumber--;
    console.log("číslo slidu " + slideNumber);
};

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length - 1) * 800}px)`;
    slideNumber = length;
    console.log("číslo slidu " + slideNumber);
}

right.addEventListener("click", () => {
    slideNumber < length ? nextSlide() : firstSlide(); 
    changeColor();
});         
    // Prodloužený zápis toho výše je:
    // if (slideNumber < length) { nextSlide();  
    // } else {
    //     firstSlide();
    // }
    
left.addEventListener("click", ()=> {
    slideNumber > 1 ? previousSlide() : lastSlide();
    changeColor();
})

