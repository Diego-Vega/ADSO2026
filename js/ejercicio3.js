// --- EJERCICIO 3: VECTORES ---
export function parseAndValidateArray(strArray) {
    let arr = strArray.split(",").map((n) => parseInt(n.trim()));
    if (arr.length !== 5) throw "El vector debe tener exactamente 5 números.";
    if (arr.some(isNaN)) throw "Solo se permiten números enteros.";

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1])
            throw "Los números no están en orden ascendente estricto.";
    }
    return arr;
}

export function mergeVectors() {
    try {
        let vec1Str = document.getElementById("vec1").value;
        let vec2Str = document.getElementById("vec2").value;

        if (!vec1Str || !vec2Str) throw "Debe llenar ambos campos.";

        let v1 = parseAndValidateArray(vec1Str);
        let v2 = parseAndValidateArray(vec2Str);

        let mixedList = v1.concat(v2).sort((a, b) => a - b);

        const resBox = document.getElementById("resEj3");
        resBox.style.display = "block";
        resBox.innerHTML = `<strong>Lista Mezclada y Ordenada:</strong><br>
                            <span style="font-size:1.2rem; color:var(--primary);">${mixedList.join(" ")}</span>`;
    } catch (err) {
        alert("Error: " + err);
    }
}
