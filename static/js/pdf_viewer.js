let pdfDoc = null;
let currentPage = 1;
let totalPages = 0;
let rotation = 0;  // Initialize rotation variable
const pdfUrl = '/static/uploads/maths.pdf';

// To Load the PDF
pdfjsLib.getDocument(pdfUrl).promise.then((pdf) => {
    pdfDoc = pdf;
    totalPages = pdf.numPages;
    renderPage(currentPage, rotation);  
}).catch((error) => {
    console.error("Error loading PDF:", error);
});

// Function to render a page with the given rotation
function renderPage(pageNum, rotationAngle) {
    pdfDoc.getPage(pageNum).then((page) => {
        const canvas = document.getElementById('pdf-canvas');
        const context = canvas.getContext('2d');
        
        // To Set the viewport with rotation
        const viewport = page.getViewport({ scale: 1.5, rotation: rotationAngle });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        page.render({
            canvasContext: context,
            viewport: viewport
        });

        document.getElementById('page-info').textContent = `Page ${pageNum} of ${totalPages}`;
    });
}

// Admin function to change the page with rotation support
function changePage(page) {
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        renderPage(currentPage, rotation);
        socket.emit('change_page', { page: currentPage, rotation: rotation });
    }
}

// Function to rotate the page clockwise by 90 degrees
function rotatePage() {
    rotation = (rotation - 360) % 360;  // Rotate in upside down  - incase page in upside down
    renderPage(currentPage, rotation);
    socket.emit('rotate_page', { rotation: rotation });  // Broadcast rotation change
}

// Listens for admin's rotation change and updates viewer pages accordingly
socket.on('page_changed', (data) => {
    currentPage = data.page;
    rotation = data.rotation || 0;  // Set rotation if available
    renderPage(currentPage, rotation);
});

socket.on('rotate_page', (data) => {
    rotation = data.rotation;
    renderPage(currentPage, rotation);
});