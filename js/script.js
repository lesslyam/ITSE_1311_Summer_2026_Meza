const MENU_ITEMS = [
{
    id: 1,
    name: "Gear-Griddle Bento",
    description: "Crisp rice, smoked tofu, brass-pepper glaze",
    price: 10.99,
    category: "Breakfast"
},
{
    id: 2,
    name: "Cyber Croissant",
    description: "Buttery croissant with egg and cheese",
    price: 7.99,
    category: "Breakfast"
},
{
    id: 3,
    name: "Neon Pancake Stack",
    description: "Blueberry pancakes with syrup",
    price: 8.99,
    category: "Breakfast"
},
{
    id: 4,
    name: "Quantum Burger",
    description: "Beef burger with futuristic sauce",
    price: 12.99,
    category: "Lunch"
},
{
    id: 5,
    name: "Frenchie Wrap",
    description: "Chicken wrap with fresh vegetables",
    price: 11.49,
    category: "Lunch"
},
{
    id: 6,
    name: "Nano Nachos",
    description: "Loaded nachos with cheese",
    price: 9.99,
    category: "Lunch"
},
{
    id: 7,
    name: "Galaxy Steak",
    description: "Grilled steak with potatoes",
    price: 18.99,
    category: "Dinner"
},
{
    id: 8,
    name: "Orbit Pasta",
    description: "Creamy pasta with garlic sauce",
    price: 14.99,
    category: "Dinner"
},
{
    id: 9,
    name: "Rocket Salmon",
    description: "Salmon filet with vegetables",
    price: 17.99,
    category: "Dinner"
},
{
    id: 10,
    name: "Cosmic Chicken",
    description: "Roasted chicken with herbs",
    price: 15.99,
    category: "Dinner"
}
];

const money = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
});

const menuContainer = document.getElementById("menuContainer");

if (menuContainer) {

    let tableHTML = `
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
    `;

    MENU_ITEMS.forEach(item => {

        tableHTML += `
        <tr>
            <td>${item.name}</td>
            <td>${item.description}</td>
            <td>${item.category}</td>
            <td>${money.format(item.price)}</td>
        </tr>
        `;
    });

    tableHTML += `
        </tbody>
    </table>
    `;

    menuContainer.innerHTML = tableHTML;
}


const reservationForm =
    document.getElementById("reservationForm");

if (reservationForm) {

    reservationForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const errors = [];

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const partySize =
            document.getElementById("partySize").value;

        const date =
            document.getElementById("date").value;

        const time =
            document.getElementById("time").value;

        const notes =
            document.getElementById("notes").value.trim();

        const newsletter =
            document.getElementById("newsletter").checked;

        const seating =
            document.querySelector(
                'input[name="seating"]:checked'
            );

        if (name === "") {
            errors.push("Name is required.");
        }

        if (name.length > 20) {
            errors.push("Name must be 20 characters or less.");
        }

        if (email === "") {
            errors.push("Email is required.");
        }

        if (partySize === "") {
            errors.push("Party size is required.");
        }

        if (date === "") {
            errors.push("Date is required.");
        }

        if (time === "") {
            errors.push("Time is required.");
        }

        if (!seating) {
            errors.push("Select a seating preference.");
        }

        if (notes.length > 30) {
            errors.push(
                "Dietary notes must be 30 characters or less."
            );
        }

        const messageArea =
            document.getElementById("messageArea");

        if (errors.length > 0) {

            messageArea.innerHTML = `
            <div class="alert alert-danger">
                ${errors.join("<br>")}
            </div>
            `;

        } else {

            const reservation = {
                name: name,
                email: email,
                partySize: partySize,
                date: date,
                time: time,
                seating: seating.value,
                dietaryNotes: notes,
                newsletter: newsletter
            };

            console.log(reservation);

            messageArea.innerHTML = `
            <div class="alert alert-success">
                Reservation submitted successfully!
            </div>
            `;
        }

    });
}