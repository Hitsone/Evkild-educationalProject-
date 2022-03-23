document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.work__button').forEach(function(tabsBtn) {
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path
            document.querySelectorAll('.work__block').forEach(function(tabContent) {
                tabContent.classList.remove('work__block-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('work__block-active')

            const about = event.currentTarget.dataset.about
            document.querySelectorAll('.work__link').forEach(function(stepLink) {
                stepLink.classList.remove('work__link-active')
            })
            document.querySelector(`[data-about="${about}"`).classList.add('work__link-active')
            
        })
    })
})

