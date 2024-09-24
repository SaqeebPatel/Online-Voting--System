import React, { useState } from "react";
import { Form, Button, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import '../CSS/AddCandidate.css'; 
import Navbar from "../UserNavbar";

const AddCandidate = () => {
  const [candidate, setCandidate] = useState({
    candidatename: "",
    age: "",
    Party: "",
    education: "",
    Partyimage: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const token = localStorage.getItem("token");

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleChange = (e) => {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setCandidate({ ...candidate, Partyimage: reader.result });
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5005/api/candidate/addcandidate",
        candidate,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponseData(response.data);
      setCandidate({
        candidatename: "",
        age: "",
        Party: "",
        education: "",
        Partyimage: "",
      });
      toast.success("Candidate added successfully!", {
        position: "top-right",
      });
    } catch (error) {
      console.error(
        "Error adding candidate:",
        error.response?.data || error.message
      );
      toast.error(
        `Failed to add candidate! ${error.response?.data?.message || ""}`,
        {
          position: "top-right",
        }
      );
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1); // Go to the previous page
  };

  return (
    <>
      <Container className="add-candidate-container">
        <h2 className="add-candidate-title">Add Candidate</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCandidateName" className="form-group">
            <Form.Label className="form-label">Candidate Name</Form.Label>
            <Form.Control
              type="text"
              name="candidatename"
              placeholder="Enter candidate name"
              value={candidate.candidatename}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formAge" className="form-group">
            <Form.Label className="form-label">Age</Form.Label>
            <Form.Control
              type="text"
              name="age"
              placeholder="Enter age"
              value={candidate.age}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formParty" className="form-group">
            <Form.Label className="form-label">Party</Form.Label>
            <Form.Control
              type="text"
              name="Party"
              placeholder="Enter party"
              value={candidate.Party}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEducation" className="form-group">
            <Form.Label className="form-label">Education</Form.Label>
            <Form.Control
              type="text"
              name="education"
              placeholder="Enter education"
              value={candidate.education}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* <Form.Group controlId="formPartyImage" className="form-group">
            <Form.Label className="form-label">Party Image</Form.Label>
            <Form.Control
              type="file"
              name="Partyimage"
              onChange={handleFileChange}
            />
          </Form.Group> */}

          <Button variant="primary" type="submit" disabled={loading}>
            {loading ? (
              <>
                <Spinner animation="border" size="sm" /> Submitting...
              </>
            ) : (
              "Add Candidate"
            )}
          </Button>
        </Form>

        {responseData && (
          <div className="response-data">
            <h3>Response Data:</h3>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}

        {/* Back button to go to the previous page */}
        <Button variant="secondary" onClick={handleBack} className="mt-3">
          Go Back
        </Button>

        <ToastContainer />
      </Container>
    </>
  );
};

export default AddCandidate;
