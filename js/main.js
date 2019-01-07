(() => {
    const mobileWidth = 600;
    
    const addMenuBackground = () => {
        const pageWidth = window.innerWidth;
        const bodyOffset = document.body.scrollTop || document.documentElement.scrollTop;
        const navigation = document.querySelector("header nav");
        
        if(pageWidth > mobileWidth) {
            bodyOffset > 0 ?
            navigation.classList.add("aw-nav-fixed") :
            navigation.classList.remove("aw-nav-fixed");
        }
    };
    
    const reorderResponsiveMenu = () => {
        const pageWidth = window.innerWidth;
        const navContainer = document.querySelector("header nav .aw-container");
        const navigation = document.querySelector("header nav .aw-navigation");
        const mobileNavigation = document.querySelector("body > .aw-navigation");
        
        if(pageWidth <= mobileWidth && navigation) {
            document.body.insertAdjacentElement("afterbegin", navigation);
        } else if(pageWidth > mobileWidth && mobileNavigation) {
            navContainer.insertAdjacentElement("beforeend", mobileNavigation);
        }
    };
    
    const onNavItemClick = () => {
        const navItemList = document.querySelectorAll(".aw-section-link");
        const navItems = [...navItemList];
        
        navItems.forEach(item => {
            item.addEventListener("click", event => {
                event.preventDefault();
                const sectionId = event.target.getAttribute("href") || event.target.dataset.href;

                scrollToSection(sectionId);
            });
        });
    };
    
    const scrollToSection = sectionId => {
        let sectionPosition, sectionOffset;
        const navigationHeight = document.querySelector("header nav").offsetHeight;
        const pageWidth = window.innerWidth;
        
        if(sectionId !== "#") {
            sectionOffset = document.querySelector(sectionId).offsetTop;
            sectionPosition = pageWidth > mobileWidth ? sectionOffset - navigationHeight : sectionOffset;
        } else {
            sectionPosition = 0;
        }
    };
})();