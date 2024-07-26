function findMatching(names, query) {
    return names.filter(name => name.toLowerCase() === query.toLowerCase());
  }
  
  function fuzzyMatch(names, query) {
    return names.filter(name => name.toLowerCase().startsWith(query.toLowerCase()));
  }
  
  function matchName(drivers, query) {
    return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
  }
  
  const names = ["Mwangi", "Wanjiru", "Njoroge", "Kamau", "Ochieng", "Mwangi"];
  const drivers = [
    { name: "Mwangi", hometown: "Nairobi" },
    { name: "Wanjiru", hometown: "Mombasa" },
    { name: "Njoroge", hometown: "Kisumu" },
    { name: "Kamau", hometown: "Nakuru" },
    { name: "Ochieng", hometown: "Eldoret" },
    { name: "Mwangi", hometown: "Thika" }
  ];
  
  console.log(findMatching(names, "Mwangi")); 
  console.log(fuzzyMatch(names, "Wa")); 
  console.log(matchName(drivers, "Mwangi")); 
  