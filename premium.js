// Simple JavaScript untuk fungsionalitas dasar
        document.addEventListener('DOMContentLoaded', function() {
            // Tombol add to cart
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const productName = this.closest('.product-card').querySelector('.product-name').textContent;
                    alert(Produk ${productName} telah ditambahkan ke keranjang!);
                });
            });
            
            // Smooth scroll untuk anchor links
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
        });