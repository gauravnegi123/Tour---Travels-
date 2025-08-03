let pickupAutocomplete, destinationAutocomplete;

function initAutocomplete() {
    pickupAutocomplete = new google.maps.places.Autocomplete(document.getElementById('pickup'));
    destinationAutocomplete = new google.maps.places.Autocomplete(document.getElementById('destination'));
}

function calculateFare(distanceKm, timeMin) {
    const baseFare = 40;
    const ratePerKm = 5;
    const ratePerMin = 2;
    return baseFare + (distanceKm * ratePerKm) + (timeMin * ratePerMin);
}

function getDistance() {
    const pickup = document.getElementById('pickup').value;
    const destination = document.getElementById('destination').value;

    if (!pickup || !destination) {
        document.getElementById('price').textContent = "Please enter valid locations.";
        return;
    }

    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix({
        origins: [pickup],
        destinations: [destination],
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
        if (status === 'OK') {
            const element = response.rows[0].elements[0];

            if (element.status === 'OK') {
                const distanceText = element.distance.text;  // e.g., "12.3 km"
                const timeText = element.duration.text;      // e.g., "25 mins"

                const distanceKm = parseFloat(distanceText.replace(' km', '').replace(',', ''));
                const timeMin = parseFloat(timeText.replace(' mins', '').replace(' min', ''));

                const fare = calculateFare(distanceKm, timeMin);
                document.getElementById('price').textContent = `Estimated Fare: ₹${fare.toFixed(2)} (Distance: ${distanceText}, Time: ${timeText})`;
            } else {
                document.getElementById('price').textContent = "Could not calculate distance.";
            }
        } else {
            document.getElementById('price').textContent = "Error fetching distance.";
        }
    });
}

document.getElementById('cab-form').addEventListener('submit', function(e) {
    e.preventDefault();
    getDistance();
});

window.initAutocomplete = initAutocomplete;


