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
       
       function prevSlide() {
           slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
           showSlide(slideIndex);
       }
       
       showSlide(slideIndex);
      
       document.getElementById("next-slide").addEventListener("click", nextSlide);
       document.getElementById("prev-slide").addEventListener("click", prevSlide);
       
       
document.getElementById("light-mode").addEventListener("click", () => {
  document.body.classList.remove("dark-mode");
});

document.getElementById("dark-mode").addEventListener("click", () => {
  document.body.classList.add("dark-mode");
});

function submitRecipe(event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const ingredients = document.getElementById('ingredients').value;
  const instructions = document.getElementById('instructions').value;
  const image = document.getElementById('image').value;
  
  const recipe = {
      title: title,
      description:description,
      ingredients: ingredients,
      image: image,
      instructions: instructions

  };

  
  fetch(`${baseUrl}/recipes`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
  })
  .then(response => {
      if (response.ok) {
          console.log('Recipe created successfully');
          
          document.getElementById('recipe-form').reset();
      } else {
          console.error('Failed to create recipe');
      }
  })
  .catch(error => {
      console.error('Error:', error);
  });
}
document.querySelector('.create-recipe').addEventListener('click', submitRecipe);


document.getElementById('image-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
const recipeId = document.getElementById('recipe-title').value;
  const newImageUrl = document.getElementById('new-image').value;

  
  const data = {
    image: newImageUrl
  };


  fetch(`${baseUrl}/recipes/${recipeId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      console.log('Image URL updated successfully!');
    } else {
      console.log('Failed to update the image URL.');
    }
  })
  .catch(error => {
    console.log('An error occurred while updating the image URL:', error);
  });
});



document.getElementById('recipe-form').addEventListener('submit', submitRecipe);
const deleteButtons = document.querySelectorAll('.delete-btn');

function handleDeleteClick(event) {
  
  event.preventDefault();

  
  const recipeId = event.target.getAttribute('data-id');
  const confirmDelete = confirm('Are you sure you want to delete this recipe?');
  if (confirmDelete) {
    fetch(`http://localhost:3000/recipes/${recipeId}`, {
      method: 'DELETE'
    })
    .then(response => {
      if (response.ok) {
        const recipeCard = event.target.closest('.card');
        if (recipeCard) {
          recipeCard.remove();
          console.log('Recipe deleted successfully');
        }
      } else {
        console.error('Failed to delete recipe');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
}

deleteButtons.forEach(button => {
  button.addEventListener('click', handleDeleteClick);
});

})

