document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const portfolioGrid = document.getElementById('portfolioGrid');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const sectionTabs = document.querySelectorAll('.section-tab');
    const sectionPanels = document.querySelectorAll('.section-panel');

    // Initialize hover effect for portfolio items
    initPortfolioHoverEffects();

    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.getAttribute('data-section');
            switchSection(sectionId, tab);
        });
    });

    function initPortfolioHoverEffects() {
        portfolioItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                portfolioGrid.classList.add('has-hovered');
            });
            item.addEventListener('mouseleave', () => {
                portfolioGrid.classList.remove('has-hovered');
            });
        });
    }

    function switchSection(sectionId, clickedTab) {
        sectionTabs.forEach(tab => tab.classList.remove('active'));
        sectionPanels.forEach(panel => panel.classList.remove('active'));

        clickedTab.classList.add('active');

        document.getElementById(sectionId).classList.add('active');
    }
});
