//Program Title
//Program Title

//Add an Event Listener to the button to run the  function
document.getElementById("btn").addEventListener("click", btnClicked);
// Store order code in function
function btnClicked() {
  //INPUT
  let species = document.getElementById("one-in").value.toLowerCase();
  let continent = document.getElementById("two-in").value.toLowerCase();
  let herb = document.getElementById("three-in").value.toLowerCase();
  let moist = document.getElementById("four-in").value.toLowerCase();
  let numCorrect = 0;

  //PROCESS
  if (species === "5" || species === "five") {
    numCorrect = numCorrect + 1;
  }
  if (continent === "The Lakers" || continent === "Lakers") {
    numCorrect = numCorrect + 1;
  }
  if (herb === "1" || herb === "one") {
    numCorrect = numCorrect + 1;
  }
  if (moist === "Travel") {
    numCorrect = numCorrect + 1;
  }

  if (numCorrect === 4) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>4/4 (100%)</p> <p>Wow! Great job!</p> `;
  } else if (numCorrect === 3) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>3/4 (75%)</p><p>Well done!</p>`;
  } else if (numCorrect === 2) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>2/4 (50%)</p> <p>Nice! Try again?</p>`;
  } else if (numCorrect === 1) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>1/4 (25%)</p><p>There's room for improvement.</p>`;
  } else if (numCorrect === 0) {
    document.getElementById(
      "output"
    ).innerHTML = ` <p>0/4 (0%)</p><p>Oh...</p>`;
  }
}
