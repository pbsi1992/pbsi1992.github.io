document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.profile-card.portrait').forEach((portraitCard, i) => {
        const viewBtn = portraitCard.querySelector('.view-details');
        const landscapeCard = document.querySelectorAll('.profile-card.landscape')[i];
        if (viewBtn && landscapeCard) {
            viewBtn.addEventListener('click', () => {
                portraitCard.classList.add('hidden');
                landscapeCard.classList.remove('hidden');
            });
            const backBtn = landscapeCard.querySelector('.back-to-portrait');
            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    landscapeCard.classList.add('hidden');
                    portraitCard.classList.remove('hidden');
                });
            }
        }
    });
});