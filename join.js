/**
 * Young Revivalist Academy - Enrollment Portal Logic
 * Asynchronous integration via Getform/Forminit SDK pipeline
 */

// Initialize the Forminit class client instance
const forminit = new Forminit();
const FORM_ID = '2xnwwkxyeoa'; // Your specific Form ID mapped out from dashboard
const REDIRECT_URL = 'https://chat.whatsapp.com/C9uPXMXHD8a9wxtpQzdlQ4?mode=gi_t';

document.getElementById("academyEnrollmentForm").addEventListener("submit", async function(event) {
    // Intercept standard browser form submission reloading pipeline
    event.preventDefault();

    const form = event.target;
    const submitButton = document.getElementById("submitBtn");
    const buttonText = submitButton.querySelector("span");

    // Enforce instant UI loading state parameters
    submitButton.disabled = true;
    buttonText.textContent = "Processing Registration...";
    submitButton.style.opacity = "0.7";

    // Bundle form fields seamlessly into object maps
    const formData = new FormData(form);

    try {
        // Run asynchronous dispatch handler via Forminit SDK wrapper
        const { data, error } = await forminit.submit(FORM_ID, formData);

        if (error) {
            throw new Error(error.message || "SDK submission channel failure");
        }

        // Execution confirmed successful -> route directly to platform assets
        window.location.href = REDIRECT_URL;

    } catch (err) {
        console.error("Transmission Error Logged:", err);
        alert(`Registration failed: ${err.message || 'Check your internet connection and try again.'}`);
        
        // Restore interaction properties if process collapses
        submitButton.disabled = false;
        buttonText.textContent = "Submit Application";
        submitButton.style.opacity = "1";
    }
});
