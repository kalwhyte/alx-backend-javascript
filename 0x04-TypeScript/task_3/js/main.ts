import { RowID, RowElement } from "./interface";
import * as CRUD from './crud';

const row: RowElement = {
	firstName: 'Guillaume',
	lastName: 'Salva',
};

const newRowID: RowID = CRUD.insert(row);
console.log('CRUD.insert: Insert row', row);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.update(newRowID, updatedRow);
console.log('CRUD.update: Update row ${newRowID}', updatedRow);

CRUD.deleteRow(newRowID);
console.log('CRUD.deleteRow: Delete row ${newRowID}');
