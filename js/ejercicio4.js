// --- EJERCICIO 4: EMISORA ---
let encuestados = [];

export function toggleEmisoraView(view) {
    const form = document.getElementById("emisoraForm");
    const search = document.getElementById("emisoraSearch");
    const btnAdd = document.getElementById("btnTabAdd");
    const btnSearch = document.getElementById("btnTabSearch");

    if (view === "add") {
        form.style.display = "block";
        search.style.display = "none";
        btnAdd.style.backgroundColor = "var(--primary)";
        btnSearch.style.backgroundColor = "#6b7280";
    } else {
        form.style.display = "none";
        search.style.display = "block";
        btnAdd.style.backgroundColor = "#6b7280";
        btnSearch.style.backgroundColor = "var(--primary)";
        document.getElementById("resEj4").style.display = "none";
    }
}

export function addPerson(event) {
    event.preventDefault();

    if (encuestados.length >= 6) {
        alert("Ya se ha alcanzado el límite de 6 personas encuestadas.");
        return;
    }

    const persona = {
        nombre: document.getElementById("pNombre").value,
        cedula: document.getElementById("pCedula").value,
        fechaNacimiento: document.getElementById("pFecha").value,
        correo: document.getElementById("pCorreo").value,
        residencia: document.getElementById("pResidencia").value,
        origen: document.getElementById("pOrigen").value,
        canciones: [
            document.getElementById("pCancion1").value,
            document.getElementById("pCancion2").value,
            document.getElementById("pCancion3").value,
        ],
    };

    encuestados.push(persona);
    document.getElementById("personCount").innerText = encuestados.length;

    document.getElementById("formEncuesta").reset();
    alert(
        "Persona agregada exitosamente. Posición en vector: " +
            (encuestados.length - 1),
    );

    if (encuestados.length === 6) {
        document.getElementById("btnSubmitEncuesta").disabled = true;
        document.getElementById("btnSubmitEncuesta").style.backgroundColor =
            "#9ca3af";
        document.getElementById("btnSubmitEncuesta").innerText = "Cupo Lleno";
    }
}

export function searchPerson() {
    const posInput = document.getElementById("searchPos").value;
    const resBox = document.getElementById("resEj4");

    if (posInput === "") return alert("Ingrese una posición.");

    let pos = parseInt(posInput);
    if (pos < 0 || pos > 5) return alert("La posición debe estar entre 0 y 5.");

    if (encuestados[pos] === undefined) {
        resBox.style.display = "block";
        resBox.innerHTML = `<span class="error-msg" style="display:block">No hay ninguna persona registrada en la posición ${pos}.</span>`;
        return;
    }

    let p = encuestados[pos];
    resBox.style.display = "block";
    resBox.innerHTML = `
        <strong>Información de la persona [Posición ${pos}]</strong><br>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #e5e7eb;">
        <b>Nombre:</b> ${p.nombre} <br>
        <b>Cédula:</b> ${p.cedula} <br>
        <b>Fecha Nac.:</b> ${p.fechaNacimiento} <br>
        <b>Correo:</b> ${p.correo} <br>
        <b>C. Residencia:</b> ${p.residencia} <br>
        <b>C. Origen:</b> ${p.origen} <br>
        <br><b>Top 3 Canciones:</b><br>
        1. ${p.canciones[0]}<br>
        2. ${p.canciones[1]}<br>
        3. ${p.canciones[2]}
    `;
}
