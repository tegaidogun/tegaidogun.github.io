const url = 'assets/resume.pdf';

let pdfDoc = null,
    pageNum = 1,
    canvas = document.querySelector('#pdf-render'),
    ctx = canvas.getContext('2d');

// Asynchronous download of the PDF
pdfjsLib.getDocument(url).promise.then(pdfDoc_ => {
    pdfDoc = pdfDoc_;
    renderPage(pageNum);
});

function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        // Calculate scale based on the canvas width
        const viewport = page.getViewport({ scale: 1 });
        const canvasWidth = window.innerWidth;
        const scale = canvasWidth / viewport.width;
        const scaledViewport = page.getViewport({ scale });

        // Adjust canvas size to match scale and device pixel ratio
        const outputScale = window.devicePixelRatio || 1;
        canvas.width = Math.floor(scaledViewport.width * outputScale);
        canvas.height = Math.floor(scaledViewport.height * outputScale);
        canvas.style.width = Math.floor(scaledViewport.width) + "px";
        canvas.style.height = Math.floor(scaledViewport.height) + "px";

        // Scale the context to ensure sharpness
        ctx.setTransform(outputScale, 0, 0, outputScale, 0, 0);

        const renderContext = {
            canvasContext: ctx,
            viewport: scaledViewport
        };

        page.render(renderContext).promise.then(() => {
            // Page rendering is finished
        });
    });
}
