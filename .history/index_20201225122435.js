window.addEventListener("load", (e) => {
    // alert("Page fully loaded")

    const index = 0;
    const button = document.querySelectorAll(".bnt");
    const comments = [
        {
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            
        }
    ]






    button.forEach((button) => {
        button.addEventListener("click", (e) => {
            if(e.target.parentElement.classList.contains("right-btn")) {
                if (index === 0) {
                    index = comments.length
                }

                index--
            }
            if(e.target.parentElement.classList.contains("right-btn")) {
                index++
                if (index === comments.length) {
                    index = 0;
                }

                
            }
        })
    })






    
})