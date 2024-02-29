import { StartFunc as StartFuncreadFile } from '../../kLowDb/ReadFileList/readFile.js';
import { StartFunc as StartFuncReadFileFromModal } from '../../kLowDb/ReadFileList/readFileFromModal.js';
import { StartFunc as StartFunReadFileById } from '../../kLowDb/ReadFileList/readFileById.js';
import { StartFunc as StartFuncGetTableSchema } from '../../kLowDb/GetTableSchema/GetColumns.js';
import { StartFunc as StartFuncGetRowCountById } from '../../kLowDb/ReadFromFile/RowCountById.js';
import { StartFunc as StartFuncGetRowCount } from '../../kLowDb/ReadFromFile/RowCount.js';
import { StartFunc as StartFunRowDataByKeyId } from '../../kLowDb/ReadFromFile/RowDataByKeyId.js';


let GetFunc = () => {
    return StartFuncreadFile();
};

let GetDataOnlyFunc = () => {
    let LocalFromLowDb = StartFuncreadFile();

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetIdFunc = ({ inId }) => {
    let LocalFromLowDb = StartFunReadFileById({ inId });

    if (LocalFromLowDb === false) {
        return false;
    };

    return LocalFromLowDb.JsonData;
};

let GetRowDataFunc = ({ inKey, inId }) => {
    return StartFunRowDataByKeyId({ inKey, inId });

};

let GetRowCountByIdFunc = ({ inKey, inId }) => {
    return StartFuncGetRowCountById({ inKey, inId });

};

let GetRowCountFunc = () => {
    return StartFuncGetRowCount();
};

let GetFromModalFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetFromModalUuidAndTSFunc = () => {
    return StartFuncReadFileFromModal();
};

let GetBodyCheckFunc = () => {
    return StartFuncGetTableSchema();
};

export {
    GetFunc, GetDataOnlyFunc, GetFromModalFunc,
    GetFromModalUuidFunc, GetFromModalUuidAndTSFunc,
    GetIdFunc, GetBodyCheckFunc, GetRowDataFunc, GetRowCountFunc, GetRowCountByIdFunc
};