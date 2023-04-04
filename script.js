const list = [
    { question: 'Explain event delegation', status: true },
    { question: 'Explain how this works in JavaScript.', status: true },
    { question: 'Explain how prototypal inheritance works.', status: false },
    { question: 'Whats the difference between a variable that is: null, undefined or undeclared?', status: true },
    { question: 'What is a closure, and how/why would you use one?', status: false },
    { question: 'What language constructions do you use for iterating over object properties and array items?', status: true },
    { question: 'Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?', status: true },
    { question: 'Whats a typical use case for anonymous functions?', status: false },
    { question: 'Whats the difference between host objects and native objects?', status: false },
    { question: 'Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?', status: true },
    { question: 'Explain the differences on the usage of foo between function foo() {} and var foo = function() {}', status: false },
    { question: 'Can you explain what Function.call and Function.apply do? Whats the notable difference between the two?', status: false },
    { question: 'Explain Function.prototype.bind.', status: false },
    { question: 'Whats the difference between feature detection, feature inference, and using the UA string?', status: false },
    { question: 'Explain "hoisting".', status: true },
    { question: 'Describe event bubbling.', status: false },
    { question: 'Describe event capturing.', status: false },
    { question: 'Whats the difference between an "attribute" and a "property"?', status: true },
    { question: 'What are the pros and cons of extending built-in JavaScript objects?', status: false },
    { question: 'What is the difference between == and ===?', status: true },
    { question: 'Explain the same-origin policy with regards to JavaScript.', status: false },
    { question: 'Why is it called a Ternary operator, what does the word "Ternary" indicate?', status: true },
    { question: 'What is strict mode? What are some of the advantages/disadvantages of using it?', status: false },
    { question: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?', status: false },
    { question: 'What tools and techniques do you use debugging JavaScript code?', status: true },
    { question: 'Explain the difference between mutable and immutable objects.', status: false },
    { question: 'What is an example of an immutable object in JavaScript?', status: false },
    { question: 'What are the pros and cons of immutability?', status: false },
    { question: 'How can you achieve immutability in your own code?', status: false },
    { question: 'Explain the difference between synchronous and asynchronous functions.', status: false },
    { question: 'What is event loop?', status: false },
    { question: 'What is the difference between call stack and task queue?', status: false },
    { question: 'What are the differences between variables created using let, var or const?', status: true },
    { question: 'What are the differences between ES6 class and ES5 function constructors?', status: false },
    { question: 'Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?', status: false },
    { question: 'What advantage is there for using the arrow syntax for a method in a constructor?', status: false },
    { question: 'What is the definition of a higher-order function?', status: false },
    { question: 'Can you give an example for destructuring an object or an array?', status: false },
    { question: 'Can you give an example of generating a string with ES6 Template Literals?', status: false },
    { question: 'Can you give an example of a curry function and why this syntax offers an advantage?', status: false },
    { question: 'What are the benefits of using spread syntax and how is it different from rest syntax?', status: false },
    { question: 'How can you share code between files?', status: false },
    { question: 'Why you might want to create static class members?', status: false },
    { question: 'What is the difference between while and do-while loops in JavaScript?', status: false },
    { question: 'What is a promise? Where and how would you use promise?', status: false },
    { question: 'Discuss how you might use Object Oriented Programming principles when coding with JavaScript.', status: false },

];



// Рендер питань в HTML
const renderQuestions = (questionCard, index) => {
    document.getElementById('card-content').insertAdjacentHTML('beforeEnd',
        `<div class="card mb-6 p-4">
            <p class=" is-size-4" id="question_body">
                <b>${index + 1} . ${questionCard.question}</b>
            </p>
            <p class="card-footer is-size-4">
               ${questionStatus(questionCard)} 
            </p>
            
         </div > `);

}


function questionStatus(questionCard) {

    if (questionCard.status == true) {
        return `<button class="button is-fullwidth has-background-primary-light status	has-text-success-dark">
       I know the answer
    </button> `

    }
    else {
        return `<button class="button is-fullwidth has-background-danger-light	status has-text-danger-dark">
        Don't know the answer yet
     </button> `
    }
}


function changeStatus(questionCard) {
    if (questionCard.status == true) {
        return `<button class="button is-fullwidth has-background-primary-light	status has-text-success-dark">
        Don't know the answer yet
     </button> `
    }
    else {
        return `<button class="button is-fullwidth has-background-danger-light	status has-text-danger-dark">
        I know the answer
     </button> `
    }
    list.forEach(renderQuestions);

}


// Додавання нового питання до списку
function addNewQuestion() {

    const addQuestion = document.getElementById('newQuestion').value;
    document.getElementById('card-content').innerHTML = '';
    list.unshift({ question: addQuestion, status: false });
    list.forEach(renderQuestions);
    return document.getElementById('newQuestion').value = '';


}

// Фільтр питань за статусом, будуть показані лише не вивчені
function showNotYetOnly() {
    let filter = document.getElementById('filter');
    if (filter.checked) {
        document.getElementById('card-content').innerHTML = '';
        const filterQuestionsFalse = list.filter(questionCard => questionCard.status == false);
        filterQuestionsFalse.forEach(renderQuestions);
    }
    else { showAll() }


};


// Показати всі питання
function showAll() {
    document.getElementById('card-content').innerHTML = '';
    list.forEach(renderQuestions);

};

const statusField = document.getElementById("bbb");
console.log(statusField);
statusField.addEventListener('click', function () { console.log('1') });
// console.log(el.index);
// el.addEventListener('click', alert(1));
showAll();








