export { showAlert }

function showAlert(message) {
    // Display a Bootstrap success alert
    var successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success';
    successAlert.textContent = message;

    successAlert.style.position = 'fixed';
    successAlert.style.bottom = '1%';
    successAlert.style.left = '50%';
    successAlert.style.transform = 'translate(-50%, -50%)';

    document.body.appendChild(successAlert);

    // Remove the alert after a few seconds
    setTimeout(function () {
        document.body.removeChild(successAlert);
    }, 2000);
}