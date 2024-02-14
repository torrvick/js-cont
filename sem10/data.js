import { datainfo } from './datainfo.js';

const data = JSON.parse(datainfo);

const mainContentEl = document.querySelector('.content');

data.forEach((element) => {
	const recipeEl = document.createElement('div');
	recipeEl.classList.add('recipe');
	recipeEl.dataset.id = element.id;
	mainContentEl.append(recipeEl);

	const titleEl = document.createElement('h2');
	titleEl.classList.add('recipe-title');
	titleEl.textContent = element.name;
	recipeEl.append(titleEl);

	const contentEl = document.createElement('div');
	contentEl.classList.add('recipe-content');
	recipeEl.append(contentEl);

	const imgEl = document.createElement('img');
	imgEl.classList.add('recipe-img');
	imgEl.src = element.image;
	imgEl.alt = element.name;
	contentEl.append(imgEl);

	const infoEl = document.createElement('div');
	infoEl.classList.add('recipe-info');
	contentEl.append(infoEl);

	createRecipeProp('Rating', element.rating);
	createRecipeProp('Difficulty', element.difficulty);
	createRecipeProp('Cuisine', element.cuisine);
	createRecipeProp('Preparation time', element.prepTimeMinutes);
	createRecipeProp('Cook time', element.cookTimeMinutes);
	createRecipeProp('Calories', element.caloriesPerServing);

	const tagsEl = document.createElement('p');
	tagsEl.classList.add('recipe-tags');
	element.tags.forEach((tag) => {
		tag = tag.replace(' ', '_');
		tagsEl.innerHTML += `<a href=#${tag}>#${tag} </a>`;
	});
	infoEl.append(tagsEl);

	function createRecipeProp(propName, propValue) {
		const propEl = document.createElement('p');
		propEl.classList.add('recipe-prop');
		infoEl.append(propEl);

		const propTitleEl = document.createElement('span');
		propTitleEl.classList.add('recipe-prop-name');
		propTitleEl.textContent = `${propName}: `;
		propEl.append(propTitleEl);

		const propValueEl = document.createElement('span');
		propValueEl.textContent = propValue;
		propEl.append(propValueEl);
	}
});

document.addEventListener('click', function (e) {
	const target = e.target;
	const targetDivEl = target.closest('.recipe');
	console.log(target);
	if (targetDivEl) {
		const recipeId = targetDivEl.dataset.id;
		const recipe = data.find((recipe) => recipe.id == recipeId);
		console.log(recipe);

		const modalEl = document.createElement('div');
		modalEl.classList.add('modal');
		modalEl.style.display = 'block';
		mainContentEl.append(modalEl);

		const modalBoxEl = document.createElement('div');
		modalBoxEl.classList.add('modal-box');
		modalEl.append(modalBoxEl);

		const modalContentEl = document.createElement('div');
		modalContentEl.classList.add('modal-content');
		modalBoxEl.append(modalContentEl);

		const imgEl = document.createElement('img');
		imgEl.classList.add('modal-img');
		imgEl.src = recipe.image;
		imgEl.alt = recipe.name;
		modalContentEl.append(imgEl);

		const ingredientsTextEl = document.createElement('p');
		ingredientsTextEl.textContent = `To cook this ${recipe.name}, you must buy the following products:`;
		modalContentEl.append(ingredientsTextEl);

		const ingridientsEl = document.createElement('ul');
		modalContentEl.append(ingridientsEl);
		const ingredients = recipe.ingredients;
		ingredients.forEach((ingridient) => {
			const liEl = document.createElement('li');
			liEl.textContent = ingridient;
			ingridientsEl.append(liEl);
		});

		const instructionsTextEl = document.createElement('p');
		instructionsTextEl.textContent = `And do the following steps:`;
		modalContentEl.append(instructionsTextEl);

		const instructionsEl = document.createElement('ul');
		modalContentEl.append(instructionsEl);
		const instructions = recipe.instructions;
		instructions.forEach((instruction) => {
			const liEl = document.createElement('li');
			liEl.textContent = instruction;
			instructionsEl.append(liEl);
		});
	}

	if (target.classList.contains('modal')) {
		target.style.display = 'none';
	}
});
