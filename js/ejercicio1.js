// --- EJERCICIO 1: FIGURAS PLANAS ---
export function updateShapeInputs() {
    const shape = document.getElementById("shapeSelect").value;
    const container = document.getElementById("shapeInputs");
    document.getElementById("resEj1").style.display = "none";
    let html = "";

    if (shape === "triangle") {
        html = `<div class="row">
                    <div class="col form-group"><label>Lado a:</label><input type="number" id="tA" step="any"></div>
                    <div class="col form-group"><label>Base (Lado b):</label><input type="number" id="tB" step="any"></div>
                    <div class="col form-group"><label>Lado c:</label><input type="number" id="tC" step="any"></div>
                    <div class="col form-group"><label>Altura (h):</label><input type="number" id="tH" step="any"></div>
                </div>`;
    } else if (shape === "rectangle") {
        html = `<div class="row">
                    <div class="col form-group"><label>Lado a (Altura):</label><input type="number" id="rA" step="any"></div>
                    <div class="col form-group"><label>Lado b (Base):</label><input type="number" id="rB" step="any"></div>
                </div>`;
    } else if (shape === "square") {
        html = `<div class="form-group"><label>Lado a:</label><input type="number" id="sA" step="any"></div>`;
    } else if (shape === "circle") {
        html = `<div class="form-group"><label>Radio (r):</label><input type="number" id="cR" step="any"></div>`;
    }
    container.innerHTML = html;
}

export function calculateShape() {
    const shape = document.getElementById("shapeSelect").value;
    const resBox = document.getElementById("resEj1");
    let area = 0,
        perimeter = 0;

    if (!shape) {
        alert("Seleccione una figura primero.");
        return;
    }

    try {
        if (shape === "triangle") {
            let a = parseFloat(document.getElementById("tA").value);
            let b = parseFloat(document.getElementById("tB").value);
            let c = parseFloat(document.getElementById("tC").value);
            let h = parseFloat(document.getElementById("tH").value);
            if ([a, b, c, h].some(isNaN)) throw "Complete todos los campos";
            perimeter = a + b + c;
            area = (b * h) / 2;
        } else if (shape === "rectangle") {
            let a = parseFloat(document.getElementById("rA").value);
            let b = parseFloat(document.getElementById("rB").value);
            if ([a, b].some(isNaN)) throw "Complete todos los campos";
            perimeter = 2 * (b + a);
            area = b * a;
        } else if (shape === "square") {
            let a = parseFloat(document.getElementById("sA").value);
            if (isNaN(a)) throw "Ingrese el lado del cuadrado";
            perimeter = 4 * a;
            area = Math.pow(a, 2);
        } else if (shape === "circle") {
            let r = parseFloat(document.getElementById("cR").value);
            if (isNaN(r)) throw "Ingrese el radio del círculo";
            perimeter = 2 * Math.PI * r;
            area = Math.PI * Math.pow(r, 2);
        }

        resBox.style.display = "block";
        resBox.innerHTML = `<strong>Resultados:</strong><br>
                            Perímetro = ${perimeter.toFixed(2)}<br>
                            Área = ${area.toFixed(2)}`;
    } catch (err) {
        alert(err);
    }
}
