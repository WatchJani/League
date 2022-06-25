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
const Leagues = {
  nameOfArray: "sesonse",
  name: "LaLiga",
  sesonse: [
    {
      name: "sezona1",
    },
    {
      name: "sezona2",
    },
    {
      name: "sezona3",
    },
  ],
};

const Player_tab1 = {
  nameOfArray: "statistic",
  ime: "leonel",
  prezime: "messi",
  visina: 169,
  statistic: [
    {
      goals: 800,
      assists: 500,
      red_cards: 2,
      yellow_cards: 21,
      penalti_goals: 21,
    },
  ],
};

const Player_tab2 = {
  nameOfArray: "statistic",
  ime: "leonel",
  prezime: "messi",
  visina: 169,
  statistic: [
    {
      goals: 50,
      assists: 12,
      red_cards: 0,
      yellow_cards: 1,
      penalti_goals: 2,
    },
  ],
};

export { Season, Team, Leagues, Player_tab1, Player_tab2 };
