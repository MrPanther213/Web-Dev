let originalTitle = document.getElementById("mainTitle").innerHTML;

function changeTitle() {
    document.getElementById("mainTitle").innerHTML = "bob";
}

function revertTitle() {
    document.getElementById("mainTitle").innerHTML = originalTitle;
}

// Call the changeTitle function to change the title
changeTitle();
document.addEventListener("DOMContentLoaded", function() {
    // Your existing code here
    changeTitle( bob);
});
