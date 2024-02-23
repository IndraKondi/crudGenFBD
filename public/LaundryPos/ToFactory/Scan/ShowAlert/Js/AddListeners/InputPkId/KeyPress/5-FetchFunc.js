import { StartFunc as StartFuncRowpk } from "./FetchHeaders/EntryFile.js";

let StartFunc = async () => {
    let jVarLocalRowPk = StartFuncRowpk();
    console.log("jVarLocalRowPk:",jVarLocalRowPk);

    let jVarLocalFetchUrl = `/bin/QrCodes/Generate/${jVarLocalRowPk}`;

    let response = await fetch(jVarLocalFetchUrl);
    let jVarLocalResponse = await response.json();
    return jVarLocalResponse;

};

export { StartFunc };