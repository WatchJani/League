const Season = {
  nameOfArray: "rounds",
  name: "LaLiga 22/23",
  number: "22/23",
  actual: true,
  rounds: [
    {
      id: 1,
      number: 1,
      fictures: [
        {
          homeTeam: "Barcelona",
          visitorsTeam: "Atletiko",
        },
        {
          homeTeam: "Atletiko",
          visitorsTeam: "Barcelona",
        },
      ],
    },
    {
      id: 2,
      number: 2,
      fictures: [
        {
          homeTeam: "Barcelona",
          visitorsTeam: "Atletiko",
        },
        {
          homeTeam: "Atletiko",
          visitorsTeam: "Barcelona",
        },
      ],
    },
  ],
};

const Team = {
  nameOfArray: "players",
  name: "Barcelona",
  players: [
    {
      ime: "leonel",
      prezime: "messi",
      visina: 169,
    },
    {
      ime: "leonel",
      prezime: "messi",
      visina: 169,
    },
  ],
};

// ! TODO: doing Leagues/moreinfo (tableView)
const Leagues = [
  {
    nameOfArray: "sesonse",
    avatar: "url_od_slike.jpg",
    name: "LaLiga",
    address: "Spanija",
    sesonse: [
      {
        name: "Sezona u kojoj je sve namjesteno",
        number: "22/23",
        actual: true,
        locked: "ne zna ni Boja sta je ovo",
      },
      {
        name: "sezona u kojoj je sve regularno",
        number: "21/22",
        actual: false,
        locked: "ne zna ni Boja sta je ovo",
      },
      {
        name: "kreativni smo u smisljanju imena :D",
        number: "20/21",
        actual: false,
        locked: "ne zna ni Boja sta je ovo",
      },
    ],
  },
  {
    nameOfArray: "sesonse",
    avatar: "url_od_slike.jpg",
    name: "LaLiga",
    address: "Spanija",
    sesonse: [
      {
        name: "Sezona u kojoj je sve namjesteno",
        number: "22/23",
        actual: true,
        locked: "ne zna ni Boja sta je ovo",
      },
      {
        name: "sezona u kojoj je sve regularno",
        number: "21/22",
        actual: false,
        locked: "ne zna ni Boja sta je ovo",
      },
      {
        name: "kreativni smo u smisljanju imena :D",
        number: "20/21",
        actual: false,
        locked: "ne zna ni Boja sta je ovo",
      },
    ],
  },
];

const Player = [
  {
    avatar: "slika neka.jpg",
    name: "Messi",
    LastName: "Leonel",
    Height: 169,
    Weight: 60,
    statistic: {
      season: {
        goals: 51,
        red_card: 0,
        yellow_card: 3,
        assists: 20,
        penalty: 1,
        auto_goals: 0,
        play_mech: 50,
        shot: 100,
        pass: 500,
      },
      carier: {
        goals: 900,
        red_card: 25,
        yellow_card: 80,
        assists: 410,
        penalty: 100,
        auto_goals: 1,
        play_mech: 1000,
        shot: 1500,
        pass: 5000,
      },
    },
  },
];

export { Season, Team, Leagues, Player_tab1, Player_tab2, Player };
