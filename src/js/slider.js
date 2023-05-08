const reviewsSlider = document.querySelector('.reviews');
const reviewBtns = document.querySelectorAll('.review-btn');
const reviews = [...document.querySelectorAll('.review')];
const indicators = [...document.querySelectorAll('.indicator')];
let isMoving;
let currentIndex = 1;
let activeSlider = 0;

function showActiveIndicator(){
    console.log(reviews.length)
  indicators.forEach(ind => ind.classList.remove('active'));
  let activeIndicator;
  if(currentIndex === 0 || currentIndex === reviews.length - 2){
    activeIndicator = indicators.length - 1;
  } else if (currentIndex === reviews.length - 1 || currentIndex === 1){
    activeIndicator = 0;
  } else {
    activeIndicator = currentIndex - 1;
  }
  indicators[activeIndicator].classList.add('active');
}

/*function moveSlider(){
  reviewsSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
  showActiveIndicator();
  console.log("se movio")
};*/

function moveSlider(){
  let aja = document.querySelector(`.review-${activeSlider}`)
  const obj = document.querySelector('.reviews');
  const obj2 = obj.getElementsByTagName("div").length;
  aja.style.transform = `translateX(-${currentIndex <= (obj2-1) ?currentIndex * 100:(currentIndex=1)*100}%)`;
  //showActiveIndicator();
  console.log("se movio")
  aja.addEventListener('transitionend', () => {
    isMoving = false;
    if(currentIndex === 0){
      currentIndex = reviews.length - 2;
      aja.style.transitionDuration = '1ms';
      return moveSlider();
    }
    if(currentIndex === reviews.length - 1){
      currentIndex = 1;
      aja.style.transitionDuration = '1ms';
      return moveSlider();
    }
    aja.style.transitionDuration = '300ms';
  })
};

function handleReviewBtnClick(e){
  console.log(e.currentTarget.id)
  if(isMoving){ return };
  isMoving = true;
  e.currentTarget.id === 'next'
    ? currentIndex++
    : currentIndex--;
  moveSlider();
}

function handleIndicatorClick(e){
  if(isMoving){ return };
  isMoving = true;
  currentIndex = indicators.indexOf(e.target) + 1;
  moveSlider();
}

// Event Listeners
/*reviewBtns.forEach((btn, k) => {
  btn.addEventListener('click', handleReviewBtnClick);
  console.log(btn, k)
})*/

reviewBtns.forEach((btn, k) => {
  btn.addEventListener('click', (e)=>{
    console.log(btn.ariaSelected)
    console.log(e.currentTarget.id)
    if(isMoving){ return };
    isMoving = true;
    activeSlider=btn.ariaSelected.substring(5)
    console.log("at",activeSlider)
    e.currentTarget.id === btn.ariaSelected
      ? currentIndex++
      : currentIndex--;
    moveSlider();
  });
})

for(let i=0; i<reviewBtns.length; i++){
  reviewBtns[i].addEventListener('click', handleReviewBtnClick);
}

indicators.forEach(ind => {
  ind.addEventListener('click', handleIndicatorClick);
})

reviewsSlider.addEventListener('transitionend', () => {
  isMoving = false;
  if(currentIndex === 0){
    currentIndex = reviews.length - 2;
    reviewsSlider.style.transitionDuration = '1ms';
    return moveSlider();
  }
  if(currentIndex === reviews.length - 1){
    currentIndex = 1;
    reviewsSlider.style.transitionDuration = '1ms';
    return moveSlider();
  }
  reviewsSlider.style.transitionDuration = '300ms';
})
