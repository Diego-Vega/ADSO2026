import { calculateShape, updateShapeInputs } from "./ejercicio1.js";
import { addAge, calculateAges, resetAges } from "./ejercicio2.js";
import { mergeVectors } from "./ejercicio3.js";
import { addPerson, searchPerson, toggleEmisoraView } from "./ejercicio4.js";

// --- NAVEGACIÓN Y UI ---
function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("open");
}

function showTab(tabId, element) {
    document
        .querySelectorAll(".card")
        .forEach((card) => card.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");

    document
        .querySelectorAll(".nav-links a")
        .forEach((link) => link.classList.remove("active"));
    element.classList.add("active");

    if (window.innerWidth <= 768) toggleMenu();
}

// Exponer funciones al navegador para que el HTML pueda verlas
window.toggleMenu = toggleMenu;
window.showTab = showTab;

// ejercicio1.js
window.updateShapeInputs = updateShapeInputs;
window.calculateShape = calculateShape;

// ejercicio2.js
window.addAge = addAge;
window.calculateAges = calculateAges;
window.resetAges = resetAges;

// ejercicio3.js
window.mergeVectors = mergeVectors;

// ejercicio4.js
window.toggleEmisoraView = toggleEmisoraView;
window.addPerson = addPerson;
window.searchPerson = searchPerson;
