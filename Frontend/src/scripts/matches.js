function clickCard(card) {
    // Check if the clicked card is an "original" card
    if (card.classList.contains('original-card')) {
        const newCard = card.nextElementSibling; // Find the sibling new card
        card.classList.add('d-none'); // Hide the original card
        newCard.classList.remove('d-none'); // Show the new card
    }
    // Check if the clicked card is a "new" card
    else if (card.classList.contains('new-card')) {
        const originalCard = card.previousElementSibling; // Find the sibling original card
        card.classList.add('d-none'); // Hide the new card
        originalCard.classList.remove('d-none'); // Show the original card
    }
}
