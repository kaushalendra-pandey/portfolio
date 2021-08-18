const project = document.getElementsByClassName("projects")

const myFunction = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const scrollToProjects = () => {
  window.scrollTo(0,document.body.scrollHeight / 4)
  return

}

const scrollToFooter = () => {
  window.scrollTo(0,document.body.scrollHeight)
}