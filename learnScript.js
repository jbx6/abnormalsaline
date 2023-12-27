var questions = [
    {
        module: 'Major Illnesses',
        subject: 'Neuroleptic Malignant Syndrome',
        title: 'An Introduction to Neuroleptic Malignant Disease for Paramedics.',
        education: 'Welcome to "An Introduction to Neuroleptic Malignant Disease for Paramedics," a comprehensive educational package designed to equip paramedics with essential knowledge about Neuroleptic Malignant Syndrome (NMS). This engaging program aims to provide a solid foundation in understanding NMS, a potentially life-threatening condition induced by certain medications, enabling paramedics to identify its signs and symptoms promptly and administer appropriate care.<br><br> Through a combination of informative modules, practical case studies, and interactive learning tools, this package will empower paramedics to enhance patient outcomes and make critical decisions with confidence when faced with NMS emergencies.<br><br> Get ready to delve into the intricacies of NMS and embark on a transformative learning journey that will enhance your expertise as a paramedic.',
        question: 'What is the subject of this package?',
        choices: ['Neuroleptic Malignant Disease', 'Intubation', 'RTCs', 'Pregnancy'],
        correctAnswer: 'Neuroleptic Malignant Disease',
    },
    {
        module: 'Major Illnesses',
        question: 'Early recognition and intervention saves lives. True/ false?',
        choices: ['True', 'False'],
        correctAnswer: 'True',
        explanation: 'Early recognition and intervention saves lives.',
        education: 'In Part 1 of "An Introduction to Neuroleptic Malignant Disease for Paramedics," we lay the foundation for understanding this critical condition. Through engaging lectures and real-life scenarios, paramedics will gain a comprehensive overview of Neuroleptic Malignant Syndrome (NMS). We will explore the history of NMS, its prevalence, and the medications commonly associated with its onset. By the end of this section, you will have a solid understanding of why NMS is a significant concern for paramedics and how early recognition and intervention can save lives.',
        subject: 'Neuroleptic Malignant Disease',
        title: 'Neuroleptic Malignant Disease: Part 1'
    },
    {
        module: 'Major Illnesses',
        question: 'What is the capital of France?',
        choices: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris',
        explanation: 'Paris is the capital of France.',
        education: "The underlying pathophysiologic mechanisms of  NMS are complex and elements still debated among experts, but most agree that a marked and sudden reduction in central dopaminergic activity resulting from D2 dopamine receptor blockade within the nigrostriatal, hypothalamic, and mesolimbic/cortical pathways helps explain the clinical features of NMS including rigidity, hyperthermia, and altered mental status, respectively.12,34 This theory is supported by the observation that the primary cause of NMS is the use of antipsychotic drugs that specifically block dopamine receptors, and in particular D2 receptors, and that the syndrome can also be induced by abrupt dopamine withdrawal. Additional support comes from a dopamine receptor imaging study of 1 patient with NMS demonstrating a complete lack of D2 receptor binding in the acute phase,43 and another study showing low levels of the dopamine metabolite homovanillic acid in the CSF of patients with acute NMS. <br><br>D2 dopamine receptor antagonism, however, does not explain all the presenting signs and symptoms of NMS, nor does it explain its occurrence with antipsychotic medications with lower D2 activity and medications without known antidopaminergic activity. This has led some to propose that sympathoadrenal hyperactivity, resulting from the removal of tonic inhibition within the sympathetic nervous system, may play a key role in the pathogenesis of NMS. Abnormalities in the sympathetic system are supported by the frequent presence of autonomic symptoms in NMS as well as demonstrated changes in the urine and plasma catecholamine levels in patients with NMS. Some have hypothesized that NMS shares pathophysiological similarities with malignant hyperthermia and that a defect in calcium regulatory proteins within sympathetic neurons may be the key factor that brings about the onset of NMS. <br><br> Another system that also appears to play a role in the signs and symptoms of NMS is the peripheral skeletal muscle system. Release of calcium has been shown to be increased from the sarcoplasmic reticulum of muscle cells with antipsychotic usage, possibly leading to increased muscle contractility and rigidity, breakdown of muscle, and hyperthermia. To date, however, none of the theories put forth as the underlying cause of NMS have been able to explain why only a small fraction of patients exposed to neuroleptics develop the condition. Furthermore, it remains unknown why patients who develop NMS are usually able to continue being treated with similar medications and, at times, even the same offending agent.",
        subject: 'Neuroleptic Malignant Disease',
        title: 'Pathophysiology'
    },
    {
        module: 'Major Illnesses',
        question: 'What is the capital of France?',
        choices: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris',
        explanation: 'Paris is the capital of France.',
        education: 'Part 3 focuses on the crucial aspects of assessing and managing Neuroleptic Malignant Syndrome effectively. We will cover the step-by-step approach to conducting a thorough patient assessment, including the recognition of key signs and symptoms. Paramedics will learn how to differentiate NMS from other medical emergencies and implement appropriate interventions promptly. We will also discuss the pharmacological and non-pharmacological management strategies for NMS, emphasizing the importance of supportive care, temperature control, and discontinuation of offending medications. By the end of this section, paramedics will have the knowledge and confidence to provide optimal care for patients experiencing NMS.',
        subject: 'Neuroleptic Malignant Disease',
        title: 'Neuroleptic Malignant Disease: Part 3'
    },
    {
        module: 'Major Illnesses',
        question: 'What is the capital of France?',
        choices: ['London', 'Berlin', 'Paris', 'Madrid'],
        correctAnswer: 'Paris',
        explanation: 'Paris is the capital of France.',
        education: 'In Part 4, we wrap up our educational package by providing a comprehensive knowledge recap and summary of Neuroleptic Malignant Syndrome. Paramedics will have the opportunity to review the essential concepts, key assessment findings, and management strategies covered throughout the program. Interactive quizzes and case studies will reinforce the learning outcomes, allowing paramedics to apply their knowledge in practical scenarios. By the end of this section, you will have a solid grasp of NMS, its assessment and management, and be better equipped to handle NMS emergencies with confidence and expertise.',
        subject: 'Neuroleptic Malignant Disease',
        title: 'Neuroleptic Malignant Disease: Part 4'
    }
    // Add more questions as needed
  ];
  
  var currentQuestionIndex = 0;
  var correctCount = 0;
  var incorrectCount = 0;
  
  function displayQuestion() {
    var question = questions[currentQuestionIndex];
  
    let quizHtml = `
      <div class="card">
        <header class="card_head">
          <div class="subject">

            <h2>${question.subject}</h2>
            <span>For ambulance personnel 🚑</span>


            <p><strong>Module</strong>: ${question.module}
          </div> 
        </header>
        <div class="card_body">
            <div class="education">
                <h3>${question.title}</h3>
                <p>${question.education}</p><br>
            </div>
            <hr>
          <div class="choices">
            <h3>${question.question}</h3>
            <p>Select the correct answer from below to continue:</p>
            ${question.choices.map((choice, index) => 
              `
              <input type="radio" id="choice${index}" name="question" value="${choice}">
              <label for="choice${index}">${choice}</label><br>
              `
            ).join('')}
            <div>
              <div style="display: flex; flex-direction: row-reverse;">
                <button onclick="checkAnswer()">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    document.getElementById('quizContainer').innerHTML = quizHtml;
  }
  
  function checkAnswer() {
    var userAnswer = document.querySelector('input[name="question"]:checked').value;
    var question = questions[currentQuestionIndex];
  
    if (userAnswer === question.correctAnswer) {
      correctCount++;
      currentQuestionIndex++;
  
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        displayScore();
      }
    } else {
      incorrectCount++;
      document.getElementById('quizContainer').innerHTML = `
      <div class="card">
        <header class="card_head">
          <div class="header-container">
            <span class="question">Almost...</span>
          </div> 
        </header>
        <div class="card_body">
          <div class="correctAnswer">
            <span class="explanation">The answer is... ${question.correctAnswer}</span>
          </div>
          <div class="explanation">
            <details>
            <summary>Explanation</summary>
              <ul>
                <li>${question.explanation}</li>
                <br>
              </ul>  
            </details>
          </div>
            <div>
              <div style="display: flex; flex-direction: row-reverse;">
                <button onclick="nextQuestion()">Next</button>
              </div>
            </div>
        </div>
      </div>
      `;
    }
  }
  
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      displayQuestion();
    } else {
      displayScore();
    }
  }
  
  function displayScore() {
    document.getElementById('quizContainer').innerHTML = `
      <p>You've completed the quiz!</p>
      <p>Your score: ${correctCount} correct, ${incorrectCount} incorrect.</p>
      <button onclick="restartQuiz()">Restart Quiz</button>
    `;
  }
  
  function restartQuiz() {
    currentQuestionIndex = 0;
    correctCount = 0;
    incorrectCount = 0;
    displayQuestion();
  }
  
  // Start the quiz
  displayQuestion();