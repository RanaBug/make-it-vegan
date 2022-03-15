document.querySelector("input.submit-button").addEventListener("click", function () {
    let text = "By submitting a swap, you are agreeing to sharing it on the Make It Vegan website. Click OK to submit, or else click cancel.";
    if (confirm(text) == true) {
      alert("Thank you! Your swap suggestion has been submitted.");
    } else {
      alert("You swap suggestion has not been submitted.");
    }
  })