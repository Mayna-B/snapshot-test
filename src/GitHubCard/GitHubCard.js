import React from "react"
import Card from "react-bootstrap/Card"
import Ruckus from './Ruckus.jpeg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}> 
        <Card.Img variant="top" src={Ruckus} />
        {/* Source: https://github.com/Mayna-B */}
        <Card.Body>
            <Card.Title>Mayna-B</Card.Title>
            <Card.Text>
            My name is Ruckus. I was Mayna's first French Bulldog and she said I was the best friend she ever had. 
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard
