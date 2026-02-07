/**
 * AI Quiz Question Bank
 * 150 questions total (50 per difficulty level)
 * Each question has 4 options and 1 correct answer
 */

export interface QuizQuestion {
  id: number;
  question: string;
  options: [string, string, string, string];
  correct: 0 | 1 | 2 | 3;
  explanation: string;
}

// SIMPLE LEVEL QUESTIONS (50)
export const simpleQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "What does AI stand for?",
    options: ["Artificial Intelligence", "Advanced Internet", "Automated Instruction", "Amazing Innovation"],
    correct: 0,
    explanation: "AI stands for Artificial Intelligence, which refers to technology that can learn and make decisions."
  },
  {
    id: 2,
    question: "Which of these is an example of AI you use daily?",
    options: ["Smartphone calculator", "ChatGPT", "Paper notebook", "Pencil"],
    correct: 1,
    explanation: "ChatGPT is an AI language model. Other AIs you use include voice assistants, recommendation systems, and autocorrect."
  },
  {
    id: 3,
    question: "What is machine learning?",
    options: ["Learning from machines in a factory", "How computers learn from data", "A type of computer game", "Building robots"],
    correct: 1,
    explanation: "Machine learning is when computers learn patterns from data without being explicitly programmed for every scenario."
  },
  {
    id: 4,
    question: "Can AI understand emotions?",
    options: ["Yes, always", "No, it recognizes patterns but doesn't feel", "Only on Mondays", "Only for positive emotions"],
    correct: 1,
    explanation: "AI can recognize emotional words and patterns, but it doesn't actually feel emotions itself."
  },
  {
    id: 5,
    question: "Which company created ChatGPT?",
    options: ["Google", "OpenAI", "Meta", "Apple"],
    correct: 1,
    explanation: "OpenAI created ChatGPT, a large language model released in November 2022."
  },
  {
    id: 6,
    question: "What is a neural network?",
    options: ["A fishing net made of neurons", "Computer networks with school names", "A brain-inspired AI structure", "A social network"],
    correct: 2,
    explanation: "Neural networks are inspired by how brains work. They're mathematical models used in deep learning."
  },
  {
    id: 7,
    question: "Can AI create art?",
    options: ["No, never", "Yes, but it's not real art", "Yes, AI can generate images and art", "Only AI robots can"],
    correct: 2,
    explanation: "AI tools like DALL-E, Midjourney, and Stable Diffusion can generate images. Whether it's 'real art' is debated."
  },
  {
    id: 8,
    question: "What is natural language processing?",
    options: ["Cooking with natural foods", "Speaking in nature", "How AI understands human language", "Making plants speak"],
    correct: 2,
    explanation: "NLP is the field that helps computers understand, interpret, and generate human language."
  },
  {
    id: 9,
    question: "Does AI have consciousness?",
    options: ["Yes, AI is alive", "Current AI does not have consciousness", "Only ChatGPT has it", "We're not sure yet"],
    correct: 1,
    explanation: "Current AI systems like ChatGPT process information but don't have consciousness or self-awareness."
  },
  {
    id: 10,
    question: "What is data in AI?",
    options: ["A type of calendar", "Information used to train AI", "Confetti in Spanish", "Ancient history"],
    correct: 1,
    explanation: "Data is information (numbers, text, images) that AI learns from to make predictions and decisions."
  },
  {
    id: 11,
    question: "Can AI replace teachers?",
    options: ["Yes, completely", "No, teachers provide human connection and inspiration", "Only in the future", "Only for math"],
    correct: 1,
    explanation: "AI can help teachers but cannot replace them. Teachers provide mentorship, emotional support, and personalized guidance."
  },
  {
    id: 12,
    question: "What is a chatbot?",
    options: ["A robot that chats with people", "Software designed to chat with users", "A hat that talks", "A social media app"],
    correct: 1,
    explanation: "A chatbot is software programmed to simulate conversation with users, either rule-based or AI-powered."
  },
  {
    id: 13,
    question: "Is AI perfect?",
    options: ["Yes, always right", "No, AI makes mistakes and can be biased", "Only for math", "Only when it's sunny"],
    correct: 1,
    explanation: "AI can have errors, biases from training data, and limitations. It's a tool, not perfect."
  },
  {
    id: 14,
    question: "What is computer vision?",
    options: ["Glasses for computers", "AI's ability to understand images", "Computer eyeglasses", "Video games"],
    correct: 1,
    explanation: "Computer vision is the field where AI learns to interpret and understand visual information from images and videos."
  },
  {
    id: 15,
    question: "Can AI write essays?",
    options: ["No, never", "Yes, but you should add your own ideas", "Only if it's about robots", "Only sad essays"],
    correct: 1,
    explanation: "AI can help you brainstorm and write drafts, but you should add your own thoughts and verify information."
  },
  {
    id: 16,
    question: "What powers AI systems?",
    options: ["Magic spells", "Algorithms and data", "Only electricity", "Happiness"],
    correct: 1,
    explanation: "AI is powered by algorithms (step-by-step instructions) and data, running on computers using electricity."
  },
  {
    id: 17,
    question: "What is training in AI?",
    options: ["Exercise for computers", "Teaching AI patterns from data", "Building real robots", "Installing software"],
    correct: 1,
    explanation: "Training is the process of feeding data to an AI system so it learns patterns and can make predictions."
  },
  {
    id: 18,
    question: "Can AI have bad outputs?",
    options: ["No, impossible", "Yes, if trained on bad data or poorly designed", "Only on Tuesdays", "Only in games"],
    correct: 1,
    explanation: "AI can produce incorrect, biased, or harmful outcomes if trained on biased data or poorly designed."
  },
  {
    id: 19,
    question: "What is an algorithm?",
    options: ["A type of math problem", "Step-by-step instructions to solve a problem", "A musical rhythm", "A video game"],
    correct: 1,
    explanation: "An algorithm is a set of step-by-step instructions that a computer follows to complete a task."
  },
  {
    id: 20,
    question: "Is AI used in smartphones?",
    options: ["No, phones are too simple", "Yes, face unlock, autocorrect, and recommendations", "Only in gaming phones", "Only in old phones"],
    correct: 1,
    explanation: "Modern smartphones use AI for face recognition, predictive text, photo filters, and personalized recommendations."
  },
  {
    id: 21,
    question: "What is deep learning?",
    options: ["Thinking very hard", "Advanced machine learning using neural networks", "Swimming underwater", "Reading difficult books"],
    correct: 1,
    explanation: "Deep learning is a subset of machine learning that uses multiple layers of neural networks to learn complex patterns."
  },
  {
    id: 22,
    question: "Can AI translate languages?",
    options: ["No, it's too complex", "Yes, tools like Google Translate do this", "Only if you know both languages", "Only ancient languages"],
    correct: 1,
    explanation: "Yes! AI translation tools can translate between numerous languages, though they sometimes make mistakes."
  },
  {
    id: 23,
    question: "What is a dataset?",
    options: ["A set of dates", "A collection of data used for training", "A type of furniture", "A calendar"],
    correct: 1,
    explanation: "A dataset is a collection of data points (examples) used to train and test AI models."
  },
  {
    id: 24,
    question: "Is all AI dangerous?",
    options: ["Yes, all AI is harmful", "No, AI's impact depends on how it's used", "Only when powered", "Only robots are dangerous"],
    correct: 1,
    explanation: "AI itself is a tool. Its impact depends on how it's designed, trained, and used by people."
  },
  {
    id: 25,
    question: "What is a recommendation system?",
    options: ["A system that recommends doctors", "AI that suggests content you might like", "A system for school recommendations", "A dating app"],
    correct: 1,
    explanation: "Recommendation systems analyze your behavior to suggest products, videos, music, or other content you might enjoy."
  },
  {
    id: 26,
    question: "Can AI create music?",
    options: ["No, music is too creative", "Yes, tools can generate music compositions", "Only if it's rock music", "Only sad songs"],
    correct: 1,
    explanation: "AI can compose music, but whether AI-generated music has artistic merit is something people debate."
  },
  {
    id: 27,
    question: "What is overfitting in AI?",
    options: ["Being too happy", "When AI memorizes data instead of learning patterns", "Type of clothing", "Excessive exercise"],
    correct: 1,
    explanation: "Overfitting is when an AI model learns the training data too well and fails to work on new data."
  },
  {
    id: 28,
    question: "Is AI used in healthcare?",
    options: ["No, doctors work alone", "Yes, for diagnosis help and research", "Only for making appointments", "Only for scheduling"],
    correct: 1,
    explanation: "AI assists doctors by analyzing medical images, predicting diseases, and supporting treatment decisions."
  },
  {
    id: 29,
    question: "What is reinforcement learning?",
    options: ["Learning to reinforce muscles", "AI learning through trial and error with rewards", "Repetition without errors", "Learning silence"],
    correct: 1,
    explanation: "Reinforcement learning is when AI learns by trying actions, receiving rewards for good choices, and learning from feedback."
  },
  {
    id: 30,
    question: "Can AI write code?",
    options: ["No, only humans can", "Yes, tools like GitHub Copilot assist programmers", "Only simple code", "Only for games"],
    correct: 1,
    explanation: "AI can help write code, but programmers must review it carefully for accuracy and security."
  },
  {
    id: 31,
    question: "What is bias in AI?",
    options: ["Having opinions about food", "Systematic errors from prejudiced training data", "A type of fashion", "Favoring one color"],
    correct: 1,
    explanation: "AI bias occurs when an AI system discriminates unfairly, often because its training data was biased."
  },
  {
    id: 32,
    question: "How does facial recognition work?",
    options: ["Magic", "Mapping face features and comparing them", "Writing down appearance", "Guessing"],
    correct: 1,
    explanation: "Facial recognition uses AI to map unique face features and compare them against known faces in a database."
  },
  {
    id: 33,
    question: "What is a model in AI?",
    options: ["A person in fashion", "A trained system that makes predictions", "A toy", "A blueprint from the 1800s"],
    correct: 1,
    explanation: "An AI model is a mathematical system trained on data to make predictions or decisions on new data."
  },
  {
    id: 34,
    question: "Can AI understand sarcasm?",
    options: ["Yes, perfectly", "Not really; it struggles with context", "Only if you're happy", "Only in English"],
    correct: 1,
    explanation: "AI struggles with sarcasm and context because sarcasm requires understanding social cues and intent."
  },
  {
    id: 35,
    question: "What is a feature in AI?",
    options: ["A movie feature", "An input variable that AI uses to make predictions", "A face feature", "A special ability"],
    correct: 1,
    explanation: "A feature is an individual measurable property used as input to train or use an AI model."
  },
  {
    id: 36,
    question: "Is AI used in cars?",
    options: ["No, cars are manual", "Yes, for navigation, safety, and self-driving features", "Only in luxury cars", "Only in old cars"],
    correct: 1,
    explanation: "Modern cars use AI for GPS navigation, collision detection, autonomous driving, and driver assistance systems."
  },
  {
    id: 37,
    question: "What is accuracy in AI?",
    options: ["Precision of a watch", "How often an AI makes correct predictions", "Perfect memory", "Fast speed"],
    correct: 1,
    explanation: "Accuracy measures how often an AI system makes correct predictions compared to actual outcomes."
  },
  {
    id: 38,
    question: "Can AI understand humor?",
    options: ["Yes, perfectly", "It can recognize jokes but may not understand why they're funny", "No, never", "Only puns"],
    correct: 1,
    explanation: "AI can identify joke structures but doesn't truly understand humor because it lacks human context and emotion."
  },
  {
    id: 39,
    question: "What is supervised learning?",
    options: ["Having a supervisor", "Learning from labeled examples", "Working under someone", "Following rules"],
    correct: 1,
    explanation: "Supervised learning is when AI learns from data where the correct answers are already provided (labeled)."
  },
  {
    id: 40,
    question: "Is privacy safe with AI?",
    options: ["Always safe", "It depends; AI systems can misuse personal data", "Only with passwords", "Privacy doesn't matter"],
    correct: 1,
    explanation: "AI systems handling personal data pose privacy risks if not properly secured and managed responsibly."
  },
  {
    id: 41,
    question: "What is unsupervised learning?",
    options: ["Learning without a supervisor", "Finding patterns in unlabeled data", "Playing without rules", "Working alone"],
    correct: 1,
    explanation: "Unsupervised learning finds patterns in data without pre-labeled examples or correct answers."
  },
  {
    id: 42,
    question: "Can AI create videos?",
    options: ["No, only humans can", "Yes, but the quality varies and they can be deceptive", "Only 1-minute videos", "Only cartoons"],
    correct: 1,
    explanation: "AI can generate or edit videos, but deepfakes and AI-generated content raise ethical concerns."
  },
  {
    id: 43,
    question: "What is transfer learning?",
    options: ["Moving to a new school", "Using knowledge from one task to help another task", "Transferring money", "Changing jobs"],
    correct: 1,
    explanation: "Transfer learning is using an AI model trained on one task to help solve a different but related task."
  },
  {
    id: 44,
    question: "Is AI used in social media?",
    options: ["No, it's all manual", "Yes, for feeds, recommendations, and content moderation", "Only for posting", "Only for messaging"],
    correct: 1,
    explanation: "Social media platforms use AI to personalize feeds, recommend content, detect abuse, and analyze trends."
  },
  {
    id: 45,
    question: "What is a hyperparameter?",
    options: ["A very active person", "Settings humans adjust when training AI", "A type of technology", "A large parameter"],
    correct: 1,
    explanation: "Hyperparameters are settings (like learning rate) that humans adjust to control how AI models are trained."
  },
  {
    id: 46,
    question: "Can AI predict the future?",
    options: ["Yes, perfectly", "No, it can only make predictions based on patterns in historical data", "Only weather", "Only in movies"],
    correct: 1,
    explanation: "AI can make predictions based on patterns, but the future is unpredictable; predictions are probabilistic, not certain."
  },
  {
    id: 47,
    question: "What is a loss function?",
    options: ["A broken telephone function", "A measure of AI errors during training", "A weight loss program", "Sadness"],
    correct: 1,
    explanation: "A loss function measures how wrong an AI model's predictions are, helping it improve during training."
  },
  {
    id: 48,
    question: "Is AI regulated?",
    options: ["No, it's completely free", "Yes, there are growing regulations for AI use", "Only in Europe", "Only by companies"],
    correct: 1,
    explanation: "AI is increasingly regulated through laws like the EU AI Act and various national regulations."
  },
  {
    id: 49,
    question: "What is an activation function?",
    options: ["Turning on your phone", "A function that adds non-linearity to neural networks", "Becoming more energetic", "Pressing activate"],
    correct: 1,
    explanation: "Activation functions introduce non-linearity into neural networks, allowing them to learn complex patterns."
  },
  {
    id: 50,
    question: "Is AI always faster than humans?",
    options: ["Yes, always", "No; AI is faster at some tasks but slower at others like creative thinking", "Only at math", "Only computers are fast"],
    correct: 1,
    explanation: "AI excels at speed for data processing and calculation, but humans are faster at creative and flexible problem-solving."
  }
];

