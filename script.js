document.getElementById("generate").addEventListener("click", () => {
    const text = document.getElementById("text").value;
    const color = document.getElementById("color").value;
    const bold = document.getElementById("bold").checked;

    if (!text) {
        alert("Bitte gib einen Text ein!");
        return;
    }

    const json = {
        text: text,
        color: color,
        bold: bold || undefined
    };

    const tellrawCommand = `/tellraw @a ${JSON.stringify([json])}`;
    document.getElementById("command").value = tellrawCommand;
});
