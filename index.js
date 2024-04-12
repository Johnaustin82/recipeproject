const baseUrl = "http://localhost:3000"

document.addEventListener("DOMContentLoaded",()=>{
document.getElementById('falafel')
    fetch(`${baseUrl}/recipes/1`)
    .then(response => response.json())
    .then(recipes=> {
        document.getElementById("falafel-title").textContent=recipes.title;
        document.getElementById("falafel-description").textContent=recipes.description;
        document.getElementById("falafel-ingredients").textContent=recipes.ingredients;
        const instructions = recipes.instructions
          const instructionsList = document.getElementById("falafel-instruction");
        
          instructions.forEach((instruction) => {
            const li = document.createElement("li");
            li.textContent = `${instruction}`;
            instructionsList.appendChild(li);
          });
        document.getElementById("falafel-image").src = recipes.image;
     })
document.getElementById('flatbread')
     fetch(`${baseUrl}/recipes/2`)
     .then(response => response.json())
     .then(recipes=> {
         document.getElementById("chapati-title").textContent=recipes.title;
         document.getElementById("chapati-description").textContent=recipes.description;
         document.getElementById("chapati-ingredients").textContent=recipes.ingredients;
         const instructions = recipes.instructions
           const instructionsList = document.getElementById("chapati-instruction");
         
           instructions.forEach((instruction) => {
             const li = document.createElement("li");
             li.textContent = ` ${instruction}`;
             instructionsList.appendChild(li);
           });
         document.getElementById("chapati-image").src = recipes.image;
      })
document.getElementById('beef')
      fetch(`${baseUrl}/recipes/3`)
      .then(response => response.json())
      .then(recipes=> {
          document.getElementById("beef-title").textContent=recipes.title;
          document.getElementById("beef-description").textContent=recipes.description;
          document.getElementById("beef-ingredients").textContent=recipes.ingredients;
          const instructions = recipes.instructions
            const instructionsList = document.getElementById("beef-instruction");
          
            instructions.forEach((instruction) => {
              const li = document.createElement("li");
              li.textContent = ` ${instruction}`;
              instructionsList.appendChild(li);
            });
          document.getElementById("beef-image").src = recipes.image;
       })
document.getElementById('ugali')
      fetch(`${baseUrl}/recipes/4`)
      .then(response => response.json())
      .then(recipes=> {
          document.getElementById("ugali-title").textContent=recipes.title;
          document.getElementById("ugali-description").textContent=recipes.description;
          document.getElementById("ugali-ingredients").textContent=recipes.ingredients;
          const instructions = recipes.instructions
            const instructionsList = document.getElementById("ugali-instruction");
          
            instructions.forEach((instruction) => {
              const li = document.createElement("li");
              li.textContent = ` ${instruction}`;
              instructionsList.appendChild(li);
            });
          document.getElementById("ugali-image").src = recipes.image;
       })

let slideIndex = 0;
 const slides = document.querySelectorAll('.slides');
       
function showSlide(index) {
    slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
    });

}
       
function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}
       

showSlide(slideIndex);
       
setInterval(nextSlide, 5000);
       
document.getElementById("light-mode").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});

document.getElementById("dark-mode").addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});
})

