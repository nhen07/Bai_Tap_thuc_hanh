
const cacLinkMenu = document.querySelectorAll('.navlist a');
const trangHienTai = window.location.pathname.split('/').pop().toLowerCase();

cacLinkMenu.forEach(function (link) {
    const tenFileCuaLink = link.getAttribute('href').toLowerCase();

    if (tenFileCuaLink === trangHienTai) {
        link.classList.add('active');
    }
});