x=0
function changedarkness() {
  x++
  if (x&2) {
    document.getElementById("header").style.backgroundColor="#555555"
    document.getElementById("header").style.color="lightgrey"
    document.getElementById("body").style.backgroundColor="#333333"
  }
  else {
    document.getElementById("header").style.backgroundColor="white"
    document.getElementById("header").style.color="#333333"
    document.getElementById("body").style.backgroundColor="#fafafa"
  }
}
