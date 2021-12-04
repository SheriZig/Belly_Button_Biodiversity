d3.selectAll("body").on("change",updatepage);

function updatepage() {
    var dropdownMenu = d3.selectAll("#selections").node();
    var dropdownMenuID = dropdownMenu.id;
    var selectionOption = dropdownMenu.value;

    console.log(dropdownMenuID);
    console.log(selectionOption);

};