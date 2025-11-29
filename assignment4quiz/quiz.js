const quizQuestions = [ 
    "What is a demon's weakness", 
    "Who is considered the god and the creator of all demons", 
    "Who is the Love Hashira", 
    "Which of the following is a fire Hashira",
    "What is the special type of sword used to kill demons",
    "Who taught Tanjiro the water breathing technique", 
]

const answers = [ "sunlight",
                 "muzan",
                 "mitsuri kanjori",
                 "kyojuro rengoku",
                 "nichirin swords",
                 "sakonji urokodaki" ]

let score = 0;

for (let i = 0; i < quizQuestions.length; i++) {
  let userInput = prompt(quizQuestions[i]);


  userInput = userInput.toLowerCase().trim();


  if (userInput === answers[i]) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! Correct answer is: " + answers[i]);
  }
}

alert("Quiz Completed! Your score is: " + score + "/" + quizQuestions.length);