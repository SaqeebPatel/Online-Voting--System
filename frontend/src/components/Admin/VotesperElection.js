import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Container, Alert, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const VotesPerElection = () => {
  const [electionsData, setElectionsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/voter/getVotesPerElection`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setElectionsData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching votes data");
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  const getVoterCandidateCount = (votes) => {
    const voterCandidateCount = {};

    votes.forEach((vote) => {
      const voterName = vote.voterName || "Anonymous";
      const candidateName = vote.candidateName || "Unknown Candidate";
      const voterKey = `${voterName}-${candidateName}`;

      if (voterCandidateCount[voterKey]) {
        voterCandidateCount[voterKey].voteCount += 1;
      } else {
        voterCandidateCount[voterKey] = {
          voterName,
          candidateName,
          voteCount: 1,
        };
      }
    });

    return voterCandidateCount;
  };

  return (
    <div className="containerfluid">
      <Container>
      <Button variant="secondary" onClick={() => navigate(-1)} className="mb-3" style={{marginLeft:"1200px",marginTop:"20px"}}>
          Go Back
        </Button>
        <h2>Elections and Votes</h2>
        
        {/* Back Button */}
        

        {electionsData.length > 0 ? (
          electionsData.map((election, electionIndex) => (
            <div key={electionIndex}>
              <h4>{election.electionTitle}</h4>
              <p>{election.description}</p>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Voter Name</th>
                    <th>Candidate Name</th>
                    <th>Vote Count</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(getVoterCandidateCount(election.votes)).map(
                    (
                      [voterKey, { voterName, candidateName, voteCount }],
                      index
                    ) => (
                      <tr key={index}>
                        <td>{voterName}</td>
                        <td>{candidateName}</td>
                        <td>{voteCount}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </Table>
            </div>
          ))
        ) : (
          <Alert variant="info">No elections found</Alert>
        )}
      </Container>
    </div>
  );
};

export default VotesPerElection;
