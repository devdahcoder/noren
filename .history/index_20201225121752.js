window.addEventListener("load", (e) => {
    // alert("Page fully loaded")

    const index = 0;
    const button = document.querySelectorAll(".bnt");
    const comments = [
        {
            
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