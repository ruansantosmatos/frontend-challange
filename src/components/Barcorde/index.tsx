'use client'

import React from "react"

type BarcodeProps = {
  value: string,
  children: React.ReactNode,
  style?: string
}

export function Barcode({ value, children, style }: BarcodeProps) {

  function printBarcode() {
    const printWindow = window.open("", "_blank") as Window

    const styles = {
      body:
        `body {
          margin: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }`
    }

    const rootHTML = `
      <html>
        <head>
          <title>${value}</title>
          <script src="https://unpkg.com/jsbarcode@latest/dist/JsBarcode.all.min.js"></script>
          <style>
            ${styles.body}
          </style>
        </head>
        <body>
          <svg id="barcode"></svg>
          <script>
            JsBarcode("#barcode", ${value.trim()}, { format: "EAN13",  flat: true })
            window.print()
          </script>
        </body>
      </html>
    `

    printWindow.document.write(rootHTML)
    printWindow.document.close()
  }

  return (
    <button onClick={printBarcode} className={style}>
      {children}
    </button>
  )
}