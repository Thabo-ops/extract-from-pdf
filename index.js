const PDFExtract = require('pdf.js-extract').PDFExtract;
const pdfExtract = new PDFExtract();
// const options = {}; /* see below */
// pdfExtract.extract('Ngubane_Thabo.pdf', options, (err, data) => {
//   if (err) return console.log(err);
//   console.log(data.pages[0]);
// });


// const WordExtractor = require("word-extractor");
// const extractor = new WordExtractor();
// const extracted = extractor.extract("word-template.doc");
// extracted.then((doc) => {
// console.log(doc);
// });


// const extracted = extractor.extract("Style ID Roadmap.docx");
// extracted.then((doc) => {
// console.log(doc);
// });


var toPdf = require("office-to-pdf")
var fs = require("fs")
var wordBuffer = fs.readFileSync("./Style ID Roadmap.docx")

toPdf(wordBuffer).then(
  (pdfBuffer) => {
    fs.writeFileSync("./test.pdf", pdfBuffer)
  }, (err) => {
    console.log(err)
  }
)