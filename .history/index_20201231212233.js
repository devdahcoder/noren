window.addEventListener("load", () => {
    // alert("Page fully loaded")

    let index = 0;
    const buttons = document.querySelectorAll(".btn");
    const navbar = document.querySelector(".nav-bar");
    const nav = document.querySelector(".mobile-nav");
    const menuBar = document.querySelector(".menu-bar");
    const commentSlider = document.querySelector(".comment-slider-display");
    const comments = [
        {
            index: 0,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Alex",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
        {
            index: 1,
            img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
            name: "Sampson Daniel",
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
            name: "Sampson Fodden",
            job: "UI/UX Designer",
            comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
        },
    ]


    // let commentList = comments.map(comment => ( `
    // <div class="comment-card ${comment.index == 0 ? "active" : ""}" id=${comment.index}>
    //     <div class="comment-card-header">
    //         <div class="comment-header-display">
    //             <div class="comment-profile-image-container">
    //                 <div class="comment-image-container">
    //                     <img class="comment-img" src=${comment.img} alt="">
    //                 </div>
    //             </div>
    //             <div class="comment-profile-detail">
    //                 <p>${comment.name}</p>
    //                 <div class="comment-center">

    //                 </div>
    //                 <p>${comment.job}</p>
    //             </div>
    //         </div>

    //         <div class="comment-number">
    //             <p>${comment.index}</p>
    //         </div>
    //     </div>

        
    //     <div class="comment-details">
    //         <p>${comment.comment}.</p>
    //     </div>
    // </div>
    
    // `
    // ))

    // commentSlider.innerHTML = commentList;




    nav.addEventListener("click", () => {
        if (navbar.classList.toggle("showNav")) {
            menuBar.src = "./assets/images/cancel.png"
        } else {
            // ham.classList.toggle("showClose");
            menuBar.src = "./assets/images/menu.png"
        }
        
    })


    let currentImage = comments[0];

    


    buttons.forEach((button) => {
        button.addEventListener("click", function (event)  {
            if(event.target.parentElement.classList.contains("rightBtn") || event.target.classList.contains("rightBtn")) {
                // index++
                // if (index === comments.length) {
                //     index = 0;
                // }
                console.log("Right")

                let newIndex = currentImage.index + 1;

                currentImage = comments[newIndex]

                commentSlider.style.transform = `translateX(-${currentImage.index * (290 / comments.length)}%)`


            
            
            }
            if(event.target.parentElement.classList.contains("leftBtn") || event.target.classList.contains("leftBtn")) {
 


                if (index === 0) {
                    index = comments.length
                }

                index--

                console.log("Left")


                // let newIndex = currentImage.index - 1;

                // currentImage = comments[newIndex]

                commentSlider.style.transform = `translateX(-${index * (290 / comments.length)}%)`

            
                
            }
        })
    })

    
    let commentList = comments.map(comment => ( `
    <div class="comment-card ${comment.index == 0 ? "active" : ""}" id=${comment.index}>
        <div class="comment-card-header">
            <div class="comment-header-display">
                <div class="comment-profile-image-container">
                    <div class="comment-image-container">
                        <img class="comment-img" src=${comment.img} alt="">
                    </div>
                </div>
                <div class="comment-profile-detail">
                    <p>${comment.name}</p>
                    <div class="comment-center">

                    </div>
                    <p>${comment.job}</p>
                </div>
            </div>

            <div class="comment-number">
                <p>${comment.index}</p>
            </div>
        </div>

        
        <div class="comment-details">
            <p>${comment.comment}.</p>
        </div>
    </div>
    
    `
    ))

    commentSlider.innerHTML = commentList;







    
})














































// window.addEventListener("load", (e) => {
//     // alert("Page fully loaded")

//     const index = 0;
//     const button = document.querySelectorAll(".bnt");
//     const commentSlider = document.querySelector(".comment-slider-display");
//     const comments = [
//         {
//             index: 0,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//         {
//             index: 1,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//         {
//             index: 2,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//         {
//             index: 3,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//         {
//             index: 4,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//         {
//             index: 5,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//         {
//             index: 6,
//             img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHPI4syIBtEAiO1wDxmwyKzorNnuvXArOBhQ&usqp=CAU",
//             name: "Sampson Totton",
//             job: "UI/UX Designer",
//             comment: "We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us."
//         },
//     ]


//     commentSlider.innerHTML = `
//     <div class="comment-card">
//         <div class="comment-card-header">
//             <div class="comment-header-display">
//                 <div class="comment-profile-image-container">
//                     <div class="comment-image-container">
//                         <img class="comment-img" src=${comments[index].img} alt="">
//                     </div>
//                 </div>
//                 <div class="comment-profile-detail">
//                     <p>${comments[index].name}</p>
//                     <div class="comment-center">

//                     </div>
//                     <p>${comments[index].job}</p>
//                 </div>
//             </div>

//             <div class="comment-number">
//                 <p>${comments[index].index}</p>
//             </div>
//         </div>

        
//         <div class="comment-details">
//             <p>${comments[index].comment}.</p>
//         </div>
//     </div>
    
//     `






//     button.forEach((button) => {
//         button.addEventListener("click", (e) => {
//             if(e.target.parentElement.classList.contains("right-btn")) {
//                 if (index === 0) {
//                     index = comments.length
//                 }

//                 index--
//                 commentSlider.innerHTML = `
//                 <div class="comment-card">
//                     <div class="comment-card-header">
//                         <div class="comment-header-display">
//                             <div class="comment-profile-image-container">
//                                 <div class="comment-image-container">
//                                     <img class="comment-img" src=${comments[index].img} alt="">
//                                 </div>
//                             </div>
//                             <div class="comment-profile-detail">
//                                 <p>${comments[index].name}</p>
//                                 <div class="comment-center">
            
//                                 </div>
//                                 <p>${comments[index].job}</p>
//                             </div>
//                         </div>
            
//                         <div class="comment-number">
//                             <p>${comments[index].index}</p>
//                         </div>
//                     </div>
            
                    
//                     <div class="comment-details">
//                         <p>${comments[index].comment}.</p>
//                     </div>
//                 </div>
                
//                 `
            
//             }
//             if(e.target.parentElement.classList.contains("right-btn")) {
//                 index++
//                 if (index === comments.length) {
//                     index = 0;
//                 }
//                 commentSlider.innerHTML = `
//                 <div class="comment-card">
//                     <div class="comment-card-header">
//                         <div class="comment-header-display">
//                             <div class="comment-profile-image-container">
//                                 <div class="comment-image-container">
//                                     <img class="comment-img" src=${comments[index].img} alt="">
//                                 </div>
//                             </div>
//                             <div class="comment-profile-detail">
//                                 <p>${comments[index].name}</p>
//                                 <div class="comment-center">
            
//                                 </div>
//                                 <p>${comments[index].job}</p>
//                             </div>
//                         </div>
            
//                         <div class="comment-number">
//                             <p>${comments[index].index}</p>
//                         </div>
//                     </div>
            
                    
//                     <div class="comment-details">
//                         <p>${comments[index].comment}.</p>
//                     </div>
//                 </div>
                
//                 `
            
                
//             }
//         })
//     })






    
// })