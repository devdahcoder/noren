window.addEventListener("load", (e) => {
    // alert("Page fully loaded")

    const index = 0;
    const button = document.querySelectorAll(".bnt");
    const commentSlider = document.querySelector("comment-slider-display"),
    const image = document.querySelector
    const comments = [
        {
            index: 0,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 1,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 2,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 3,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 4,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 5,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 6,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Totton",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
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