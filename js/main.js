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
        
    };
    
    const onNavItemClick = () => {
        
    };
})();