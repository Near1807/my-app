export function GetQuestions(quiz: number) {
  const questions = [
    [
      {
        question: "What environment do you feel most comfortable in?",
        options: ["Busy cities", "Quiet nature", "Warm indoors", "Near water"],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do you handle stress?",
        options: [
          "Move fast and get things done",
          "Stay calm and ride it out",
          "Analyze everything",
          "Take space and reset",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "What describes your social style?",
        options: [
          "Always around people",
          "A few close friends",
          "Independent",
          "Depends on the day",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Pick a strength:",
        options: ["Adaptability", "Patience", "Focus", "Speed"],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do you approach challenges?",
        options: [
          "Rush in",
          "Think first",
          "Avoid if possible",
          "Ask for help",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "What’s your energy level?",
        options: ["High", "Moderate", "Low", "It fluctuates"],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do you learn best?",
        options: [
          "By doing",
          "By observing",
          "By studying",
          "By experimenting",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "What motivates you?",
        options: ["Curiosity", "Comfort", "Achievement", "Freedom"],
        values: [1, 2, 3, 4],
      },
      {
        question: "What’s your decision-making style?",
        options: ["Fast", "Careful", "Emotional", "Logical"],
        values: [1, 2, 3, 4],
      },
      {
        question: "Pick a hobby:",
        options: [
          "Exploring",
          "Relaxing",
          "Organizing things",
          "Anything outdoors",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do you respond to change?",
        options: [
          "Adapt immediately",
          "Slow adjustment",
          "Resistant at first",
          "Welcome it",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "Which pace fits you?",
        options: ["Fast", "Steady", "Slow", "Unpredictable"],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do others describe you?",
        options: ["Energetic", "Calm", "Thoughtful", "Adventurous"],
        values: [1, 2, 3, 4],
      },
      {
        question: "Pick a weakness:",
        options: ["Restless", "Too passive", "Overthinking", "Impulsive"],
        values: [1, 2, 3, 4],
      },
      {
        question: "What drives your decisions?",
        options: ["Instinct", "Comfort", "Logic", "Curiosity"],
        values: [1, 2, 3, 4],
      },
    ],
  ];
  return questions[quiz];
}

export function GetAnswers(quiz: number) {
  const answers = [
    {
      15: "You are a **House Fly**! Energetic, adaptable, and always on the move. You thrive in chaos and make the best of any situation.",
      30: "You are a **Fruit Fly**! Curious, clever, and observant. You notice details others miss and love exploring new ideas.",
      45: "You are a **Horse Fly**! Bold, strong-willed, and persistent. When you want something, nothing can stop you.",
      60: "You are a **Dragonfly**! Calm, perceptive, and powerful. You move through life with purpose and sharp intuition.",
    },
  ];
  return answers[quiz];
}
