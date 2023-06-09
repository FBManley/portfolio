import React, {useState} from 'react';
// import { Document, Page } from 'react-pdf';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import { Document, Page, pdfjs } from "react-pdf";
import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";

pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;


const Resume = () => {
    const [error, setError] = useState(null);
  
    const handleLoadError = (error) => {
        setError({ error });
      };
    console.log(error);

  return (
    
    <div>
    <div>
      <Document file="http://www.pdf995.com/samples/pdf.pdf" onLoadError={handleLoadError}>
        <Page pageNumber={1} />
      </Document>
    </div>
    </div>
  )
}

export default Resume
