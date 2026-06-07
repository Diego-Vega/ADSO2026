// --- EJERCICIO 2: EDADES ---
let ages = [];

export function addAge() {
    if (ages.length >= 10) return alert("Ya se ingresaron las 10 edades.");

    const ageInput = document.getElementById("ageInput");
    const errorSpan = document.getElementById("ageError");
    let age = parseInt(ageInput.value);

    if (isNaN(age) || age < 1 || age > 120) {
        errorSpan.style.display = "block";
        ageInput.value = "";
        return;
    }

    errorSpan.style.display = "none";
    ages.push(age);

    document.getElementById("ageCount").innerText = ages.length;
    document.getElementById("ageListDisplay").innerText =
        `[${ages.join(", ")}]`;
    ageInput.value = "";
    ageInput.focus();

    if (ages.length === 10) {
        calculateAges();
    }
}

export function calculateAges() {
    let menores = 0,
        mayores = 0,
        adultosMayores = 0;
    let suma = 0;
    let minAge = ages[0];
    let maxAge = ages[0];

    ages.forEach((age) => {
        if (age < 18) menores++;
        if (age >= 18) mayores++;
        if (age >= 60) adultosMayores++;

        if (age < minAge) minAge = age;
        if (age > maxAge) maxAge = age;
        suma += age;
    });

    let promedio = suma / ages.length;

    const resBox = document.getElementById("resEj2");
    resBox.style.display = "block";
    resBox.innerHTML = `
        <strong>Estadísticas del grupo:</strong><br>
        - Menores de edad (<18): ${menores}<br>
        - Mayores de edad (>=18): ${mayores}<br>
        - Adultos mayores (>=60): ${adultosMayores}<br>
        - Edad más baja: ${minAge}<br>
        - Edad más alta: ${maxAge}<br>
        - Promedio de edades: ${promedio.toFixed(2)}
    `;

    document.getElementById("btnResetAges").style.display = "block";
}

export function resetAges() {
    ages = [];
    document.getElementById("ageCount").innerText = "0";
    document.getElementById("ageListDisplay").innerText = "[]";
    document.getElementById("resEj2").style.display = "none";
    document.getElementById("btnResetAges").style.display = "none";
}
