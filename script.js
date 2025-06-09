// Form submission handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('trial-form');
    
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            phone: document.getElementById('phone').value,
            class: document.getElementById('class').value,
            timestamp: new Date().toLocaleString()
        };
        
        try {
            // Replace 'your-formspree-endpoint' with your actual Formspree form ID
            const response = await fetch('https://formspree.io/f/mjkrvzpp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                // Show success message
                showNotification('Thank you for signing up! We will contact you shortly.', 'success');
                form.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            showNotification('Sorry, there was an error. Please try again or contact us directly.', 'error');
            console.error('Form submission error:', error);
        }
    });
});

// Notification system
function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <p>${message}</p>
            ${type === 'success' 
                ? '<i class="fas fa-check-circle"></i>' 
                : '<i class="fas fa-exclamation-circle"></i>'
            }
        </div>
    `;
    
    document.body.appendChild(notification);

    // Add show class for animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add subject cards dynamically
const subjects = [
    {
        name: 'Mathematics',
        description: 'Comprehensive mathematics covering algebra, geometry, and more',
        
    },
    {
        name: 'Science',
        description: 'Physics, Chemistry, and Biology with practical applications',
        
    },
    {
        name: 'English',
        description: 'Grammar, comprehension, and communication skills',
        
    }
];

const subjectsGrid = document.querySelector('.subjects-grid');
if (subjectsGrid) {
    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'subject-card';
        card.innerHTML = `
            <h3>${subject.name}</h3>
            <p>${subject.description}</p>
            
        `;
        subjectsGrid.appendChild(card);
    });
}

// Add testimonials dynamically
const testimonials = [
    {
        name: 'Student Name 1',
        class: 'Class 10',
        text: 'The teaching methodology here is excellent. My grades improved significantly.'
    },
    {
        name: 'Student Name 2',
        class: 'Class 9',
        text: 'The personalized attention helped me understand complex topics easily.'
    },
    {
        name: 'Student Name 3',
        class: 'Class 8',
        text: 'Regular practice tests and feedback helped me track my progress.'
    }
];

const testimonialsSlider = document.querySelector('.testimonials-slider');
if (testimonialsSlider) {
    testimonials.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.text}"</p>
                <div class="testimonial-author">
                    <strong>${testimonial.name}</strong>
                    <span>${testimonial.class}</span>
                </div>
            </div>
        `;
        testimonialsSlider.appendChild(card);
    });
}

// Add styles for subject cards and testimonial cards
const style = document.createElement('style');
style.textContent = `
    .subject-card {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .subject-card h3 {
        color: var(--primary-color);
        margin-bottom: 1rem;
    }
    
    .subject-card .timing {
        margin-top: 1rem;
        color: #666;
    }
    
    .testimonial-card {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .testimonial-content p {
        font-style: italic;
        margin-bottom: 1rem;
    }
    
    .testimonial-author {
        display: flex;
        flex-direction: column;
    }
    
    .testimonial-author span {
        color: #666;
        font-size: 0.9rem;
    }
`;
document.head.appendChild(style);

// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Close mobile menu when clicking on a link
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
}); 