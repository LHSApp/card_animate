function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');

    const tabContent = document.querySelectorAll('.js-tabcontent section');


    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {

            tabContent.forEach((section) => {

                section.classList.remove('ativo')
            })

            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {

            itemMenu.addEventListener('click', function() {
                activeTab(index);
            });
        });

    }
}
initTabNav();


function initAccordion() {
    const accordionList = document.querySelectorAll('.js-accordion dt');

    const activeCalss = 'ativo'
    if (accordionList.length) {
        accordionList[0].classList.add(activeCalss);
        accordionList[0].nextElementSibling.classList.add(activeCalss);

        function activeAccordion() {
            this.classList.toggle(activeCalss);

            this.nextElementSibling.classList.toggle(activeCalss);
        }
        accordionList.forEach((item) => {

            item.addEventListener('click', activeAccordion);
        });
    }
}

initAccordion();