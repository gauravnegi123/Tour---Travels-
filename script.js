document.getElementById('cab-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    let basefare = 40;
    let rateperkm = 5;
    let ratepermin = 2;

    let distance = 10; // in km
    let time = 20; // in minutes

    // Calculate total fare
    let totalfare = basefare + (rateperkm * distance) + (ratepermin * time);

    // Display result
    document.getElementById('price').textContent = "Estimated Fare: ₹" + totalfare;
});
