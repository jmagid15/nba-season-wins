import { useEffect, useState } from 'react';
import { BASE_URL, DRAFT } from '../constants/constants';
// import { ILeagueLeader } from '../App';
import { ICoach } from '../types/types';
import { H3, H4 } from '@blueprintjs/core';

interface ICoachSummaryProps {
  coach: ICoach;
  setCoaches: React.Dispatch<React.SetStateAction<ICoach[]>>;
}

const CoachSummary: React.FC<ICoachSummaryProps> = ({ coach, setCoaches }) => {
  // const [loading, setLoading] = useState<boolean>(false);

  // setLoading(true);

  useEffect(() => {
    const getTeamRecords = async () => {
      const records: { [key: string]: string } = {};
      const teamRecordRequests = coach.teams.map(async (team) => {
        // Make API call
        const response = await fetch(`${BASE_URL}teams/${team.id}`)
        const data = await response.json();

        // Extract record from response
        const teamRecord = data.team.record.items[0].summary

        records[team.name] = teamRecord;
      })

      await Promise.all(teamRecordRequests);
      coach.teamRecords = records;

      // Compute total wins
      coach.totalWins = Object.values(records).reduce((prev, curr) => {
        const wins = curr ? parseInt(curr.split("-")[0]) : 0;
        return prev + wins;
      }, 0)

      // Update the player state in App component
      setCoaches((prev) => {
        const updatedCoaches = [...prev];
        const index = updatedCoaches.findIndex(c => c.name === coach.name);
        updatedCoaches[index] = coach;
        return updatedCoaches;
      });
    };

    getTeamRecords();
  }, [coach, setCoaches]);

  return (
    <div className="team-record-table">
      <H3>{coach.name}</H3>
      <H4>Total Wins: {coach.totalWins}</H4>
      <table className="bp5-html-table bp5-html-table-striped">
        <thead>
          <tr>
            <th>Team</th>
            <th>Record</th>
          </tr>
        </thead>
        <tbody>
          {coach.teams.map((team, index) => (
            <tr key={index}>
              <td>{team.name}</td>
              <td>{coach.teamRecords[team.name] || 'Loading...'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  // useEffect(() => {
  //   // for (const [k, v] of Object.entries(DRAFT[coach])) {
  //   for (let i = 0; i < DRAFT[coach].length; i++) {
  //     getRecordForTeam(i)
  //   }
    
  // })


  // setTotalWins(comp);


  // return (
  //   <div>
  //     <H3></H3>
  //   </div>
  // )
}

export default CoachSummary;
