// Definera array av namn
let people = ["Anna", "Simon", "Lars", "Agneta"]


export function initSearch(people) { // rör ej denna rad

  // Hämta HTML-element
  let button = document.getElementById("searchBtn")
  let input = document.getElementById("searchInput")
  let htmlText = document.getElementById("resultDisplay")
  
  // Lägg till en klickhändelse på "Sök"-knappen
  button.addEventListener("click",() => {
  
    // 1. Hämta texten i searchInput.value

    let userInput = input.value
    
    // 2. Skapa en boolean för found

    let nameFound = false
    
    // 3. Loopa igenom people-arrayen

    for (const name of people)
    {
      if (name === userInput)
      {
        htmlText.innerText = "Namn hittades!"
        nameFound = true
      }
    }

    if (!nameFound)
    {
      htmlText.innerText = "Namn hittades inte."
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