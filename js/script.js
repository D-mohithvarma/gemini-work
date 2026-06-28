/**
 * Modern Nexus System Logics
 * Implements micro-interactions, validations, and UI state events.
 */

document.addEventListener('DOMContentLoaded', () => {
    initializeContactForm();
    initializeGalleryEffects();
});

/**
 * Handle Contact Input Streams & Feedback states
 */
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    const feedbackBox = document.getElementById('formFeedback');

    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Emulate standard 300ms server network latency overhead
        const submitButton = contactForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        submitButton.innerText = "Transmitting Processing...";

        setTimeout(() => {
            // Success response state validation handling
            feedbackBox.classList.remove('hidden', 'bg-red-50', 'text-red-600');
            feedbackBox.classList.add('bg-emerald-50', 'text-emerald-700');
            feedbackBox.innerText = "✓ System verified: Payload successfully routed to Nexus data stream.";
            
            contactForm.reset();
            submitButton.disabled = false;
            submitButton.innerText = "Transmit Payload";
        }, 600);
    });
}

/**
 * Handle image card visual layout shifting micro-interactions
 */
function initializeGalleryEffects() {
    const galleryItems = document.querySelectorAll('.group');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Apply high-shadow state depths on interface tracking focus
            item.classList.add('shadow-md');
        });
        item.addEventListener('mouseleave', () => {
            item.classList.remove('shadow-md');
        });
    });
}