// import the array which acts as a data source for the list
function makeList() {
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = reconlist.length;

    document.getElementById('reconlist').appendChild(listContainer);
    listContainer.appendChild(listElement);
  
    for (var i = 0; i < numberOfListItems; ++i) {
        // create an item for each one
        const listItem = document.createElement('li');
        // Add the item text
        listItem.innerHTML = "<a href=''>Somelink</a>"+" "+reconlist[i];
        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}

makeList();
