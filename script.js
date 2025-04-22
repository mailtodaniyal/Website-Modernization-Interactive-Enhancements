        document.addEventListener('DOMContentLoaded', function() {
            const stations = document.querySelectorAll('.station');
            
            stations.forEach(station => {
                station.addEventListener('click', function() {
                    stations.forEach(s => s.classList.remove('active'));
                    this.classList.add('active');
                });
            });

            const form = document.getElementById('contact-form');
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const name = document.getElementById('name').value;
                const email = document.getElementById('email').value;
                const subject = document.getElementById('subject').value;
                const message = document.getElementById('message').value;
                
                alert(`Thank you, ${name}! Your message about "${subject}" has been sent. We'll respond to ${email} soon.`);
                form.reset();
            });

            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-10px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });

            const searchBtn = document.querySelector('.search-btn');
            searchBtn.addEventListener('click', function() {
                const searchInput = document.querySelector('.search-input');
                if(searchInput.value.trim() === '') {
                    searchInput.placeholder = 'Please enter a search term...';
                    searchInput.focus();
                } else {
                    alert(`Searching for: "${searchInput.value}"`);
                }
            });

            setInterval(() => {
                const train = document.querySelector('.train-animation');
                train.style.animationDuration = `${Math.random() * 15 + 10}s`;
            }, 20000);
        });
