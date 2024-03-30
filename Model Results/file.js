// Sample function to generate a random AI prompt
function generateRandomPrompt() {
    // List of possible prompt components
    const industries = ["technology", "healthcare", "finance", "entertainment"];
    const actions = ["develop", "optimize", "analyze", "implement"];
    const skills = ["JavaScript", "Python", "machine learning", "natural language processing"];
  
    // Randomly select components for the prompt
    const selectedIndustry = industries[Math.floor(Math.random() * industries.length)];
    const selectedAction = actions[Math.floor(Math.random() * actions.length)];
    const selectedSkill = skills[Math.floor(Math.random() * skills.length)];
  
    // Construct the prompt
    const prompt = Seeking AI Prompt Engineer with JavaScript skills for a project in the ${selectedIndustry} industry. The candidate should ${selectedAction} using ${selectedSkill}.;
  
    return prompt;
  }
  
  // Example usage
  const randomPrompt = generateRandomPrompt();
  console.log(randomPrompt);