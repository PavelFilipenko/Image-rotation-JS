var current_rotation = 0;
document
  //The Document method querySelector() returns the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
  .querySelector("#rotate-button")
  //The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.
  .addEventListener("click", function () {
    current_rotation += 90;
    document.querySelector("#sample").style.transform =
      "rotate(" + current_rotation + "deg)";
  });

document.querySelector("#zero-button").addEventListener("click", function () {
  current_rotation = 0;
  document.querySelector("#sample").style.transform =
    "rotate(" + current_rotation + "deg)";
});
document.querySelector("#minus-button").addEventListener("click", function () {
  current_rotation -= 90;
  document.querySelector("#sample").style.transform =
    "rotate(" + current_rotation + "deg)";
});
