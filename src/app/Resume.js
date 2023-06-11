import React, {useState} from 'react';
// import { Document, Page } from 'react-pdf';
// import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
// pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;
// import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
import { Document, Page, pdfjs } from "react-pdf";
// import pdfjsWorker from "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.entry";
// pdfjs.GlobalWorkerOptions.workerSrc = pdfjsWorker;
// import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';

pdfjs.GlobalWorkerOptions.workerPort = new Worker(
  'node_modules/pdfjs-dist/build/pdf.worker.entry.js',
);

const Resume = () => {
    const [error, setError] = useState(null);
  
    const handleLoadError = (error) => {
        setError({ error });
      };
    console.log(error);


  return (
    
    <div>
    <div>
      <Document workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js" onLoadError={handleLoadError}>
        <Page fileUrl="./resume.pdf">

        </Page>
      </Document>
    </div>
    </div>
  )
}

export default Resume
