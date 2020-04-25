function addRow() 
{
    var gameName = document.getElementById("gameName");
    var console = document.getElementById("console");
    var table = document.getElementById("gameCollection");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    row.insertCell(0).innerHTML = '<input type="button" id="delete" value="Delete Game" onClick="Javascript:deleteRow(this)">';
    row.insertCell(1).innerHTML = gameName.value;
    row.insertCell(2).innerHTML = console.value;
}

function deleteRow(obj)
{
    var index = obj.parentNode.parentNode.rowIndex;
    var table = document.getElementById("gameCollection");
    table.deleteRow(index);
}