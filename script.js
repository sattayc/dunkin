/******************************/
/* menu openen de MENU button */
/******************************/

// 1. Zoek de “menu” button en sla die op in een variabele
const menuButton = document.querySelector("header > button");

// 2. Laat de button luisteren naar clicks en roep toonMenu aan
menuButton.onclick = toonMenu;

// 3. Definieer de functie toonMenu
function toonMenu() {
  const nav = document.querySelector("nav");
  nav.classList.add("toonMenu");
}


/************************************/
/* menu sluiten met de sluit button */
/************************************/

/* JOUW CODE HIER - stap 5 */

// 1. Zoek de “sluit” button en sla die op in een variabele
const sluitButton = document.querySelector("nav > button");

// 2. Laat de button luisteren naar clicks en roep sluitMenu aan
sluitButton.onclick = sluitMenu;

// 3. Maak de functie sluitMenu
function sluitMenu() {
  const nav = document.querySelector("nav");
  nav.classList.remove("toonMenu");
}

