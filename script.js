 document.addEventListener("DOMContentLoaded", async () => {
      const page = window.location.pathname.split("/").pop().replace(".html", "");
      try {
        const response = await fetch("data.json");
        const data = await response.json();
        const contentElement = document.getElementById("content");

        if (data[page]) {
          const content = data[page].content;
          contentElement.innerText = typeof content === "string"
            ? content
            : JSON.stringify(content, null, 2); // pretty print array
        } else {
          contentElement.innerText = "This QR code page does not exist.";
        }
      } catch (error) {
        document.getElementById("content").innerText = "There was an issue fetching the content.";
        console.error("Error loading data:", error);
      }
    });