// MEDIUM LEVEL QUESTIONS (50)
export const mediumQuestions: QuizQuestion[] = [
  {
    id: 51,
    question: "How do neural networks learn?",
    options: ["By reading books", "Through adjusting weights based on error signals", "By memorizing data", "By guessing"],
    correct: 1,
    explanation: "Neural networks learn by adjusting internal weights through a process called backpropagation, minimizing error."
  },
  {
    id: 52,
    question: "What is the purpose of an activation function?",
    options: ["To turn on the computer", "To introduce non-linearity enabling complex pattern learning", "To save energy", "To display results"],
    correct: 1,
    explanation: "Activation functions introduce non-linearity, allowing neural networks to learn non-linear relationships in data."
  },
  {
    id: 53,
    question: "What is gradient descent?",
    options: ["Walking downhill", "An optimization algorithm that finds minimum error", "A steep path", "A type of descent"],
    correct: 1,
    explanation: "Gradient descent is an algorithm that iteratively moves toward the direction of steepest error reduction."
  },
  {
    id: 54,
    question: "What is a convolutional neural network (CNN)?",
    options: ["A network made of convex shapes", "A neural network specialized for image processing", "A social network", "A railroad network"],
    correct: 1,
    explanation: "CNNs use convolutional layers to extract features from images, making them excellent for computer vision tasks."
  },
  {
    id: 55,
    question: "What does backpropagation do?",
    options: ["Goes back to previous locations", "Computes gradients and updates neural network weights", "Moves backward", "Prevents progress"],
    correct: 1,
    explanation: "Backpropagation calculates how much each weight contributes to error, allowing efficient learning."
  },
  {
    id: 56,
    question: "What is a recurrent neural network (RNN)?",
    options: ["A network that repeats itself", "A neural network with loops for sequential data", "A circular network", "A recursive structure"],
    correct: 1,
    explanation: "RNNs have feedback loops, making them ideal for sequential data like text and time-series data."
  },
  {
    id: 57,
    question: "What is an LSTM?",
    options: ["A type of computer", "Long Short-Term Memory: an RNN variant that remembers long-term dependencies", "A hard drive type", "A coding language"],
    correct: 1,
    explanation: "LSTM is a RNN architecture that addresses the vanishing gradient problem and remembers long-term patterns."
  },
  {
    id: 58,
    question: "What is a transformer?",
    options: ["A power converter", "A deep learning architecture using attention mechanisms", "A robot disguise", "A gear system"],
    correct: 1,
    explanation: "Transformers use attention mechanisms to process sequences in parallel, powering models like ChatGPT."
  },
  {
    id: 59,
    question: "What is attention in AI?",
    options: ["Paying focus", "A mechanism that weights which parts of input are important", "Looking at something", "Listening carefully"],
    correct: 1,
    explanation: "Attention allows AI to focus on relevant parts of input, crucial for language understanding and translation."
  },
  {
    id: 60,
    question: "What is embedding?",
    options: ["Putting something in concrete", "Converting words or items into numerical vectors", "Hiding something", "Sinking in water"],
    correct: 1,
    explanation: "Embeddings represent words or objects as numerical vectors in a way that captures semantic meaning."
  },
  {
    id: 61,
    question: "What is the vanishing gradient problem?",
    options: ["Disappearing math grades", "When gradients become too small during training, slowing learning", "Loss of motivation", "Fading colors"],
    correct: 1,
    explanation: "The vanishing gradient problem occurs when error signals become too small to update weights in deep networks."
  },
  {
    id: 62,
    question: "What is a hyperplane in SVM?",
    options: ["An airplane flying high", "A boundary line that separates data into categories", "A sky surface", "A mathematical plane"],
    correct: 1,
    explanation: "In Support Vector Machines, the hyperplane is the decision boundary that best separates different classes."
  },
  {
    id: 63,
    question: "What is regularization?",
    options: ["Making something regular", "A technique to prevent overfitting", "Normal behavior", "Consistent pattern"],
    correct: 1,
    explanation: "Regularization adds penalties to prevent overfitting, helping models generalize better to new data."
  },
  {
    id: 64,
    question: "What is cross-validation?",
    options: ["Checking something twice", "A method to evaluate model performance on different data splits", "Validating crossings", "Double-checking"],
    correct: 1,
    explanation: "Cross-validation tests a model on multiple data splits to ensure it generalizes well."
  },
  {
    id: 65,
    question: "What is a confusion matrix?",
    options: ["A confusing grid", "A table showing predictions vs actual values", "An unclear message", "A complicated spreadsheet"],
    correct: 1,
    explanation: "A confusion matrix displays correct and incorrect predictions, helping evaluate classification performance."
  },
  {
    id: 66,
    question: "What is precision in classification?",
    options: ["Exact measurements", "The ratio of correct positive predictions to all positive predictions", "Accuracy", "Exactness"],
    correct: 1,
    explanation: "Precision measures how many predicted positives are actually correct (minimizing false positives)."
  },
  {
    id: 67,
    question: "What is recall in classification?",
    options: ["Remembering something", "The ratio of correct positive predictions to all actual positives", "Memory", "Recollection"],
    correct: 1,
    explanation: "Recall measures the model's ability to find all actual positive cases (minimizing false negatives)."
  },
  {
    id: 68,
    question: "What is the F1 score?",
    options: ["A race car grade", "A harmonic mean of precision and recall", "A formula", "A performance metric"],
    correct: 1,
    explanation: "The F1 score balances precision and recall, useful when you need to consider both metrics."
  },
  {
    id: 69,
    question: "What is a weight in neural networks?",
    options: ["How heavy something is", "A parameter that multiplies inputs, adjusted during training", "A measurement unit", "A force"],
    correct: 1,
    explanation: "Weights are learnable parameters in neural networks that multiply inputs to produce outputs."
  },
  {
    id: 70,
    question: "What is a bias in neural networks?",
    options: ["An unfair preference", "A learnable parameter that shifts the output", "Prejudice", "Discrimination"],
    correct: 1,
    explanation: "Bias is an additional learnable parameter (like a y-intercept) that helps neural networks fit data better."
  },
  {
    id: 71,
    question: "What is a feature map?",
    options: ["A geographic map", "The output of convolutional layers representing detected features", "A treasure map", "A diagram"],
    correct: 1,
    explanation: "Feature maps show which features (edges, textures, shapes) a CNN has learned at each layer."
  },
  {
    id: 72,
    question: "What is a pooling layer?",
    options: ["A swimming pool", "A layer that downsamples feature maps to reduce computation", "A water layer", "A data collection"],
    correct: 1,
    explanation: "Pooling layers reduce dimensionality and extract important features, speeding up computation."
  },
  {
    id: 73,
    question: "What is dropout?",
    options: ["Falling down", "A regularization technique that randomly ignores neurons during training", "Quitting", "Dismissing"],
    correct: 1,
    explanation: "Dropout randomly deactivates neurons during training, reducing overfitting and improving generalization."
  },
  {
    id: 74,
    question: "What is batch normalization?",
    options: ["Large quantities", "Normalizing input distributions within batches to stabilize training", "Group sizing", "Standardization"],
    correct: 1,
    explanation: "Batch normalization normalizes layer inputs, stabilizing training and allowing faster learning rates."
  },
  {
    id: 75,
    question: "What is data augmentation?",
    options: ["Making data larger", "Creating new training samples by transforming existing data", "Increasing storage", "More information"],
    correct: 1,
    explanation: "Data augmentation creates variations of training data (rotations, flips, crops) to improve model robustness."
  },
  {
    id: 76,
    question: "What is a learning rate?",
    options: ["How fast you learn", "A hyperparameter controlling step size in optimization", "Speed of education", "Teaching pace"],
    correct: 1,
    explanation: "Learning rate determines how much weights change per training step; too high causes divergence, too low is slow."
  },
  {
    id: 77,
    question: "What is momentum in optimization?",
    options: ["Physical movement", "An optimization technique that accumulates past gradients for faster convergence", "Speed and direction", "Impulse"],
    correct: 1,
    explanation: "Momentum accelerates gradient descent by accumulating past gradients, helping escape local minima."
  },
  {
    id: 78,
    question: "What is ridge regression?",
    options: ["Road on a mountain", "Linear regression with L2 regularization to prevent overfitting", "A mountain feature", "Terrain term"],
    correct: 1,
    explanation: "Ridge regression adds a penalty on large weights, reducing overfitting while maintaining interpretability."
  },
  {
    id: 79,
    question: "What is Lasso regression?",
    options: ["A rope tool", "Linear regression with L1 regularization that can eliminate features", "A loop", "A rope"],
    correct: 1,
    explanation: "Lasso regression uses L1 regularization, which can drive some weights to zero, performing feature selection."
  },
  {
    id: 80,
    question: "What is an epoch in training?",
    options: ["A historical period", "One complete pass through all training data", "An era", "A time period"],
    correct: 1,
    explanation: "An epoch is one iteration through the entire training dataset during model training."
  },
  {
    id: 81,
    question: "What is a batch?",
    options: ["A group of bread", "A subset of data processed together during training", "A large group", "A collection"],
    correct: 1,
    explanation: "A batch is a subset of training data processed together to compute gradients and update weights."
  },
  {
    id: 82,
    question: "What is stochastic gradient descent (SGD)?",
    options: ["Random walking", "Gradient descent using one sample at a time instead of batches", "Probabilistic descent", "Random stepping"],
    correct: 1,
    explanation: "SGD updates weights using single samples, making it faster but noisier than batch gradient descent."
  },
  {
    id: 83,
    question: "What is Adam optimizer?",
    options: ["A person named Adam", "An optimizer combining momentum and adaptive learning rates", "An algorithm", "A method"],
    correct: 1,
    explanation: "Adam is a popular optimizer that combines momentum with per-parameter adaptive learning rates."
  },
  {
    id: 84,
    question: "What is a training error?",
    options: ["Making mistakes during school", "The error a model makes on its training data", "A lesson mistake", "Learning error"],
    correct: 1,
    explanation: "Training error measures how well a model fits the training data it was trained on."
  },
  {
    id: 85,
    question: "What is test error?",
    options: ["Failing an exam", "The error a model makes on unseen test data", "Exam failure", "Testing mistake"],
    correct: 1,
    explanation: "Test error measures how well a model generalizes to new, unseen data (a better metric than training error)."
  },
  {
    id: 86,
    question: "What is ROC curve?",
    options: ["A music style", "A plot of True Positive Rate vs False Positive Rate", "A musical term", "A curve shape"],
    correct: 1,
    explanation: "ROC curves compare True Positive and False Positive rates across classification thresholds."
  },
  {
    id: 87,
    question: "What is AUC?",
    options: ["Auction", "Area Under the ROC Curve, measuring overall classifier performance", "An action", "A container"],
    correct: 1,
    explanation: "AUC measures the area under the ROC curve, with 1.0 being perfect classification and 0.5 being random."
  },
  {
    id: 88,
    question: "What is class imbalance?",
    options: ["Unequal students in class", "When one class has many more samples than others", "Unfair distribution", "Unequal numbers"],
    correct: 1,
    explanation: "Class imbalance occurs when training data has unequal class distributions, affecting model performance."
  },
  {
    id: 89,
    question: "What is SMOTE?",
    options: ["To hit gently", "Synthetic Minority Over-sampling Technique for handling imbalanced data", "A strike", "A small hit"],
    correct: 1,
    explanation: "SMOTE creates synthetic samples of minority classes to balance datasets and improve model fairness."
  },
  {
    id: 90,
    question: "What is stratified sampling?",
    options: ["Layered rocks", "Sampling that maintains class distribution proportions", "Layered data", "Stratified geology"],
    correct: 1,
    explanation: "Stratified sampling divides data into strata and samples from each, preserving overall distributions."
  },
  {
    id: 91,
    question: "What is online learning?",
    options: ["Learning on the internet", "Training models on streaming data continuously", "Web-based education", "Internet courses"],
    correct: 1,
    explanation: "Online learning updates models with new data points continuously, useful for streaming systems."
  },
  {
    id: 92,
    question: "What is offline learning?",
    options: ["Without internet", "Training models once on a fixed dataset", "Internet-free training", "No connection needed"],
    correct: 1,
    explanation: "Offline learning trains models once on a complete dataset, then deploys without further updates."
  },
  {
    id: 93,
    question: "What is ensemble learning?",
    options: ["A group of musicians", "Combining multiple models to improve predictions", "A musical group", "A team"],
    correct: 1,
    explanation: "Ensemble learning combines predictions from multiple models, often outperforming individual models."
  },
  {
    id: 94,
    question: "What is bagging?",
    options: ["Putting items in bags", "Bootstrap Aggregating: training multiple models on random data subsets", "Packaging", "Collecting"],
    correct: 1,
    explanation: "Bagging trains multiple models on random data samples with replacement, then averages predictions."
  },
  {
    id: 95,
    question: "What is boosting?",
    options: ["Increasing something", "Sequentially training models focusing on previous mistakes", "Enhancing", "Amplifying"],
    correct: 1,
    explanation: "Boosting trains models sequentially, with each model focusing on correcting previous model errors."
  },
  {
    id: 96,
    question: "What is Random Forest?",
    options: ["A real forest", "An ensemble of decision trees trained on random data subsets", "Nature preserve", "Tree collection"],
    correct: 1,
    explanation: "Random Forest combines multiple decision trees, reducing overfitting and improving generalization."
  },
  {
    id: 97,
    question: "What is a decision tree?",
    options: ["A tree that decides things", "A model that learns hierarchical if-then-else rules", "A tree making choices", "A decision structure"],
    correct: 1,
    explanation: "Decision trees recursively split data based on features, creating interpretable models resembling flowcharts."
  },
  {
    id: 98,
    question: "What is pruning in decision trees?",
    options: ["Cutting tree branches", "Removing unnecessary tree nodes to prevent overfitting", "Trimming trees", "Cutting branches"],
    correct: 1,
    explanation: "Pruning removes tree branches that don't improve performance, preventing overfitting."
  },
  {
    id: 99,
    question: "What is a kernel in SVM?",
    options: ["Seed in corn", "A function that transforms data into higher dimensions for separation", "A seed", "A core component"],
    correct: 1,
    explanation: "Kernels in SVMs transform data into higher dimensions where non-linear problems become linearly separable."
  },
  {
    id: 100,
    question: "What is zero-shot learning?",
    options: ["Shooting nothing", "AI recognizing classes it hasn't seen before", "No shooting", "Empty attempt"],
    correct: 1,
    explanation: "Zero-shot learning allows AI to recognize new classes without training examples by understanding descriptions."
  }
];

