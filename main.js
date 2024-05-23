const players = [
  {
    name: "Eric Haaland",
    age: 22,
    team: {
      name: "Manchester City",
      country: "England"
    }
  },
  {
    name: "Kylian Mbappé",
    age: 24,
    team: {
      name: "PSG",
      country: "France"
    }
  },
  {
    name: "Gavi",
    age: 18,
    team: {
      name: "Barcelona",
      country: "Spain"
    }
  },
  {
    name: "Pedri",
    age: 20,
    team: {
      name: "Barcelona",
      country: "Spain"
    }
  },
  {
    name: "Vinicous Junior",
    age: 22,
    team: {
      name: "Real Madrid",
      country: "Spain"
    }
  }
]

// 1.
players.filter(player => {
  if (player.team.name === "Barcelona" || player.team.name === "Real Madrid") {
    return true;
  }

  return false;
})

// 2.
players.sort((a, b) => {
  return a.age - b.age;
})

// 3.
const playerName = {
  name: "Cristiano"
}

const playerSurname = {
  surname: "Ronaldo"
}

const merged = { ...playerName, ...playerSurname }

// 4.
players.push({
  name: "Jamal",
  age: 20,
  team: {
    name: "Bayern Munisch",
    country: "Germany"
  }
})

// 5.
const obj = {}

Object.freeze(obj);

// 6.
const isEveryoneOld = players.every(player => {
  return player.age > 20;
});


// 7.
players.find((player) => {
  return player.team.name === "Chealsea"
})

// 8.
const names = players.filter(player => {
  return player.team.name === "Barca"
}).map(player => {
  return player.name
})

// 9.
const sum = players.reduce((prevSum, curr) => {
  return prevSum + curr.age
}, 0)

// 10.
class Car {
  constructor(brand, year, capacity) {
    this.brand = brand
    this.year = year;
    this.capacity = capacity;
  }
}

class BMW extends Car {
  constructor(brand, year, capacity) {
    super(brand, year, capacity)
  }
}
class Alphina extends BMW {
  constructor(brand, year, capacity) {
    super(brand, year, capacity);
  }
}

const newAlphina = new Alphina("BMW", 2020, 900)


const sum = players.reduce((prevSum,curr) =>  {

  return prevSum + curr.age

}  0  )

console.log( player.name)













const players = [
  {
    name: "Eric Haaland",
    age: 22,
    team: {
      name: "Manchester City",
      country: "England"
    }
  },
  {
    name: "Kylian Mbappé",
    age: 24,
    team: {
      name: "PSG",
      country: "France"
    }
  },
  {
    name: "Gavi",
    age: 18,
    team: {
      name: "Barcelona",
      country: "Spain"
    }
  },
  {
    name: "Pedri",
    age: 20,
    team: {
      name: "Barcelona",
      country: "Spain"
    }
  },
  {
    name: "Vinicous Junior",
    age: 22,
    team: {
      name: "Real Madrid",
      country: "Spain"
    }
  }
];

// task 1
players.find((player) => {
  return player.team.name === "Chealsea"
})







let = x;

x = 1
y 












// task 5 


// players.sort((a, b) => {
//   return a.age - b.age;
// })



// task 