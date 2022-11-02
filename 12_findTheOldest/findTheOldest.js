const findTheOldest = function(people) {
  const peopleWithAge = people.map(person => {
    let personWithAge = {...person};
    if ('yearOfDeath' in person) {
      personWithAge.age = person.yearOfDeath - person.yearOfBirth;
    } else {
      personWithAge.age = new Date().getFullYear() - person.yearOfBirth;
    }
    
    return personWithAge;
  });
  const sortedPeople = peopleWithAge.sort((a,b) => {
    if (a.age > b.age) {
      return 1;
    }
    return -1;
  });
  console.log(sortedPeople);
  return sortedPeople.pop();
};

// Do not edit below this line
module.exports = findTheOldest;
