document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const sections = document.querySelectorAll('section');
const options = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});
function toggleDescription(id) {
    const desc = document.getElementById(id);
    if (desc.style.display === "none") {
        desc.style.display = "block";
    } else {
        desc.style.display = "none";
    }
}
    // Saat halaman di-load, tambahkan animasi masuk (slide-in)
    window.addEventListener('load', () => {
        document.body.classList.add('page-enter');
    });

    // Saat pindah halaman, tambahkan animasi keluar (slide-out)
    window.addEventListener('beforeunload', (event) => {
        document.body.classList.add('page-exit');
    });
    // Menambahkan kelas 'page-loaded' setelah halaman dimuat
        window.addEventListener('load', function() {
            document.body.classList.add('page-loaded');
        });

        // Fungsi toggle deskripsi
        function toggleDescription(id) {
            const desc = document.getElementById(id);
            if (desc.style.display === "none") {
                desc.style.display = "block";
            } else {
                desc.style.display = "none";
            }
        }