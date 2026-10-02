const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const topicSelect = document.getElementById("topic");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    localStorage.setItem("visitorName", nameInput.value);
    localStorage.setItem("visitorTopic", topicSelect.value);

    alert("Saved! Your name and topic are remembered.");
});

document.addEventListener("DOMContentLoaded", () => {
    nameInput.value = localStorage.getItem("visitorName") || "";
    topicSelect.value = localStorage.getItem("visitorTopic") || "general";
});

document.getElementById("clear-btn").addEventListener("click", () => {
    localStorage.removeItem("visitorName");
    localStorage.removeItem("visitorTopic");

    form.reset();

    alert("Saved data cleared.");
});