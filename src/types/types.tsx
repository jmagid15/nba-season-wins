export interface ITeam {
  id: number;
  name: string;
}

export interface ICoach {
  name: string;
  teams: ITeam[];
  totalWins: number;
  teamRecords: { [key: string]: string };
}
