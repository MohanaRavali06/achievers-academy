# Tuition Center Website

A modern, responsive website template for tuition centers and educational institutions. This template includes all essential sections needed to showcase your tuition center and attract potential students.

## Features

- Modern and responsive design
- Hero section with call-to-action
- About section for teacher and institution information
- Subjects and class timings
- Location map integration
- Free trial class signup form
- WhatsApp quick contact button
- Student testimonials
- Mobile-friendly layout

## Customization Guide

### 1. Basic Information

1. Update the title and meta description in `index.html`:
```html
<title>Your Tuition Center Name</title>
```

2. Replace the logo text in the navbar with your tuition center name:
```html
<a href="#" class="logo">Your Tuition Center Name</a>
```

### 2. Images

1. Add your hero background image:
   - Place your image in the root directory as `hero-bg.jpg`
   - Or update the image path in `styles.css`:
   ```css
   .hero {
       background: linear-gradient(...), url('your-image-path.jpg');
   }
   ```

2. Add teacher's photo:
   - Place your image as `teacher-image.jpg`
   - Or update the image path in the HTML:
   ```html
   <img src="your-image-path.jpg" alt="Teacher's Name" class="teacher-photo">
   ```

### 3. Content Sections

#### About Section
Update the teacher's information and academy features in `index.html`:
```html
<h3>Your Name</h3>
<p>Your qualifications and experience</p>
```

#### Subjects
Modify the subjects array in `script.js`:
```javascript
const subjects = [
    {
        name: 'Your Subject',
        description: 'Your description',
        timing: 'Your timing'
    },
    // Add more subjects
];
```

#### Location
Add your Google Maps embed code in the map-container div:
```html
<div class="map-container">
    <!-- Your Google Maps iframe code -->
</div>
```

#### Contact Information
1. Update the WhatsApp button with your phone number:
```html
<a href="https://wa.me/YOUR_PHONE_NUMBER" class="whatsapp-float">
```

2. Update the address and contact information:
```html
<p><i class="fas fa-map-marker-alt"></i> Your Address</p>
<p><i class="fas fa-phone"></i> Your Contact Number</p>
```

### 4. Styling

You can customize the colors by modifying the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* Add more custom colors as needed */
}
```

## Deployment

1. Purchase a domain name (e.g., from GoDaddy, Namecheap, etc.)

2. Choose a hosting provider:
   - Shared hosting (e.g., Hostinger, Bluehost)
   - Static hosting (e.g., Netlify, Vercel, GitHub Pages)

3. Upload your files:
   - index.html
   - styles.css
   - script.js
   - All image files
   
4. If using static hosting:
   - Create a GitHub repository
   - Push your code to the repository
   - Connect your repository to Netlify/Vercel for automatic deployment

5. Configure your domain:
   - Add DNS records as per your hosting provider's instructions
   - Enable HTTPS for secure connections

## Form Handling

The current form shows a simple alert message. To make it functional:

1. Create a backend API to handle form submissions
2. Update the form submission code in `script.js`:
```javascript
fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
        'Content-Type': 'application/json'
    }
})
```

## Support

For any questions or customization help, feel free to reach out to [Your Contact Information].

## License

This template is free to use for both personal and commercial projects. Attribution is appreciated but not required. 