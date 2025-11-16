export function GetQuestions(quiz: number, question: number) {
  const questions = [
    [
      {
        question: "What is the primary role of a worker bee?",
        options: [
          "Collect pollen",
          "Make honey",
          "Guard the hive",
          "All of the above",
        ],
        values: [1, 2, 3, 4],
      },
      {
        question: "How do bees communicate?",
        options: ["Dancing", "Singing", "Flying in circles", "Buzzing loudly"],
        values: [1, 2, 3, 4],
      },
      {
        question: "How long does a bee live?",
        options: ["1 week", "1 month", "6 months", "1 year"],
        values: [1, 2, 3, 4],
      },
    ],
  ];
  return questions[quiz][question];
}

export function GetAnswers(quiz: number) {
  const answers = [
    {
      4: "You are a Honey Bee! You are hardworking and dedicated, always striving to contribute to your community.",
      8: "You are a Bumblebee! You are friendly and social, bringing joy and positivity to those around you.",
      12: "You are a Carpenter Bee! You are independent and resourceful, always finding creative solutions to challenges.",
      16: "You are a Killer Bee! You are bold and fearless, unafraid to take risks and stand up for what you believe in.",
    },
  ];
  return answers[quiz];
}
