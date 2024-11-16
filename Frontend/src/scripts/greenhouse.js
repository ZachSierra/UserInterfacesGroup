function clickCard(originalCard) {
    // Get the sibling of the original card (the new card)
    const newCard = originalCard.nextElementSibling;

    // Toggle visibility between the original and new cards
    if (newCard.classList.contains('d-none')) {
        // Show the new card and hide the original
        originalCard.classList.add('d-none');
        newCard.classList.remove('d-none');
    } else {
        // Show the original card and hide the new card
        originalCard.classList.remove('d-none');
        newCard.classList.add('d-none');
    }
}
