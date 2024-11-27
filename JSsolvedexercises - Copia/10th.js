function createTechList() {
    const technologies = ["React", "Jest", "HTML", "CSS", "JavaScript"];
    const name = "Lucas";
  
    
    if (technologies.length === 0) {
      return 'Vazio!';
    }
    
    
    const techList = technologies.map(tech => {
      return {
        tech: tech,
        name: name
      };
    });
    
   
    techList.sort((a, b) => a.tech.localeCompare(b.tech));
    
    return techList;
  }

  console.log(createTechList());