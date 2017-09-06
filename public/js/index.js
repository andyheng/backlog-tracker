const table = document.querySelectorAll(".games-table tbody"); //get table DOM nodes

for (let i = 0, len = table.length; i < len; i++) { //loop through the table nodes
  let rows = table[i].rows; //rows = the current table's rows

  for (let j = 0, len2 = rows.length; j < len2; j++) { //loop through the rows
    let td = document.createElement("td"); //make a new td
    let num = document.createTextNode(j + 1); //make a new text node that contains the current row number (add 1 to j to get current row $)
    td.appendChild(num); //append the num to the created td
    rows[j].insertBefore(td, rows[j].firstChild); //before the first child (first td) of the current row, insert the created td with the index number
  }
}
