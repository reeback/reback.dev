document.title ="reback.dev " + "| " + document.title; // Ustawia tytuł strony na "reback.dev".

fetch("header.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("header").innerHTML = html;
    });

fetch("glownaStrona.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("glownaStrona").innerHTML = html;
    });