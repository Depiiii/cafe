import React from 'react';
import jsPDF from 'jspdf';
import Transaksi from './Transaksi';

const StrukPrinter = ({ transaksiItem }) => {
  const printPDF = () => {
    const doc = new jsPDF();
    const element = document.getElementById('content');
    doc.fromHTML(element, 15, 15, { width: 170 });
    doc.save('struk.pdf');
  };


    return (
      <div>
      <Transaksi transaksiItem={transaksiItem} />
  <button onClick={this.printPDF}>Print PDF</button>
    </div>
      // <button onClick={this.printPDF}> Print PDF</button>
    );
  }


export default StrukPrinter;