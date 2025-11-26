function appendResult(css) {
    const area = document.getElementById('result');
    area.value += css + "\n\n";
}

/* BREAKPOINTS */
function generateBreakpoints() {
    const m = document.getElementById('bp-mobile').value;
    const t = document.getElementById('bp-tablet').value;
    const d = document.getElementById('bp-desktop').value;

    appendResult(`
/* Breakpoints */
@media (max-width:${m}px) {}
@media (min-width:${m}px) and (max-width:${t}px) {}
@media (min-width:${t}px) and (max-width:${d}px) {}
@media (min-width:${d}px) {}
`.trim());
}

/* CONTAINER */
function generateContainer() {
    const maxw = document.getElementById('container-max').value;
    const pad = document.getElementById('container-padding').value;
    const center = document.getElementById('container-center').value;

    appendResult(`
.container {
  max-width:${maxw}px;
  padding:${pad}px;
  ${center === "yes" ? "margin:0 auto;" : ""}
}
`.trim());
}

/* CLAMP */
function generateClamp() {
    const min = document.getElementById('clamp-min').value;
    const pref = document.getElementById('clamp-pref').value;
    const max = document.getElementById('clamp-max').value;

    appendResult(`
font-size: clamp(${min}rem, ${pref}vw, ${max}rem);
`.trim());
}

/* HEADERS */
function generateHeaders() {
    const h1m = document.getElementById('h1-m').value;
    const h1d = document.getElementById('h1-d').value;

    const h2m = document.getElementById('h2-m').value;
    const h2d = document.getElementById('h2-d').value;

    const h3m = document.getElementById('h3-m').value;
    const h3d = document.getElementById('h3-d').value;

    appendResult(`
h1 { font-size: clamp(${h1m}rem, 4vw, ${h1d}rem); }
h2 { font-size: clamp(${h2m}rem, 3vw, ${h2d}rem); }
h3 { font-size: clamp(${h3m}rem, 2vw, ${h3d}rem); }
`.trim());
}

/* GRID */
function generateGrid() {
    const cols = document.getElementById('grid-cols').value;
    const gap = document.getElementById('grid-gap').value;
    const mode = document.getElementById('grid-mode').value;

    appendResult(`
.grid {
  display:grid;
  grid-template-columns: repeat(${mode}, minmax(${100/cols}%, 1fr));
  gap:${gap}px;
}
`.trim());
}

/* FLEX */
function generateFlex() {
    const dir = document.getElementById('flex-dir').value;
    const jc = document.getElementById('flex-justify').value;
    const ai = document.getElementById('flex-align').value;
    const gap = document.getElementById('flex-gap').value;

    appendResult(`
.flex {
  display:flex;
  flex-direction:${dir};
  justify-content:${jc};
  align-items:${ai};
  gap:${gap}px;
}
`.trim());
}

/* RESET */
function resetAll() {
    // textarea ürítése
    document.getElementById('result').value = "";

    // minden input visszaállítása az alapértékre
    document.getElementById('bp-mobile').value = 480;
    document.getElementById('bp-tablet').value = 768;
    document.getElementById('bp-desktop').value = 1280;

    document.getElementById('container-max').value = 1200;
    document.getElementById('container-padding').value = 20;
    document.getElementById('container-center').value = "yes";

    document.getElementById('clamp-min').value = 1.2;
    document.getElementById('clamp-pref').value = 3;
    document.getElementById('clamp-max').value = 3.5;

    document.getElementById('h1-d').value = 3;
    document.getElementById('h1-m').value = 1.8;
    document.getElementById('h2-d').value = 2.4;
    document.getElementById('h2-m').value = 1.6;
    document.getElementById('h3-d').value = 1.8;
    document.getElementById('h3-m').value = 1.3;

    document.getElementById('grid-cols').value = 3;
    document.getElementById('grid-gap').value = 20;
    document.getElementById('grid-mode').value = "auto-fit";

    document.getElementById('flex-dir').value = "row";
    document.getElementById('flex-justify').value = "center";
    document.getElementById('flex-align').value = "center";
    document.getElementById('flex-gap').value = 20;
}

/* EVENT DISPATCHER */
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const type = btn.dataset.type;
        if (type === "breakpoints") generateBreakpoints();
        if (type === "container") generateContainer();
        if (type === "clamp") generateClamp();
        if (type === "headers") generateHeaders();
        if (type === "grid") generateGrid();
        if (type === "flex") generateFlex();
        if (type === "reset") resetAll();
    });
});
