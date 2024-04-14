document.addEventListener('DOMContentLoaded', function() {
    const showRecipesButton = document.getElementById('showRecipes');
    const showIngredientsButton = document.getElementById('showIngredients');
    const recipeContent = document.getElementById('recipeContent');
  
    showRecipesButton.addEventListener('click', function() {
      recipeContent.innerHTML = '<h3>Chicken Fajitas</h3>' +
                                '<img src="fajitas.jpg">' +
                                '<p>1. Mix seasoning blend.</p>' +
                                '<p>2. Cut veggies and chicken.</p>' +
                                '<p>3. Cook chicken in olive oil in a pan, add veggies. (You can make fajitas on the grill if you prefer).</p>' +
                                '<p>4. Fill your tortilla shells with your favorite toppings!</p>' +
                                '<h3>Lasagna</h3>' +
                                '<img src="lasagna.jpg">' +
                                '<p>1. Boil the pasta: Skip this step if you’re using fresh pasta, no-boil noodles or oven-ready noodles.</p>' +
                                '<p>2. Prepare the lasagna ingredients: Cook the meat, make a sauce and prepare any cheesy fillings.</p>' +
                                '<p>3. Make the layers: Fill the casserole dish with layers of sauce, noodles and cheese. Starting with sauce on the bottom keeps the noodles from sticking.</p>' +
                                '<p>4. Rest before slicing: Resting is often overlooked, but it’s the secret to preventing a soupy mess on the plate.</p>';
      recipeContent.style.display = 'block';
    });
  
    showIngredientsButton.addEventListener('click', function() {
      recipeContent.innerHTML = '<h3>Ingredient List For Chicken Fajitas</h3>' +
                                '<ul>' +
                                '<li>Chicken Breast Tenderloin</li>' +
                                '<li>Green Peppers</li>' +
                                '<li>Yellow Peppers</li>' +
                                '<li>Red Peppers</li>' +
                                '<li>Sliced Poblano Pepper</li>' +
                                '<li>Olive Oil</li>' +
                                '<li>Fajita Seasoning Packet</li>' +
                                '<li>Tortilla Shells</li>' +
                                '</ul>' +
                                '<h3>Ingredient List For Lasagna</h3>' +
                                '<ul>' +
                                '<li>Lasagna Noodles</li>' +
                                '<li>Sausage and Ground Beef</li>' +
                                '<li>Crushed Tomatoes and Tomato Paste</li>' +
                                '<li>Sugar</li>' +
                                '<li>Cheese</li>' +
                                '<li>Egg</li>' +
                                '</ul>';
      recipeContent.style.display = 'block';
    });
  });