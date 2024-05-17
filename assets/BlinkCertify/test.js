const questions = [
  {
      question: "Which island is known for its luxury resorts and overwater bungalows?",
      options: ["Maafushi", "Hulhumalé", "Baa Atoll", "Malé"],
      answer: "Baa Atoll"
  },
  {
      question: "What is the capital city of the Maldives?",
      options: ["Maafushi", "Hulhumalé", "Baa Atoll", "Malé"],
      answer: "Malé"
  },
  {
      question: "Which island is famous for its vibrant underwater life and is a popular diving spot?",
      options: ["Maafushi", "Hulhumalé", "Baa Atoll", "Malé"],
      answer: "Maafushi"
  },
  {
      question: "Which island was artificially constructed to reduce population congestion in Malé?",
      options: ["Maafushi", "Hulhumalé", "Baa Atoll", "Malé"],
      answer: "Hulhumalé"
  },
  {
      question: "What is the name of the island group known for its diverse marine life and UNESCO Biosphere Reserve status?",
      options: ["Addu Atoll", "Vaavu Atoll", "Raa Atoll", "Laamu Atoll"],
      answer: "Laamu Atoll"
  },
  {
      question: "Which island is renowned for its exquisite sandbanks and crystal-clear waters?",
      options: ["Gan", "Fuvahmulah", "Thulusdhoo", "Dhigurah"],
      answer: "Thulusdhoo"
  },
  {
      question: "Which atoll is famous for its unique hammerhead shark diving experiences?",
      options: ["Ari Atoll", "Lhaviyani Atoll", "Vaavu Atoll", "Alif Dhaal Atoll"],
      answer: "Vaavu Atoll"
  },
  {
      question: "What is the name of the private island resort known for its underwater restaurant, Ithaa?",
      options: ["Cocoa Island", "Conrad Maldives Rangali Island", "Baros Maldives", "Niyama Private Islands Maldives"],
      answer: "Conrad Maldives Rangali Island"
  },
  {
      question: "Which island is famous for its large population of whale sharks?",
      options: ["Gan", "Fuvahmulah", "Thulusdhoo", "Dhigurah"],
      answer: "Dhigurah"
  },
  {
      question: "Which island is home to the Maldives' largest atoll and is known for its untouched natural beauty?",
      options: ["Hithadhoo", "Dhangethi", "Thinadhoo", "Thoddoo"],
      answer: "Thinadhoo"
  },
  {
      question: "What is the name of the island known for its unique diving spots and shipwrecks?",
      options: ["Dhigurah", "Fuvahmulah", "Gan", "Thulusdhoo"],
      answer: "Gan"
  },
  {
      question: "Which island is famous for its rich cultural heritage and traditional handicrafts?",
      options: ["Hithadhoo", "Dhangethi", "Thinadhoo", "Thoddoo"],
      answer: "Thoddoo"
  },
  {
      question: "What is the name of the island known for its pristine beaches and lush greenery?",
      options: ["Hithadhoo", "Dhangethi", "Thinadhoo", "Thoddoo"],
      answer: "Dhangethi"
  },
  {
      question: "Which atoll is famous for its vibrant coral reefs and manta ray cleaning stations?",
      options: ["Ari Atoll", "Lhaviyani Atoll", "Vaavu Atoll", "Alif Dhaal Atoll"],
      answer: "Ari Atoll"
  },
  {
      question: "What is the name of the island known for its bustling fish market and local cuisine?",
      options: ["Hithadhoo", "Dhangethi", "Thinadhoo", "Thoddoo"],
      answer: "Hithadhoo"
  },
  {
      question: "Which island is renowned for its unique geological formations and saltwater lakes?",
      options: ["Gan", "Fuvahmulah", "Thulusdhoo", "Dhigurah"],
      answer: "Fuvahmulah"
  },
  {
      question: "What is the name of the island known for its vibrant coral gardens and snorkeling spots?",
      options: ["Hithadhoo", "Dhangethi", "Thinadhoo", "Thoddoo"],
      answer: "Dhangethi"
  },
  {
      question: "Which island is famous for its laid-back atmosphere and water sports activities?",
      options: ["Hithadhoo", "Dhangethi", "Thinadhoo", "Thoddoo"],
      answer: "Thoddoo"
  },
  {
      question: "What is the name of the island known for its eco-friendly resorts and turtle conservation efforts?",
      options: ["Cocoa Island", "Conrad Maldives Rangali Island", "Baros Maldives", "Niyama Private Islands Maldives"],
      answer: "Cocoa Island"
  },
  {
      question: "Which atoll is famous for its pristine beaches and world-class surfing spots?",
      options: ["Ari Atoll", "Lhaviyani Atoll", "Vaavu Atoll", "Alif Dhaal Atoll"],
      answer: "Alif Dhaal Atoll"
  },
];
questions.sort(() => Math.random() - 0.5);

let userAnswers = [];

function displayQuestions() {
    const quizContainer = document.getElementById('quiz-container');

    questions.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <h3>Question ${index + 1}:</h3>
            <p>${question.question}</p>
            <ul>
                ${question.options.map(option => `<li><input type="radio" name="question${index}" value="${option}">${option}</li>`).join('')}
            </ul>
        `;
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    const resultContainer = document.getElementById('result-container');
    const scoreContainer = document.getElementById('score');
    const certificateContainer = document.getElementById('certificate');
    const downloadCertificateBtn = document.getElementById('download-certificate-btn');

    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';

    let score = 0;

    questions.forEach((question, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            userAnswers.push(userAnswer);
            if (userAnswer === question.answer) {
                score++;
            }
        }
    });

    scoreContainer.textContent = `Your score: ${score} / ${questions.length}`;

    if (score >= 0) {
        certificateContainer.innerHTML =`<src="#" alt="Certificate of Completion">`;
        downloadCertificateBtn.style.display = 'block'; // Show download certificate button
    } else {
        certificateContainer.innerHTML = `<p>Sorry, you did not pass the quiz.</p>`;
    }
}



window.onload = displayQuestions;