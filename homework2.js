//Mike Souchitto, HOMEWORK ASSIGNMENT2
// Student firstName, lastName, course, and GPA
var course = ["Math", "English"];
var studentGPA = ["A", "B"];
var lastNameList = ["Smith", "Gonzalez", "Doe", "Gonzalez"];
var firstNameList = ["John", "Amy", "John", "Gio"];

var s1 = {
  fn_: "John",
  ln: "Smith",
  c_: ["Math", "A", "English", "B"]
};
var s2 = {
  fn_: "John",
  ln: "Doe",
  c_: ["English", "C", "Math", "B"]
};
var s3 = {
  fn_: "Amy",
  ln: "Gonzalez",
  c_: ["Math", "A-", "English", "B+", "Biology", "B"]
};
var s4 = {
  fn_: "Gio",
  ln: "Gonzalez",
  c_: ["English", "C"]
};
var s_ = [s1, s2, s3, s4];

// search for the name entered in textbox
function searchFunction() {
  var i = 0;
  var foundList = [];

  // searchName is name is text box
  var searchName = document.getElementById("searchName").value;

  for (i = 0; i < lastNameList.length; i++) {
    if (searchName == lastNameList[i]) {
      foundList.push(firstNameList[i] + " " + lastNameList[i] + "<br/>");
    }
  }
  document.getElementById("studentsFound").innerHTML = foundList;
}

// display information of clicked name
function printO() {
  var clickedName = document.getElementById("studentsFound").innerHTML;
  document.getElementById("gradesTitle").innerHTML = "Grades for: " + clickedName;


  var text = "<ul>";
  for (i = 0; i < course.length; i++) {
    text += "<li>" + course[i] + "</li>" + " " + studentGPA[i] + "<br/>";
  }
  text += "</ul>";

  document.getElementById("GPASection").innerHTML = text;
}

function getGrades() {
  var found = false;
  var i = 0;
  var clickedName = document.getElementById("studentsFound").innerHTML;
  //  var fn_ = clickedName.split(" ");


  while (found != true && i < lastNameList.length) {

  }
}
