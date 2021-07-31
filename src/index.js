fetchFirstSpiceBlend()

const mainImageDiv = document.querySelector("#spice-blend-detail")
const ingredList = document.querySelector("#spice-blend-detail > div > ul")
const spiceForm = document.querySelector("#update-form")
const ingrForm = document.querySelector("#ingredient-form")


function fetchFirstSpiceBlend(){
    fetch(`http://localhost:3000/spiceblends/${1}`)
        .then(resp => resp.json())
        .then(firstSpice => {                                
            displayAsMain(firstSpice)
        })
}



function displayAsMain(spiceBlendObj){

    const centerImg = document.querySelector("#spice-blend-detail > img")
        centerImg.src = spiceBlendObj.image
        centerImg.alt = spiceBlendObj.title
        centerImg.dataset.id = spiceBlendObj.id

    let centerImgTitle = document.querySelector("#spice-blend-detail > h2")  
        centerImgTitle.textContent = spiceBlendObj.title 
   
        
    function getIngred(){
        fetch(`http://localhost:3000/ingredients/${1}`)
        .then(resp => resp.json())
        .then(ingredObj => {
                let ingredName = ingredObj.name
                let ingredient = document.createElement("li")
                    ingredient = ingredName
                    ingredList.append(ingredient)       
        })
    }
    getIngred()
}

spiceForm.addEventListener("submit", event => {
    event.preventDefault()
    const newSpiceBl = {
        title: event.target.title.value
    }

    fetch(`http://localhost:3000/ingredients/${1}`, {
        method: "PATCH",
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newSpiceBl)
    })
    .then(resp => resp.json())
    .then(newSpiceBl => displayAsMain(newSpiceBl))

    spiceForm.reset()
})



ingrForm.addEventListener("submit", event =>{
    event.preventDefault()
    const ingredi = {
        name: event.target.name.value
    }

    ingrForm.reset()
})




// function updateForm(){

// }





// function fetchAllSpiceBlends(){
//     fetch()
// }