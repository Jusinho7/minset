const links = [
    { id: 'home-link', url: '../../views/home.html', errorMsg : "Sorry, we couldn't load the home at this time."},
    { id: 'menu-link', url: '../../views/menu.html', errorMsg: "Sorry, we couldn't load the menu at this time." },
    { id: 'info-link', url: '../../views/info.html', errorMsg: "Sorry, we couldn't load the info at this time." },
    { id: 'contact-link', url: '../../views/contact.html', errorMsg: "Sorry, we couldn't load the contact at this time." }
];

const section = document.getElementById('content-dynamique');

function loadPage(url, errorMsg) {
    fetch(url)
        .then(response => response.text())
        .then(data => section.innerHTML = data)
        .catch(error => {
            section.innerHTML = `<p>${errorMsg}</p>`;
            console.error(error);
        });
}

loadPage('../../views/home.html', "Sorry, we couldn't load the home at this time.");

links.forEach(link => {
    const element = document.getElementById(link.id);
    if (element) {
        element.addEventListener('click', e => {
            e.preventDefault();
            loadPage(link.url, link.errorMsg);
        });
    }
});
