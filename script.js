
document.addEventListener("DOMContentLoaded", function () {

    setInterval(() => {
        const result = document.getElementById("aiResult");
        const confidenceText = document.getElementById("confidenceText");
        const progressFill = document.getElementById("progressFill");

        let confidence = Math.floor(Math.random() * 40) + 60;

        if (Math.random() > 0.5) {
            result.innerText = "BUY";
            result.style.color = "#2ecc71";
        } else {
            result.innerText = "SELL";
            result.style.color = "#ff5fa2";
        }

        confidenceText.innerText = "Confidence: " + confidence + "%";
        progressFill.style.width = confidence + "%";

    }, 2500);

    // زرار الدخول
    document.getElementById("enterBtn").addEventListener("click", function () {
        window.location.href = "index.html";
    });

});