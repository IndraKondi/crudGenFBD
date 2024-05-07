
let StartFunc = ({ inDataToShow }) => {
    let LocalDataToShow = inDataToShow;
    let jVarLocalBranchName = localStorage.getItem("BranchName");
    
    let LocalFilterScanedData = LocalDataToShow.filter(e => e.BookingData.OrderData.BranchName == jVarLocalBranchName);
    
    if ((LocalDataToShow.length > 0) === false) swal.fire({ title: "No data !", icon: "error" });

    jFLocalHideSpinner();

    var $table = $('#table');

    $table.bootstrapTable("load", LocalFilterScanedData);
};

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};
export { StartFunc }