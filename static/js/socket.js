const socket = io.connect();

// Admin sends page change data
function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderPage(currentPage);
        socket.emit('change_page', { page: currentPage });
    }
}

// Viewer receives page change data
socket.on('page_changed', (data) => {
    currentPage = data.page;
    renderPage(currentPage);
});