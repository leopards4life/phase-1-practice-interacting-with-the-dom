document.addEventListener("DOMContentLoaded", () => {

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
let counter = document.getElementById("counter");

function incrementSeconds() {
    seconds += 1;
    counter.innerText = seconds;
}

function decrementSeconds() {
  seconds -= 1;
  counter.innerText = seconds;
}

let timer = setInterval(incrementSeconds, 1000);


// Manually increment and decrement the counter using the plus and minus buttons.

let minusButton = document.getElementById("minus");
minusButton.addEventListener("click", minusClick)

function minusClick() {
  setTimeout(decrementSeconds);
}

let plusButton = document.getElementById("plus");
plusButton.addEventListener("click", plusClick)

function plusClick() {
  setTimeout(incrementSeconds);
}

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

let likeButton = document.getElementById("heart");
likeButton.addEventListener("click", handleLikes)

let likeCounter = []

function handleLikes() {
  let currentCount = counter.innerText;
  if (likeCounter.includes(currentCount)) {
// Find object in array and increment likeCount

  } else {
  likeCounter.push({
    currentCount: `${currentCount}`, 
    likeCount: 1})
};

console.log(likeCounter);

  let likesList = document.getElementsByClassName("likes");
  const li = document.createElement("li");
  li.innerHTML = `${currentCount} has been liked 1 time`;
  likesList[0].appendChild(li); 
}

// Pause the counter, which should:
// pause the counter

let pauseButton = document.getElementById("pause");
pauseButton.addEventListener("click", handleToggle);

function handleToggle() {
if (pauseButton.value === "ON") {
  pauseButton.value = "OFF";
  pauseButton.innerText = "resume";
  plusButton.disabled = true;
  minusButton.disabled = true;
  likeButton.disabled = true;
  submitButton.disabled = true;
  clearInterval(timer);

} else if (pauseButton.value === "OFF") {
  pauseButton.value = "ON";
  pauseButton.innerText = "pause";
  plusButton.disabled = false;
  minusButton.disabled = false;
  likeButton.disabled = false;
  submitButton.disabled = false;
  // setInterval() Restart timer after pause.
  
};
};

// disable all buttons except the pause button

// switch the label on the button from "pause" to "resume"

// Click the "restart" button to restart the counter and re-enable the buttons.


});