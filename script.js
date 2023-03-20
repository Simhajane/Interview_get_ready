const list = [
    { question: 'Explain event delegation', status: 'Got it' },
    { question: 'Explain how this works in JavaScript.', status: 'Not yet' },
    { question: 'Explain how prototypal inheritance works.', status: 'Not yet' },
    { question: 'Whats the difference between a variable that is: null, undefined or undeclared?', status: 'Got it' },
    { question: 'What is a closure, and how/why would you use one?', status: 'Not yet' },
    { question: 'What language constructions do you use for iterating over object properties and array items?', status: 'Not yet' },
    { question: 'Can you describe the main difference between the Array.forEach() loop and Array.map() methods and why you would pick one versus the other?', status: 'Not yet' },
    { question: 'Whats a typical use case for anonymous functions?', status: 'Not yet' },
    { question: 'Whats the difference between host objects and native objects?', status: 'Not yet' },
    { question: 'Explain the difference between: function Person(){}, var person = Person(), and var person = new Person()?', status: 'Not yet' },
    { question: 'Explain the differences on the usage of foo between function foo() {} and var foo = function() {}', status: 'Not yet' },
    { question: 'Can you explain what Function.call and Function.apply do? Whats the notable difference between the two?', status: 'Not yet' },
    { question: 'Explain Function.prototype.bind.', status: 'Not yet' },
    { question: 'Whats the difference between feature detection, feature inference, and using the UA string?', status: 'Not yet' },
    { question: 'Explain "hoisting".', status: 'Got it' },
    { question: 'Describe event bubbling.', status: 'Not yet' },
    { question: 'Describe event capturing.', status: 'Not yet' },
    { question: 'Whats the difference between an "attribute" and a "property"?', status: 'Not yet' },
    { question: 'What are the pros and cons of extending built-in JavaScript objects?', status: 'Not yet' },
    { question: 'What is the difference between == and ===?', status: 'Got it' },
    { question: 'Explain the same-origin policy with regards to JavaScript.', status: 'Not yet' },
    { question: 'Why is it called a Ternary operator, what does the word "Ternary" indicate?', status: 'Got it' },
    { question: 'What is strict mode? What are some of the advantages/disadvantages of using it?', status: 'Not yet' },
    { question: 'What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?', status: 'Not yet' },
    { question: 'What tools and techniques do you use debugging JavaScript code?', status: 'Not yet' },
    { question: 'Explain the difference between mutable and immutable objects.', status: 'Not yet' },
    { question: 'What is an example of an immutable object in JavaScript?', status: 'Not yet' },
    { question: 'What are the pros and cons of immutability?', status: 'Not yet' },
    { question: 'How can you achieve immutability in your own code?', status: 'Not yet' },
    { question: 'Explain the difference between synchronous and asynchronous functions.', status: 'Not yet' },
    { question: 'What is event loop?', status: 'Not yet' },
    { question: 'What is the difference between call stack and task queue?', status: 'Not yet' },
    { question: 'What are the differences between variables created using let, var or const?', status: 'Got it' },
    { question: 'What are the differences between ES6 class and ES5 function constructors?', status: 'Not yet' },
    { question: 'Can you offer a use case for the new arrow => function syntax? How does this new syntax differ from other functions?', status: 'Not yet' },
    { question: 'What advantage is there for using the arrow syntax for a method in a constructor?', status: 'Not yet' },
    { question: 'What is the definition of a higher-order function?', status: 'Not yet' },
    { question: 'Can you give an example for destructuring an object or an array?', status: 'Not yet' },
    { question: 'Can you give an example of generating a string with ES6 Template Literals?', status: 'Not yet' },
    { question: 'Can you give an example of a curry function and why this syntax offers an advantage?', status: 'Not yet' },
    { question: 'What are the benefits of using spread syntax and how is it different from rest syntax?', status: 'Not yet' },
    { question: 'How can you share code between files?', status: 'Not yet' },
    { question: 'Why you might want to create static class members?', status: 'Not yet' },
    { question: 'What is the difference between while and do-while loops in JavaScript?', status: 'Not yet' },
    { question: 'What is a promise? Where and how would you use promise?', status: 'Not yet' },
    { question: 'Discuss how you might use Object Oriented Programming principles when coding with JavaScript.', status: 'Not yet' },

];

// Рендер питань в HTML
const renderQuestions = (questionCard, index) =>
    document.getElementById('card-content').insertAdjacentHTML('beforeEnd',
        `<div class="card mb-6 p-4" id="card-content">
    <p class="is-size-4"><b>${index + 1} . ${questionCard.question}</b></p>- <footer class="card-footer" id='status'>
    ${questionCard.status}
    </footer>
    </div>`);



// Додавання нового питання до списку
function addNewQuestion() {

    if (yes.checked) {

        list.unshift(document.getElementById('newQuestion').value);
        document.getElementById('card-content').insertAdjacentHTML('beforebegin',
            `<div class="card mb-6 p-4" id="card-content">
        <p class="is-size-4"><b> ${list[0]} </b ></p>- <footer class="card-footer" id='status'>
        ${'Got it'}
        </footer> 
        </div > `);

        return document.getElementById('newQuestion').value = '';



    } if (no.checked) {
        list.unshift(document.getElementById('newQuestion').value);
        document.getElementById('card-content').insertAdjacentHTML('beforebegin',
            `<div class="card mb-6 p-4" id="card-content">
        <p class="is-size-4"><b> ${list[0].question} </b ></p>- <footer class="card-footer" id='status'>
        ${list[0].status == 'Not yet'}
        </footer> 
        </div > `);
        return document.getElementById('newQuestion').value = '';
    }

}

// Фільтр питань за статусом, будуть показані лише не вивчені
function showNotYetOnly() {
    let filter = document.getElementById('filter');
    if (filter.checked) {
        document.getElementById('card-content').innerHTML = '';
        const filterQuestionsFalse = list.filter(questionCard => questionCard.status == 'Not yet');
        filterQuestionsFalse.forEach(renderQuestions);
    }
    else { showAll() }


};


// Показати всі питання
function showAll() {
    document.getElementById('card-content').innerHTML = '';
    list.forEach(renderQuestions);

};



showAll();


