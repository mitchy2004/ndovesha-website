async function loadComponent(id, file) {
    try {
        const response = await fetch(file);

        if (!response.ok) {
            throw new Error(`Failed to load ${file}`);
        }

        document.getElementById(id).innerHTML = await response.text();
    } catch (error) {
        console.error(error);
    }
}

document.addEventListener("DOMContentLoaded", async () => {

    // Load navbar
    await loadComponent("navbar", "components/navbar.html");

    // Initialize navbar JavaScript
    initializeNavbar();

    // Load footer
    await loadComponent("footer", "components/footer.html");

});