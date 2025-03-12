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