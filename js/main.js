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
        
        window.scrollTo({
        	'behavior': 'smooth',
        	'left': 0,
        	'top': sectionPosition
        });
    };
    
    const onTestimonialChange = () => {
        let firstChild, lastChild;
        const prevArrow = document.querySelector("#aw-testimonials-prev");
        const nextArrow = document.querySelector("#aw-testimonials-next");
        const testimonials = document.querySelector(".aw-testimonials ul");
        
        document.addEventListener("click", () => {
            if(event.target === prevArrow) {
                lastChild = testimonials.lastElementChild;
                testimonials.insertAdjacentElement("afterbegin", lastChild);
            } else if(event.target === nextArrow) {
                firstChild = testimonials.firstElementChild;
                testimonials.insertAdjacentElement("beforeend", firstChild);
            }
        });
    };
    
    const onGalleryImageClick = () => {
        const galleryImageList = document.querySelectorAll("#aw-gallery li");
        const galleryImages = [...galleryImageList];
        
        galleryImages.forEach(image => {
            image.addEventListener("click", event => {
                galleryImageOpen(event.target);
            });
        });
    };
    
    const galleryImageOpen = image => {
        const imageSrc = image.getAttribute("src");
        const openedImage = `
            <div class='aw-backdrop'>
                <img src='${imageSrc}' alt='' />
	            <span class="aw-backdrop-close">X</span>
		    </div>`;

		document.body.insertAdjacentHTML("beforeend", openedImage);
    };
    
})();