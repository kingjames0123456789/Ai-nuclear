async function askAI() {
    const question = document.getElementById("question").value;
    const responseElement = document.getElementById("response");

    if (!question) {
        responseElement.innerText = "Please enter a question!";
        return;
    }

    responseElement.innerText = "Thinking...";

    const API_URL = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B";
    const API_KEY = "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";  // WARNING: DO NOT EXPOSE PUBLICLY

    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ inputs: question })
    });

    const data = await response.json();
    responseElement.innerText = data[0]?.generated_text || "No response.";
}
