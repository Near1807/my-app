export function GetQuestions_Type(quiz: number) {
  const Questions_type = [
    [
      {
        question: "Which kind of Pokémon world area feels most like home?",
        options: [
          "A bustling city",
          "A peaceful forest",
          "A warm cozy town",
          "A lakeside or ocean",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "In a battle, what would your strategy be?",
        options: [
          "Attack fast and overwhelm",
          "Stay calm and wait for openings",
          "Analyze patterns first",
          "Adapt depending on the opponent",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "What kind of partner Pokémon would you choose?",
        options: [
          "Something energetic",
          "Something gentle and loyal",
          "Something smart or technical",
          "Something adventurous",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Which trait fits you best?",
        options: ["Bravery", "Patience", "Wisdom", "Curiosity"],
        values: [1, 2, 3, 4],
      },
      {
        question: "When you face obstacles, you…",
        options: [
          "Charge in like a gym challenge!",
          "Take time like a calm meditation",
          "Plan everything like a strategist",
          "Try new paths like an explorer",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "How would your friends describe your vibe?",
        options: ["High-energy", "Relaxed", "Thoughtful", "Wild spirit"],
        values: [1, 2, 3, 4],
      },
      {
        question: "Which Pokéball would you instinctively use?",
        options: ["Quick Ball", "Heal Ball", "Premier Ball", "Dive Ball"],
        values: [1, 2, 3, 4],
      },
      {
        question: "What motivates you on your journey?",
        options: ["Victory", "Peace", "Knowledge", "Discovery"],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do you handle surprises?",
        options: [
          "React instantly",
          "Stay calm",
          "Think before acting",
          "Go with the flow",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Choose a favorite activity:",
        options: [
          "Battling or sports",
          "Relaxing or calming hobbies",
          "Puzzles & strategy games",
          "Exploring nature",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do you handle change?",
        options: [
          "Embrace immediately",
          "Slowly warm up to it",
          "Question it first",
          "Use it as an adventure",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Pick your ideal travel pace:",
        options: [
          "Fast like a Rapidash",
          "Steady like a Mudsdale",
          "Slow but focused like an Alakazam",
          "Unpredictable like a Zeraora",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Your aura feels…",
        options: ["Fiery", "Serene", "Mystical", "Free-spirited"],
        values: [1, 2, 3, 4],
      },
      {
        question: "Pick a flaw:",
        options: [
          "Too impulsive",
          "Too passive",
          "Overthink everything",
          "Always chasing the next thing",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Your choices are driven by…",
        options: ["Instinct", "Comfort", "Logic", "Adventure"],
        values: [1, 2, 3, 4],
      },
    ],
  ];
  return Questions_type[quiz];
}

export function GetAnswers(quiz: number) {
  const answers = [
    {
      15: "You are a **Fire-type Pokémon**! Passionate, bold, and full of energy. Your spirit burns bright and you inspire everyone around you.",
      30: "You are a **Water-type Pokémon**! Calm, adaptable, and intuitive. You flow through challenges and keep others grounded.",
      45: "You are a **Grass-type Pokémon**! Steady, nurturing, and thoughtful. You bring balance and growth wherever you go.",
      60: "You are an **Electric-type Pokémon**! Quick, clever, and unpredictable. Your energy sparks creativity and excitement everywhere.",
    },
  ];
  return answers[quiz];
}
