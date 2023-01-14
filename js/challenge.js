document.addEventListener("DOMContentLoaded", () => {

// Leave comments on my gameplay, such as: "Wow, what a fun game this is."

    let submitButton = document.getElementById("comment-form");
    submitButton.addEventListener("submit", handleSubmit);
  
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

let cancel = setInterval(incrementSeconds, 1000);


// Manually increment and decrement the counter using the plus and minus buttons.

// "Like" an individual number of the counter. I should see the count of the number of "likes" associated with that number displayed.

// Pause the counter, which should:
// pause the counter

// disable all buttons except the pause button

// switch the label on the button from "pause" to "resume"

// Click the "restart" button to restart the counter and re-enable the buttons.


});