var button = document.querySelector("button");
button.addEventListener("click", function() {
  console.log("button clicked");
});
setTimeout(() => {
  button.addEventListener("click", function() {
    console.log("button clicked captured even when subscribed late");
  });
}, 2000);
