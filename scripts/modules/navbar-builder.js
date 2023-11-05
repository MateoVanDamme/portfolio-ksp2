export { createNavbar };

const pages = {
    "Home": "index.html",
    "My craft library": "craft-library.html",
};

function createNavbar(activePage) {
    const navbar = document.getElementById("navbarNavDropdown");
    const ul = document.createElement('ul');
    ul.classList.add('navbar-nav');

    for (const page in pages) {
        const li = document.createElement('li');
        li.classList.add('nav-item');
        const a = document.createElement('a');
        a.classList.add('nav-link');
        a.href = pages[page];
        a.textContent = page;
        if (page === activePage) {
            a.classList.add('active');
        }
        li.appendChild(a);
        ul.appendChild(li);
    }

    navbar.appendChild(ul);
}