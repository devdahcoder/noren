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

window.addEventListener("load", (e) => {
    // alert("Page fully loaded")

    const index = 0;
    const button = document.querySelectorAll(".bnt");
    const navbar = document.querySelector(".nav-bar");
    const ham = document.querySelector(".mobile-nav");
    const menuBar = document.querySelector(".menu-bar");
    const commentSlider = document.querySelector(".comment-slider-display");
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


    commentSlider.innerHTML = `
    <div class="comment-card">
        <div class="comment-card-header">
            <div class="comment-header-display">
                <div class="comment-profile-image-container">
                    <div class="comment-image-container">
                        <img class="comment-img" src=${comments[index].img} alt="">
                    </div>
                </div>
                <div class="comment-profile-detail">
                    <p>${comments[index].name}</p>
                    <div class="comment-center">

                    </div>
                    <p>${comments[index].job}</p>
                </div>
            </div>

            <div class="comment-number">
                <p>${comments[index].index}</p>
            </div>
        </div>

        
        <div class="comment-details">
            <p>${comments[index].comment}.</p>
        </div>
    </div>
    
    `


    ham.addEventListener("click", () => {
        if (navbar.classList.toggle("showNav");)
        ham.classList.toggle("showClose");
    })




    button.forEach((button) => {
        button.addEventListener("click", (e) => {
            if(e.classList.contains("right-btn")) {
                if (index === 0) {
                    index = comments.length
                }

                index--
            
            }
            if(e.classList.contains("right-btn")) {
                index++
                if (index === comments.length) {
                    index = 0;
                }

            
                
            }
        })
    })






    
})