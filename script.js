const verdeSlider = document.getElementById("verdeSlider");
const rojoSlider = document.getElementById("rojoSlider");

const verdeColor = document.getElementById("verdeColor");
const rojoColor = document.getElementById("rojoColor");

const verdeHex = document.getElementById("verdeHex");
const rojoHex = document.getElementById("rojoHex");

const verdeBase = "#006847";
const rojoBase = "#ce1126";

function ajustarSaturacion(hex, saturacion) {
    let r = parseInt(hex.substring(1, 3), 16);
    let g = parseInt(hex.substring(3, 5), 16);
    let b = parseInt(hex.substring(5, 7), 16);

    let gris = (r + g + b) / 3;

    r = Math.round(gris + (r - gris) * (saturacion / 100));
    g = Math.round(gris + (g - gris) * (saturacion / 100));
    b = Math.round(gris + (b - gris) * (saturacion / 100));

    return "#" + 
        r.toString(16).padStart(2, "0") + 
        g.toString(16).padStart(2, "0") + 
        b.toString(16).padStart(2, "0");
}

function actualizarVerde() {
    const nuevoColor = ajustarSaturacion(verdeBase, verdeSlider.value);
    verdeColor.style.backgroundColor = nuevoColor;
    verdeHex.textContent = "Código HEX: " + nuevoColor;
}

function actualizarRojo() {
    const nuevoColor = ajustarSaturacion(rojoBase, rojoSlider.value);
    rojoColor.style.backgroundColor = nuevoColor;
    rojoHex.textContent = "Código HEX: " + nuevoColor;
}

verdeSlider.addEventListener("input", actualizarVerde);
rojoSlider.addEventListener("input", actualizarRojo);

actualizarVerde();
actualizarRojo();
