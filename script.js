function scrollToSection() {
    document.getElementById("features").scrollIntoView({ behavior: "smooth" });
}

function placeOrder(event) {
    event.preventDefault();
    document.getElementById("successMsg").innerText =
        " Order placed successfully!";
}

function searchMedicine() {
    let input = document.getElementById("search").value.toLowerCase();
    let rows = document.querySelectorAll("#medicineTable tr");

    rows.forEach((row, index) => {
        if (index === 0) return;
        row.style.display = row.innerText.toLowerCase().includes(input)
            ? ""
            : "none";
    });
}