// HARD LEVEL QUESTIONS (50)
export const hardQuestions: QuizQuestion[] = [
  {
    id: 101,
    question: "What is the curse of dimensionality?",
    options: ["A curse about dimensions", "Performance degradation as feature dimensions increase", "A supernatural curse", "A mathematical spell"],
    correct: 1,
    explanation: "Higher dimensions require exponentially more data, sparse coverage, and distance similarities weaken."
  },
  {
    id: 102,
    question: "What is Principal Component Analysis (PCA)?",
    options: ["Main character analysis", "Dimensionality reduction technique finding principal variance directions", "Chief person study", "Primary study"],
    correct: 1,
    explanation: "PCA reduces dimensions while preserving maximum variance, improving efficiency and visualization."
  },
  {
    id: 103,
    question: "What is t-SNE?",
    options: ["A name", "t-Distributed Stochastic Neighbor Embedding for visualizing high-dimensional data", "A type of name", "An acronym"],
    correct: 1,
    explanation: "t-SNE maps high-dimensional data to 2D/3D while preserving local structure for visualization."
  },
  {
    id: 104,
    question: "What is UMAP?",
    options: ["A map", "Uniform Manifold Approximation and Projection for dimensionality reduction", "A chart", "A diagram"],
    correct: 1,
    explanation: "UMAP reduces dimensions preserving both local and global structure, faster than t-SNE."
  },
  {
    id: 105,
    question: "What is a manifold?",
    options: ["Many folds", "A continuous, lower-dimensional surface embedded in high-dimensional space", "Multiple folders", "Many layers"],
    correct: 1,
    explanation: "Manifolds are lower-dimensional structures embedded in high dimensions, central to manifold learning."
  },
  {
    id: 106,
    question: "What is the VC dimension?",
    options: ["A dimension measurement", "Vapnik-Chervonenkis dimension: measure of model complexity", "Version complexity", "Complexity dimension"],
    correct: 1,
    explanation: "VC dimension bounds model generalization ability, relating hypothesis space expressiveness to sample complexity."
  },
  {
    id: 107,
    question: "What is Rademacher complexity?",
    options: ["A complex number", "A measure of function class complexity related to generalization", "A mathematical concept", "A complex rate"],
    correct: 1,
    explanation: "Rademacher complexity quantifies how well function classes fit random labels, bounding generalization error."
  },
  {
    id: 108,
    question: "What is PAC learning?",
    options: ["A type of packaging", "Probably Approximately Correct learning framework", "Packing learning", "Package theory"],
    correct: 1,
    explanation: "PAC learning ensures algorithms find approximately correct hypotheses with high probability given enough samples."
  },
  {
    id: 109,
    question: "What is a loss landscape?",
    options: ["A landscape view", "The 3D surface showing loss at different weight configurations", "Terrain of error", "A landscape of loss"],
    correct: 1,
    explanation: "Loss landscapes visualize the optimization surface; sharp minima may generalize poorly vs flat minima."
  },
  {
    id: 110,
    question: "What is a local minimum?",
    options: ["A small bottom", "A point where gradient is zero but not the global optimum", "A small valley", "A local low point"],
    correct: 1,
    explanation: "Local minima are points where loss is locally minimal but not the globally best solution."
  },
  {
    id: 111,
    question: "What is a saddle point?",
    options: ["A horse saddle", "A critical point that's a minimum in some dimensions, maximum in others", "A seat point", "A mounting point"],
    correct: 1,
    explanation: "Saddle points present challenges for optimization as they're neither minima nor maxima."
  },
  {
    id: 112,
    question: "What is generalization error?",
    options: ["A general error", "The difference between training and test performance", "Common mistakes", "Universal error"],
    correct: 1,
    explanation: "Generalization error measures how well models perform on unseen data vs training data."
  },
  {
    id: 113,
    question: "What is the bias-variance tradeoff?",
    options: ["Fairness-flexibility compromise", "Balancing underfitting (high bias) vs overfitting (high variance)", "Fair-flexible trade", "Balance compromise"],
    correct: 1,
    explanation: "Complex models reduce bias but increase variance; simple models do the opposite. Optimal balance exists."
  },
  {
    id: 114,
    question: "What is Bayesian optimization?",
    options: ["Religious optimization", "Using Bayesian models to optimize expensive black-box functions", "Prayer-based tuning", "Faith optimization"],
    correct: 1,
    explanation: "Bayesian optimization intelligently samples hyperparameters using probabilistic models."
  },
  {
    id: 115,
    question: "What is Gaussian Process?",
    options: ["A bell curve", "A probabilistic non-parametric model for regression and optimization", "Statistical process", "Normal distribution"],
    correct: 1,
    explanation: "Gaussian Processes define distributions over functions, useful for uncertainty quantification."
  },
  {
    id: 116,
    question: "What is maximum likelihood estimation?",
    options: ["Largest possible belief", "Finding parameters maximizing probability of observed data", "Greatest possibility", "Highest probability"],
    correct: 1,
    explanation: "MLE finds parameters most likely to produce observed data, fundamental to statistical learning."
  },
  {
    id: 117,
    question: "What is Expectation-Maximization (EM)?",
    options: ["Expecting maximum", "Iterative algorithm for finding parameters with hidden variables", "Hope-boost cycle", "Expect-maximize loop"],
    correct: 1,
    explanation: "EM alternates between computing expectations and maximizing likelihood when data has hidden variables."
  },
  {
    id: 118,
    question: "What is a variational autoencoder (VAE)?",
    options: ["Variable car", "Generative model learning probabilistic latent representations", "Variable encoder", "Flexible encoding"],
    correct: 1,
    explanation: "VAEs learn latent distributions enabling both generation and inference of new data."
  },
  {
    id: 119,
    question: "What is a generative adversarial network (GAN)?",
    options: ["A hostile network", "Two networks competing: generator creates fake data, discriminator identifies fakes", "Opposing networks", "Competing system"],
    correct: 1,
    explanation: "GANs use adversarial training between generator and discriminator networks for data generation."
  },
  {
    id: 120,
    question: "What is adversarial training?",
    options: ["Fighting-based learning", "Training models robust to adversarial perturbations and attacks", "Combat learning", "Hostile instruction"],
    correct: 1,
    explanation: "Adversarial training makes models robust by training on perturbed/attacked examples."
  },
  {
    id: 121,
    question: "What is an adversarial example?",
    options: ["A competitive instance", "Small input perturbations causing wrong predictions", "Opposing sample", "Competing case"],
    correct: 1,
    explanation: "Adversarial examples are slightly perturbed inputs causing misclassification, revealing model vulnerabilities."
  },
  {
    id: 122,
    question: "What is the lottery ticket hypothesis?",
    options: ["A gambling theory", "Most neural network parameters are unnecessary; small subnetworks suffice", "Winning tickets", "Prize concept"],
    correct: 1,
    explanation: "This hypothesis suggests dense networks contain 'lucky' subnetworks performing equally when trained from start."
  },
  {
    id: 123,
    question: "What is knowledge distillation?",
    options: ["Purifying wisdom", "Transferring knowledge from large models to smaller ones", "Wisdom extraction", "Learning transfer"],
    correct: 1,
    explanation: "Knowledge distillation trains small models to mimic large ones, enabling efficient deployment."
  },
  {
    id: 124,
    question: "What is continual learning?",
    options: ["Never-ending education", "Learning from sequential tasks while preventing catastrophic forgetting", "Perpetual training", "Never-stop learning"],
    correct: 1,
    explanation: "Continual learning updates models on new tasks without forgetting previous knowledge."
  },
  {
    id: 125,
    question: "What is catastrophic forgetting?",
    options: ["Terrible memory", "When new training overwrites previous knowledge", "Bad amnesia", "Terrible recall"],
    correct: 1,
    explanation: "Catastrophic forgetting occurs when learning new tasks degrades performance on old ones."
  },
  {
    id: 126,
    question: "What is meta-learning?",
    options: ["Beyond learning", "Learning how to learn, optimizing the learning process itself", "Super-education", "Transcendent learning"],
    correct: 1,
    explanation: "Meta-learning trains models to learn from few examples, enabling rapid adaptation."
  },
  {
    id: 127,
    question: "What is few-shot learning?",
    options: ["Quick shooting", "Learning from very few examples", "Limited attempts", "Minimal examples"],
    correct: 1,
    explanation: "Few-shot learning enables models to learn new classes from just one or a few examples."
  },
  {
    id: 128,
    question: "What is domain adaptation?",
    options: ["Adjusting domains", "Training on one domain but applying to different domains", "Domain adjustment", "Boundary shifting"],
    correct: 1,
    explanation: "Domain adaptation handles distribution shifts between training and deployment environments."
  },
  {
    id: 129,
    question: "What is domain shift?",
    options: ["Moving grounds", "Significant changes in data distribution between training and deployment", "Terrain change", "Environmental shift"],
    correct: 1,
    explanation: "Domain shift causes model performance degradation when deployment distributions differ from training."
  },
  {
    id: 130,
    question: "What is interpretability?",
    options: ["Explaining things", "The ability to understand and explain model decisions", "Understanding reason", "Comprehension ability"],
    correct: 1,
    explanation: "Interpretability allows understanding why models make specific predictions, crucial for trust."
  },
  {
    id: 131,
    question: "What is LIME?",
    options: ["Citrus fruit", "Local Interpretable Model-agnostic Explanations for explaining predictions", "A flavor", "A green fruit"],
    correct: 1,
    explanation: "LIME approximates model behavior locally with interpretable models to explain predictions."
  },
  {
    id: 132,
    question: "What is SHAP?",
    options: ["A form", "SHapley Additive exPlanations using game theory for feature importance", "An outline", "A configuration"],
    correct: 1,
    explanation: "SHAP uses Shapley values from game theory to determine feature contributions fairly."
  },
  {
    id: 133,
    question: "What is attention visualization?",
    options: ["Watching visually", "Visualizing which input parts models focus on", "Attention display", "Focus mapping"],
    correct: 1,
    explanation: "Attention visualization shows which inputs or regions models prioritize in predictions."
  },
  {
    id: 134,
    question: "What is gradient-based saliency?",
    options: ["Slope salience", "Using input gradients to identify important features affecting outputs", "Gradient importance", "Slope significance"],
    correct: 1,
    explanation: "Gradient-based saliency computes input gradients to identify which pixels/features influence predictions."
  },
  {
    id: 135,
    question: "What is federated learning?",
    options: ["United learning", "Training models across decentralized devices without centralizing data", "Confederated education", "Distributed training"],
    correct: 1,
    explanation: "Federated learning trains models on devices while keeping data private, aggregating only updates."
  },
  {
    id: 136,
    question: "What is differential privacy?",
    options: ["Privacy differences", "Mathematical framework ensuring privacy when training on sensitive data", "Different security", "Relative confidentiality"],
    correct: 1,
    explanation: "Differential privacy provides formal privacy guarantees, adding controlled noise to data or gradients."
  },
  {
    id: 137,
    question: "What is fairness in AI?",
    options: ["Equal justice", "Ensuring models don't discriminate based on protected attributes", "Just treatment", "Impartial decisions"],
    correct: 1,
    explanation: "AI fairness addresses discrimination, requiring demographic parity or equalized odds across groups."
  },
  {
    id: 138,
    question: "What is algorithmic bias?",
    options: ["Algorithm favoritism", "When models systematically disadvantage certain groups", "System preference", "Systematic discrimination"],
    correct: 1,
    explanation: "Algorithmic bias arises from biased training data, features, or loss functions, perpetuating inequities."
  },
  {
    id: 139,
    question: "What is causal inference?",
    options: ["Inferring reason", "Inferring cause-effect relationships from data", "Effect reasoning", "Reason finding"],
    correct: 1,
    explanation: "Causal inference determines whether changes in one variable cause changes in another."
  },
  {
    id: 140,
    question: "What is a causal graph?",
    options: ["A graph showing reasons", "A directed graph representing causal relationships", "Cause diagram", "Effect chart"],
    correct: 1,
    explanation: "Causal graphs (DAGs) visualize assumed causal structures, essential for causal reasoning."
  },
  {
    id: 141,
    question: "What is counterfactual reasoning?",
    options: ["Opposite thinking", "Reasoning about alternative scenarios (what would have happened if...)", "Alternative scenarios", "Hypothetical thinking"],
    correct: 1,
    explanation: "Counterfactual reasoning explores alternate outcomes, important for understanding why decisions occurred."
  },
  {
    id: 142,
    question: "What is a neural architecture search (NAS)?",
    options: ["Searching buildings", "Automatically designing neural network architectures", "Automatic design", "Structure automation"],
    correct: 1,
    explanation: "NAS uses algorithms to automatically find optimal network architectures, reducing manual design."
  },
  {
    id: 143,
    question: "What is AutoML?",
    options: ["Automatic machines", "Automating machine learning pipeline design end-to-end", "Self-operating ML", "Automation system"],
    correct: 1,
    explanation: "AutoML automatically handles data preprocessing, feature engineering, model selection, and hyperparameter tuning."
  },
  {
    id: 144,
    question: "What is quantization?",
    options: ["Counting things", "Reducing model size using lower-precision weights", "Measurement reduction", "Precision lowering"],
    correct: 1,
    explanation: "Quantization represents weights with fewer bits, drastically reducing model size and inference speed."
  },
  {
    id: 145,
    question: "What is pruning in neural networks?",
    options: ["Cutting branches", "Removing unimportant weights to reduce model size", "Branch removal", "Weight elimination"],
    correct: 1,
    explanation: "Pruning removes weights or neurons with minimal impact on performance, compressing models."
  },
  {
    id: 146,
    question: "What is distillation loss?",
    options: ["Extraction loss", "Loss term in knowledge distillation measuring student-teacher disagreement", "Teaching loss", "Transfer measure"],
    correct: 1,
    explanation: "Distillation loss (typically KL divergence) measures how well the student mimics the teacher model."
  },
  {
    id: 147,
    question: "What is semantic segmentation?",
    options: ["Meaningful division", "Assigning class labels to every pixel in an image", "Concept partitioning", "Label assignment"],
    correct: 1,
    explanation: "Semantic segmentation classifies each pixel into categories, useful for scene understanding."
  },
  {
    id: 148,
    question: "What is instance segmentation?",
    options: ["Individual division", "Detecting and segmenting individual object instances in images", "Object separation", "Instance detection"],
    correct: 1,
    explanation: "Instance segmentation distinguishes separate object instances, combining detection and segmentation."
  },
  {
    id: 149,
    question: "What is panoptic segmentation?",
    options: ["Overall division", "Combining semantic segments with instance boundaries", "Total segmentation", "Complete division"],
    correct: 1,
    explanation: "Panoptic segmentation unifies semantic and instance segmentation for comprehensive scene understanding."
  },
  {
    id: 150,
    question: "What is the AI alignment problem?",
    options: ["Robot cooperation", "Ensuring advanced AI systems behave according to human values", "Agreement issue", "Harmony problem"],
    correct: 1,
    explanation: "AI alignment addresses ensuring powerful systems pursue intended goals without negative consequences."
  }
];
