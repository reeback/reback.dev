const sections = [
    ["header", "header.html"],
    ["menu", "menu.html"],
    ["glownaStrona", "glownaStrona.html"],
    ["ibs", "ibs-page.html"],
    ["footer", "footer.html"]
];

sections.forEach(([id, file]) => {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Cannot load ${file}`);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(console.error);
});

function showPage() {
document.getElementById("my").style.display = "block";
}