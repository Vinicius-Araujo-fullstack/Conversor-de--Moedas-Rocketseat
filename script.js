
const amount = document.querySelector("#amount");
amount.addEventListener("input", () => {
  const hasCharactersRegex = /\D+/g

  amount.value = amount.value.replace(hasCharactersRegex, "");
})