class MenuBundle {

    static init() {
        MenuBundle.initMenu();
    }

    static initMenu() {
        document.querySelectorAll('.mod_huh_menu').forEach((menu) => {
            let maxTriggerLevel = menu.getAttribute('data-max-trigger-level'),
                closeDelay = menu.getAttribute('data-close-delay'),
                triggerActivatedLinkClasses = [];

            if (maxTriggerLevel == 0) {
                triggerActivatedLinkClasses.push('a.submenu');
            } else {
                for (let i = 1; i <= maxTriggerLevel; i++) {
                    triggerActivatedLinkClasses.push('.level_' + i + ' > .submenu > a.submenu');
                }
            }

            menu.querySelectorAll(triggerActivatedLinkClasses).forEach((link) => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();

                    if (window.navigator.maxTouchPoints == 0) {

                    }
                });

                link.addEventListener('mouseover', () => {
                    MenuBundle.openSubmenu(menu, link);
                });

                link.addEventListener('touchstart', () => {
                    MenuBundle.openSubmenu(menu, link);
                });

                link.addEventListener('mouseleave', (e) => {
                    console.log('mouseleave link');

                    if (MenuBundle.isElementCurrentlyHovered(link.nextElementSibling)) {
                        return;
                    }

                    setTimeout(() => {
                        if (MenuBundle.isElementCurrentlyHovered(link)) {
                            return;
                        }

                        link.classList.remove('open');
                        link.nextElementSibling.classList.remove('open');
                    }, closeDelay);
                });

                link.nextElementSibling.addEventListener('mouseleave', (e) => {
                    console.log('mouseleave submenu ul');

                    if (MenuBundle.isElementCurrentlyHovered(link)) {
                        return;
                    }

                    setTimeout(() => {
                        if (MenuBundle.isElementCurrentlyHovered(link.nextElementSibling)) {
                            return;
                        }

                        e.target.classList.remove('open');
                        link.classList.remove('open');
                    }, closeDelay);
                });
            });

            menu.addEventListener('mouseleave', (e) => {
                setTimeout(() => {
                    if (MenuBundle.isElementCurrentlyHovered(menu)) {
                        return;
                    }

                    // remove all open classes
                    menu.querySelectorAll('.open').forEach((element) => {
                        element.classList.remove('open');
                    });
                }, closeDelay);
            });

            document.querySelector('body').addEventListener('touchstart', (e) => {
                if (e.target.closest('.mod_huh_menu') !== null) {
                    return;
                }

                setTimeout(() => {
                    if (MenuBundle.isElementCurrentlyHovered(menu)) {
                        return;
                    }

                    // remove all open classes
                    menu.querySelectorAll('.open').forEach((element) => {
                        element.classList.remove('open');
                    });
                }, closeDelay);
            });
        });
    }

    static openSubmenu(menu, link) {
        let openDelay = menu.getAttribute('data-open-delay') ? menu.getAttribute('data-open-delay') : 0;

        if (link.classList.contains('open')) {
            return;
        }

        setTimeout(() => {
            if (!MenuBundle.isElementCurrentlyHovered(link)) {
                return;
            }

            // remove all open classes
            menu.querySelectorAll('.open').forEach((element) => {
                element.classList.remove('open');
            });

            if (!link.classList.contains('open')) {
                link.classList.add('open');
            }

            if (!link.nextElementSibling.classList.contains('open')) {
                link.nextElementSibling.classList.add('open');
            }
        }, openDelay);
    }

    static isElementCurrentlyHovered(element) {
        let found = false;

        document.querySelectorAll( ':hover' ).forEach((hoveredElement) => {
            if (hoveredElement === element) {
                found = true;
            }
        });

        return found;
    }
}

export {MenuBundle};