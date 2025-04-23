// Definera array av namn
let people = ["Simon", "Lars", "Agneta", "Lisa"]


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  const button = document.getElementById("searchBtn")
  const input = document.getElementById("searchInput")
  const resultDisplay = document.getElementById("resultDisplay")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  button.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value
    const userInput = input.value
    
    // // 2. Skapa en boolean för found
    let nameFound = false
    
    // // 3. Loopa igenom people-arrayen
    for (let name of people)
    {
      if (name === userInput)
      {
        resultDisplay.innerHTML = "Namn hittades: " + userInput
        nameFound = true
      }
    }

    if (!nameFound)
    {
      resultDisplay.innerHTML = "Namn hittades inte."
    }

    
    // 4. Jämför texten med varje namn i arrayen
    
    // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
    
    // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
    
    });
}



// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});