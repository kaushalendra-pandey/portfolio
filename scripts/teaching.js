const projects = [
    {
        title : "Camera Web App",
        description : "This project allows you to take photo, apply filters and ability to download them on your computers",
        link : "https://camera-web-app.netlify.app"
    } ,
    {
        title : "Covid-Tracker",
        description : "An app which takes your country and state and shows the no. of cases with charts.",
        link : "https://covid-around-me.netlify.app"
    } ,
    {
        title : "Flipkart-Reviews",
        description : "An app which return the reviews of various products listed on Flipkart.",
        link : "https://flipkart-reviews.netlify.app"
    } ,
    {
        title : "Geolaction-Finder",
        description : "This app shows you your IP address along with your address, latitude, map and so on..",
        link : "https://get-your-location.netlify.app"
    },
    {
        title : "Copy Constructors in Cpp",
        description : "Copy constructors are constructors which are used to create an object as a copy of another object...",
        link : "https://itskaush.hashnode.dev/copy-constructors-in-c"
    } ,
]

const teachingProject = document.querySelector(".card-container")
// console.log(blogContatiner)

const createBlog = () => {

    return projects.map((project) => {

        let mainDiv = document.createElement("div")
        mainDiv.className = "card"
        let heading = document.createElement("h2")
        heading.innerHTML = project.title
        mainDiv.appendChild(heading)
        let desc = document.createElement("p")
        desc.innerHTML = project.description
        let takeMeButton = document.createElement("button")
        let link = document.createElement("a")
        link.innerHTML = "Visit Website"
        link.setAttribute("href",project.link)
        link.setAttribute("target","_blank")
        takeMeButton.appendChild(link)
        desc.appendChild(takeMeButton)
        desc.className = "desc"
        mainDiv.appendChild(desc)
        teachingProject.appendChild(mainDiv)
        // return mainDiv
        
    })

   
    

}

createBlog()
