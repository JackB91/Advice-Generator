const dice = document.getElementById("dice");
dice.addEventListener("click", getAdvice);

async function getAdvice() {
  const response = await fetch("	https://api.adviceslip.com/advice");

  const wisdomReturned = await response.json();

  const advice = wisdomReturned.slip.advice;
  const id = wisdomReturned.slip.id;

  document.getElementById("p").innerHTML = advice;
  document.getElementById("h2").innerHTML = "ADVICE " + "#" + id;

  console.log(wisdomReturned);
}
