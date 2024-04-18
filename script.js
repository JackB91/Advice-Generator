async function getAdvice() {
  //   event.preventDefault();
  const response = await fetch("	https://api.adviceslip.com/advice");
  //   event.preventDefault();

  const wisdomReturned = await response.json();

  console.log(wisdomReturned);
}

getAdvice();
