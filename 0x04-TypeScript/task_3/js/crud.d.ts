import { RowID, RowElement } from "./interface.ts";

declare module 'crud' {
  export function createRow(row: RowElement): RowID;
	export function readRow(rowID: RowID): RowElement;
	export function updateRow(rowID: RowID, row: RowElement): void;
	export function deleteRow(rowID: RowID): void;
}
export function insert(row: RowElement): number {
	throw new Error("Function not implemented.");
}

export function update(newRowID: number, updatedRow: RowElement) {
	throw new Error("Function not implemented.");
}

export function deleteRow(newRowID: number) {
	throw new Error("Function not implemented.");
}

