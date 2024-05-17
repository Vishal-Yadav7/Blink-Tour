

console.log("hello")
const userName = document.getElementById("name");
const submitBtn = document.getElementById("submitBtn");
const { PDFDocument, rgb, degrees } = PDFLib;


submitBtn.addEventListener("click", () => {
    const val =userName.value;
    if (val.trim() !== "" && userName.checkValidity()) {
        // console.log(val);
        generatePDF(val);
      } else {
        userName.reportValidity();
      }
});
const generatePDF = async (name) => {
    const existingPdfBytes = await fetch("Certificate.pdf").then((res) =>
      res.arrayBuffer()
    );

    // Load a PDFDocument from the existing PDF bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);
    pdfDoc.registerFontkit(fontkit);

    
  //get font
  const fontBytes = await fetch("Anastasia.ttf").then((res) =>
  res.arrayBuffer()
);
// Embed our custom font in the document
const AnastasiaFont = await pdfDoc.embedFont(fontBytes);
// Get the first page of the document
const pages = pdfDoc.getPages();
const firstPage = pages[0];

// Draw a string of text diagonally across the first page
firstPage.drawText(name, {
  x: 300,
  y: 270,
  size: 36,
  font: AnastasiaFont,
  color: rgb(0, 0, 0),
});
 
  // Serialize the PDFDocument to bytes (a Uint8Array)
  const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
  saveAs(pdfDataUri,"newcertificate.pdf")
};

