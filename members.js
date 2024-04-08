function skillsMember(skills, memberName, requiredSkills = []) {
    // Input validation (optional but recommended):
    if (!skills || typeof skills !== 'object') {
      throw new TypeError('skills argument must be an object');
    }
  
    if (!memberName || typeof memberName !== 'string') {
      throw new TypeError('memberName argument must be a string');
    }
  
    if (requiredSkills && (!Array.isArray(requiredSkills) || requiredSkills.some(skill => typeof skill !== 'string'))) {
      throw new TypeError('requiredSkills argument must be an array of strings (optional)');
    }
  
    // Check if memberName exists in skills object:
    if (!skills.hasOwnProperty(memberName)) {
      return false; // Member not found
    }
  
    // Check if required skills are met (if provided):
    if (requiredSkills.length > 0) {
      const memberSkills = skills[memberName];
      return requiredSkills.every(skill => memberSkills.includes(skill));
    }
  
    // Default case: Check if member has any skills:
    return Object.keys(skills[memberName]).length > 0;
  }
  
  // Example usage:
  const skills = {
    Alice: ['JavaScript', 'HTML', 'CSS'],
    Bob: ['Java', 'Python'],
    Charlie: [] // No skills
  };
  
  console.log(skillsMember(skills, 'Alice'));         // true (Alice has skills)
  console.log(skillsMember(skills, 'Bob', ['Java']));  // true (Bob has Java)
  console.log(skillsMember(skills, 'Bob', ['C++']));  // false (Bob doesn't have C++)
  console.log(skillsMember(skills, 'Charlie'));       // false (Charlie has no skills)
  