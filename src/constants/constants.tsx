import { ITeam } from "../types/types";

export const BASE_URL = "https://site.api.espn.com/apis/site/v2/sports/basketball/nba/"

interface IDraft {
  [coach: string]: ITeam[];
}

export const DRAFT: IDraft = {
  "Wyatt": [
    {id: 2, name: "Boston Celtics"},
    {id: 11, name: "Indiana Pacers"},
    {id: 23, name: "Sacramento Kings"},
    {id: 28, name: "Toronto Raptors"},
    {id: 4, name: "Chicago Bulls"}
  ],
  "Jake": [
    {id: 25, name: "Oklahoma City Thunder"},
    {id: 19, name: "Orlando Magic"},
    {id: 14, name: "Miami Heat"},
    {id: 30, name: "Charlotte Hornets"},
    {id: 26, name: "Utah Jazz"}
  ],
  "Conti": [
    {id: 18, name: "New York Knicks"},
    {id: 15, name: "Milwuakee Bucks"},
    {id: 9, name: "Golden State Warriors"},
    {id: 24, name: "San Antonio Spurs"},
    {id: 8, name: "Detroit Pistons"}
  ],
  "Casey": [
    {id: 16, name: "Minnesota Timberwolves"},
    {id: 21, name: "Phoenix Suns"},
    {id: 13, name: "Los Angeles Lakers"},
    {id: 1, name: "Atlanta Hawks"},
    {id: 27, name: "Washington Wizards"}
  ],
  "Sam": [
    {id: 7, name: "Denver Nuggets"},
    {id: 5, name: "Cleveland Cavaliers"},
    {id: 29, name: "Memphis Grizzlies"},
    {id: 10, name: "Houston Rockets"},
    {id: 22, name: "Portland Trailblazers"}
  ],
  "Adam": [
    {id: 6, name: "Dallas Mavericks"},
    {id: 20, name: "Philadelphia 76ers"},
    {id: 12, name: "Los Angeles Clippers"},
    {id: 3, name: "New Orleans Pelicans"},
    {id: 17, name: "Brooklyn Nets"}
  ]
}
