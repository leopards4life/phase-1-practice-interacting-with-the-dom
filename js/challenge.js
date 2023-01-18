document.addEventListener("DOMContentLoaded", () => {
  timer;
});

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

let commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", handleSubmit);

let submitButton = document.getElementById("submit");

  function handleSubmit(event) {
    let userComment = document.getElementById("comment-input");
    event.preventDefault();
    let commentList = document.getElementById("list");
    let li = document.createElement("li");
    li.innerHTML = userComment.value;
    commentList.appendChild(li);
    userComment.value = " ";
  }

// See the timer increment every second once the page has loaded.
let seconds = 0;
const counter = document.getElementById("counter");

function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds;
}

function decrementSeconds() {
  seconds -= 1;
  counter.innerText = seconds;
}

const timer = setInterval(incrementSeconds, 1000);


// Manually increment and decrement the counter using the plus and minus buttons.

const minusButton = document.getElementById("minus");
minusButton.addEventListener("click", minusClick);

function minusClick() {
  setTimeout(decrementSeconds);
}

const plusButton = document.getElementById("plus");
plusButton.addEventListener("click", plusClick);

function plusClick() {
  setTimeout(incrementSeconds);
}

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

const likeButton = document.getElementById("heart");
likeButton.addEventListener("click", handleLikes);

let numbers = [];

function handleLikes() {
  let likesList = document.getElementsByClassName("likes");
  const li = document.createElement("li");
  let currentCount = counter.innerText;
  numbers.push(currentCount);
  let numberOfLikes = [...numbers].filter(x => x==currentCount).length;
  li.innerHTML = `${currentCount} has been liked ${numberOfLikes} time(s)`;
  likesList[0].appendChild(li); 
};


// Pause the counter, which should:
// pause the counter

const pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", handleToggle);

let isPaused = true;

function handleToggle() {
  isPaused ? stopCounter() : resumeCounter();
};

function stopCounter() {
  clearInterval(timer);
  isPaused = false;
  pauseButton.innerText = "resume";
  plusButton.disabled = true;
  minusButton.disabled = true;
  likeButton.disabled = true;
  submitButton.disabled = true;
}

function resumeCounter() {
  setInterval(incrementSeconds, 1000);
  isPaused = true;
  pauseButton.innerText = "pause";
  plusButton.disabled = false;
  minusButton.disabled = false;
  likeButton.disabled = false;
  submitButton.disabled = false;
};



// disable all buttons except the pause button

// switch the label on the button from "pause" to "resume"

// Click the "restart" button to restart the counter and re-enable the buttons.

