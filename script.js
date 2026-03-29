// Placeholder function to simulate game stats from Photon API
function fetchGameStats() {
    // Simulated data, replace with Photon API calls
    setTimeout(() => {
        document.getElementById("player-count").innerText = "1,250";
        document.getElementById("server-info").innerText = "Server 1 (300 players), Server 2 (950 players)";
        document.getElementById("cosmetic-info").innerText = "Limited Edition Mask, Bloody Shirt (New)";
    }, 1000);
}

// Call the fetchGameStats function when the page loads
window.onload = fetchGameStats;
