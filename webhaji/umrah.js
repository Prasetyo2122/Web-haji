document.querySelectorAll('.pricing-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        card.classList.add('scratch-out');
    });
    card.addEventListener('mouseleave', function() {
        card.classList.remove('scratch-out');
    });
});
