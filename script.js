document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const portfolioGrid = document.getElementById('portfolioGrid');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const sectionTabs = document.querySelectorAll('.section-tab');
    const sectionPanels = document.querySelectorAll('.section-panel');

    // Initialize hover effect for portfolio items
    initPortfolioHoverEffects();

    // Event: Switch between section tabs
    sectionTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const sectionId = tab.getAttribute('data-section');
            switchSection(sectionId, tab);
        });
    });

    // Functions
    function initPortfolioHoverEffects() {
        // Add mouseover event to portfolio items
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
        // Remove active class from all tabs and panels
        sectionTabs.forEach(tab => tab.classList.remove('active'));
        sectionPanels.forEach(panel => panel.classList.remove('active'));

        // Add active class to the clicked tab
        clickedTab.classList.add('active');

        // Add active class to the corresponding panel
        document.getElementById(sectionId).classList.add('active');
    }
});
