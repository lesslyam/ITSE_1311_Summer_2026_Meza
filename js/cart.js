const money = new Intl.NumberFormat(
    "en-US",
    {
        style: "currency",
        currency: "USD"
    }
);

const cartContainer =
    document.getElementById("cartContainer");

const totalsContainer =
    document.getElementById("totals");

const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

if (cart.length === 0) {

    cartContainer.innerHTML = `
        <div class="alert alert-info">
            Your cart is empty.
        </div>
    `;

} else {

    let subtotal = 0;

    let html = `
    <table class="table table-striped table-dark">
        <thead>
            <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Line Total</th>
            </tr>
        </thead>
        <tbody>
    `;

    cart.forEach(item => {

        const lineTotal =
            item.price * item.quantity;

        subtotal += lineTotal;

        html += `
        <tr>
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>${money.format(lineTotal)}</td>
        </tr>
        `;
    });

    html += `
        </tbody>
    </table>
    `;

    cartContainer.innerHTML = html;

    const taxRate = 0.0825;

    const tax =
        subtotal * taxRate;

    const finalTotal =
        subtotal + tax;

    totalsContainer.innerHTML = `
        <h5>
            Subtotal:
            ${money.format(subtotal)}
        </h5>

        <h5>
            Tax:
            ${money.format(tax)}
        </h5>

        <h4>
            Total:
            ${money.format(finalTotal)}
        </h4>
    `;
}

const thankYouModal =
    document.getElementById("thankYouModal");

if (thankYouModal) {

    const thankModal =
        new bootstrap.Modal(
            thankYouModal
        );

    const submitButton =
        document.getElementById("submitOrder");

    const cancelButton =
        document.getElementById("confirmCancel");

    submitButton.addEventListener(
        "click",
        function() {

            localStorage.removeItem("cart");

            thankModal.show();

            setTimeout(function() {

                window.location.href =
                    "menu.html";

            }, 2500);
        }
    );

    cancelButton.addEventListener(
        "click",
        function() {

            localStorage.removeItem("cart");

            const cancelModal =
                bootstrap.Modal.getInstance(
                    document.getElementById(
                        "cancelModal"
                    )
                );

            cancelModal.hide();

            thankModal.show();

            setTimeout(function() {

                window.location.href =
                    "menu.html";

            }, 2500);
        }
    );
}