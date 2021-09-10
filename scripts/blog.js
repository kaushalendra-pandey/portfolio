const blogs = [
    {
        title : "Next.js",
        description : "Next.js is a framework build over react.js which, as they claim, is laden up with all the features needed for production. If you are...",
        link : "https://itskaush.hashnode.dev/nextjs-what-and-why"
    } ,
    {
        title : "Sweetalerts",
        description : "Alerts have been a major part of a developer's life. Be it from testing code flow in the development or telling a user th..",
        link : "https://itskaush.hashnode.dev/sweetalerts-beautiful-alerts"
    } ,
    {
        title : "Doing things without React!",
        description : "Everyone who has been working with REACT has come across a situation where he needs to render the same component for so many items...",
        link : "https://itskaush.hashnode.dev/doing-things-without-react"
    } ,
    {
        title : "Constructors in CPP",
        description : "Object-Oriented Programming is a paradigm of programming which is based on the concepts of Objects. It is a style of p...",
        link : "https://itskaush.hashnode.dev/constructors-in-c"
    },
    {
        title : "Copy Constructors in Cpp",
        description : "Copy constructors are constructors which are used to create an object as a copy of another object...",
        link : "https://itskaush.hashnode.dev/copy-constructors-in-c"
    } ,
]

const blogContatiner = document.querySelector(".card-container")
console.log(blogContatiner)

const createBlog = () => {

    return blogs.map((blog) => {

        let mainDiv = document.createElement("div")
        mainDiv.className = "card"
        let heading = document.createElement("h2")
        heading.innerHTML = blog.title
        mainDiv.appendChild(heading)
        let desc = document.createElement("p")
        desc.innerHTML = blog.description
        let readMore = document.createElement("span")
        let link = document.createElement("a")
        link.innerHTML = "Read More"
        link.setAttribute("href",blog.link)
        link.setAttribute("target","_blank")
        readMore.appendChild(link)
        desc.appendChild(readMore)
        desc.className = "desc"
        mainDiv.appendChild(desc)
        blogContatiner.appendChild(mainDiv)
        // return mainDiv
        
    })

   
    

}

createBlog()
