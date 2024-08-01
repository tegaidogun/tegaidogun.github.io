const url = 'assets/resume.pdf';

let pdfDoc = null,
    pageNum = 1,
    scale = 2, // Set initial scale (zoom level)
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Asynchronous download of the PDF
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
});

function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        const outputScale = window.devicePixelRatio || 1;

        // Adjust canvas size to match scale and device pixel ratio
        canvas.width = Math.floor(viewport.width * outputScale);
        canvas.height = Math.floor(viewport.height * outputScale);
        canvas.style.width = Math.floor(viewport.width) + "px";
        canvas.style.height = Math.floor(viewport.height) + "px";

        // Scale the context to ensure sharpness
        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        const renderContext = {
            canvasContext: ctx,
            viewport: viewport
        };

        page.render(renderContext).promise.then(() => {
            // Page rendering is finished
        });
    });
}
