// Fichier: usePdfGenerator.ts
import { ref } from 'vue';
import html2pdf from 'html2pdf.js';

export function usePdfGenerator() {
  function generatePDF(contentRef: HTMLElement | null): void {
    console.log("current", contentRef)
    if (!contentRef) return;

    const pdfOptions = {
      margin: 10,
      filename: 'document.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };

    html2pdf().from(contentRef).set(pdfOptions).outputPdf();
  }

  return {
    generatePDF,
  };
}
