import React, { useEffect, useState } from 'react';
import { DRAFT } from '../constants/constants';
import { ICoach } from '../types/types';
import CoachSummary from './CoachSummary';
import '../index.css';
import { H1, H4, Navbar } from "@blueprintjs/core";


const App: React.FC = () => {
  const [coaches, setCoaches] = useState<ICoach[]>([]);
  const [leagueLeader, setLeagueLeader] = useState<ICoach | null>(null);

  useEffect(() => {
    // Initialize coaches from DRAFT constant
    const initCoaches = Object.entries(DRAFT).map(([name, teams]) => ({
      name,
      teams,
      totalWins: 0,
      teamRecords: {}
    }));
    setCoaches(initCoaches);
  }, []);

  const determineLeagueLeader = (updatedCoaches: ICoach[]) => {
    const leader = updatedCoaches.reduce((prev, curr) => {
      return curr.totalWins > prev.totalWins ? curr : prev
    }, updatedCoaches[0]);
    setLeagueLeader(leader);
  }

  useEffect(() => {
    determineLeagueLeader(coaches);
  }, [coaches]);

  return (
    <div className="bp5-dark dark-container">
      <div className="page-header">
        <H1>NBA Season Team Wins</H1>
        {leagueLeader && (
          <H4>🎉 League Leader: {leagueLeader.name} with {leagueLeader.totalWins} wins 🎉</H4>
        )}
      </div>
      <div className="table-container">
        {coaches.map((coach, index) => (
          <CoachSummary key={index} coach={coach} setCoaches={setCoaches} />
        ))}
      </div>
    </div>
  );
};

export default App;
