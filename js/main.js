 const menuButton = document.querySelector('nav button[aria-controls="mobile-menu"]');
        const mobileMenu = document.getElementById('mobile-menu');

        menuButton.addEventListener('click', () => {
            const expanded = menuButton.getAttribute('aria-expanded') === 'true' || false;
            menuButton.setAttribute('aria-expanded', !expanded);
            mobileMenu.classList.toggle('hidden');
        });

        // Example of incrementing stats for demo (can be replaced with real data)
        document.getElementById('donators-count').textContent = '1,234';
        document.getElementById('collects-count').textContent = '15';
        document.getElementById('total-donations').textContent = '5 670 000';

        // Donation form submission handler (simple alert for demo)
        const donationForm = document.getElementById('donation-form');
        donationForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Merci pour votre générosité ! Votre don a bien été pris en compte.');
            donationForm.reset();
        });