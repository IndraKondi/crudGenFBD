let StartFunc = async ({ inBodyData }) => {
    let jVarLocalBodyData = inBodyData;
    // let jVarLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    let jVarLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    let jVarLocalFetchUrl = `/bin/Transactions/${jVarLocalBranchName}/InsertToKey/${jVarLocalOrderNumber}/AddOnData`;

    let jVarLocalFetchHeaderObject = {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jVarLocalBodyData)
    };

    let response = await fetch(jVarLocalFetchUrl, jVarLocalFetchHeaderObject);
    let jVarLocalResponse = await response.json();

    return jVarLocalResponse;
};
let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};


export { StartFunc };