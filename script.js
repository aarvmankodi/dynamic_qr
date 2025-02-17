document.addEventListener("DOMContentLoaded", async () => {
    const page = window.location.pathname.split("/").pop().replace(".html", "");
    try {
        const response = await fetch("data.json");
        const data = await response.json();
        if (data[page]) {
            document.getElementById("title").innerText = data[page].title;
            document.getElementById("content").innerText = data[page].content;
        } else {
            document.getElementById("title").innerText = "Page Not Found";
            document.getElementById("content").innerText = "This QR code page does not exist.";
        }
    } catch (error) {
        document.getElementById("title").innerText = "Error Loading Data";
        document.getElementById("content").innerText = "There was an issue fetching the content.";
    }
});
