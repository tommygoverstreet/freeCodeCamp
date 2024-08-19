const dashboardApp = () => {
const body = document.body;
const htmlCount = document.getElementById("count-html");
const idCount = document.getElementById("count-id");
const classCount = document.getElementById("count-classes");
const dashboardOutput = document.getElementById("dashboard_output");

// Dashboard buttons
const htmlBtn = document.getElementById("htmlBtn");
const idsBtn = document.getElementById("idsBtn");
const classesBtn = document.getElementById("classesBtn");

// Get all of the elements, id's, and classes from the document and store them in an array
const elements = document.querySelectorAll("*");
const ids = document.querySelectorAll("[id]");
const classes = document.querySelectorAll("[class]");
let html = "";

// Create an array of elements, id's, and classes
const elementsArray = Array.from(elements);
const idsArray = Array.from(ids);
const classesArray = Array.from(classes);

// Create an array of unique tags, id's and classes
const uniqueTags = [...new Set(elementsArray.map((tag) => tag.tagName))];
const uniqueIds = [...new Set(idsArray.map((id) => id.id))];
const uniqueClasses = [
  ...new Set(classesArray.map((className) => className.className)),
];

// Display the total number of elements, id's, and classes on the page
htmlCount.textContent = elementsArray.length;
idCount.textContent = uniqueIds.length;
classCount.textContent = uniqueClasses.length;

// Event Listeners
// Use elementsArray, idsArray, and classesArray to display the elements, id's, and classes on the page
// if unique then querySelector snippet is displayed
// if not unique then querySelectorAll snippet is displayed
const viewButtons = [htmlBtn, idsBtn, classesBtn];
viewButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dashboardOutput.innerHTML = "";
    if (button === htmlBtn) {
      html = `<h2>HTML Elements</h2>`;
      elementsArray.forEach((element) => {
        html += `<p>${element.tagName.toLowerCase()}</p>`;
      });
    } else if (button === idsBtn) {
      html = `<h2>Element ID's</h2>`;
      uniqueIds.forEach((id) => {
        const idCount = idsArray.filter((element) => element.id === id).length;
        if (idCount > 1) {
          html += `<p>const ${id} = querySelectorAll('#${id}')</p>`;
        } else {
          html += `<p>const ${id} = querySelector('#${id}')</p>`;
        }
      });
    } else if (button === classesBtn) {
      html = `<h2>Element Classes</h2>`;
      uniqueClasses.forEach((className) => {
        const classCount = classesArray.filter(
          (element) => element.className === className
        ).length;
        if (classCount > 1) {
          html += `<p>const ${className} = querySelectorAll('.${className}')</p>`;
        } else {
          html += `<p>const ${className} = querySelector('.${className}')</p>`;
        }
      });
    }
    dashboardOutput.innerHTML = html;
  });
});
}

dashboardApp();
