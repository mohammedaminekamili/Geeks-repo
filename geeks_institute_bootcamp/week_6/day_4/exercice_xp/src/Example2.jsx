import data from "./data2.json";

const Example2 = () => {
  const skillsData = data["Skills"];

  return (
    <div className="container mt-4">
      <h2>My Skills</h2>
      {skillsData.map((category, index) => (
        <div key={index} className="mb-4">

          <h4 className="text-primary">{category.Area}</h4>
          
          <ul>
            
            {category.SkillSet.map((skill, subIndex) => (
              <li key={subIndex}>
                {skill.Name} 
                
                {skill.Hot && (
                  <span className="badge bg-danger ms-2">HOT!</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Example2;