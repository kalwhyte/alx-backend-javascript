declare namespace MyCustomGlobals {
  interface document {
    createElement(tagName: 'table'): HTMLTableElement;
    createElement(tagName: 'tbody'): HTMLTableSectionElement;
    createElement(tagName: 'tr'): HTMLTableRowElement;
    createElement(tagName: 'td'): HTMLTableDataCellElement;
  }
}
