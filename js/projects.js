document.addEventListener('DOMContentLoaded', function() {
    // Initialize all galleries on the page
    document.querySelectorAll('.gallery').forEach(gallery => {
        const items = gallery.querySelectorAll('.gallery-item');
        
        items.forEach(item => {
            item.addEventListener('click', function() {
                const index = this.dataset.index;
                const imgSrc = this.querySelector('img').getAttribute('src');
                const imgAlt = this.querySelector('img').getAttribute('alt');
                const description = document.querySelector(`.image-descriptions div[data-index="${index}"]`).innerHTML;
                
                document.getElementById('modalImage').setAttribute('src', imgSrc);
                document.getElementById('modalImage').setAttribute('alt', imgAlt);
                document.getElementById('modalDescription').innerHTML = description;
                document.getElementById('modalTitle').textContent = imgAlt;
                
                document.getElementById('imageModal').classList.add('show');
                document.body.style.overflow = 'hidden';
            });
        });
    });
    
    // Modal close functionality
    const modalClose = document.querySelector('.modal-close');
    const modal = document.getElementById('imageModal');
    
    if (modalClose && modal) {
        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('show') && e.key === "Escape") {
            closeModal();
        }
    });
    
    function closeModal() {
        document.getElementById('imageModal').classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});