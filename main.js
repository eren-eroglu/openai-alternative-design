const input = document.getElementById("input");

input.addEventListener("keypress", function (event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    const examples = document.querySelector(".examples");
    examples.innerHTML = `
        <input type="text" id="input" placeholder="Ask something to AI" class="input askai form-control p-3 fixed-bottom">`;
    let blankPage = document.createElement("div");
    blankPage.innerHTML = `<div class='text-center pt-5'>Waiting for your question...</div>`;
    examples.appendChild(blankPage);
  }
});
