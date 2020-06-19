import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import axios from 'axios'

const CardDecks = () => {
    const [latest, setLatest] = useState("")
    
     useEffect(() => {
        axios
            .all([
                axios.get("https://disease.sh/v2/all"),
            ])
            .then(responseArr => {
                setLatest(responseArr[0].data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();
    return (
        <div>
            <CardDeck>
                <Card
                    bg="secondary"
                    text={"white"}
                    className="text-center"
                    style={{ margin: "10px" }}>
                    <Card.Body>
                        <Card.Title>Cases</Card.Title>
                        <Card.Text>{latest.cases}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>

                <Card
                    bg="danger"
                    text={"white"}
                    className="text-center"
                    style={{ margin: "10px" }} >
                    <Card.Body>
                        <Card.Title>Deaths</Card.Title>
                        <Card.Text>{latest.deaths}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>

                <Card
                    bg="success"
                    text={"white"}
                    className="text-center"
                    style={{ margin: "10px" }} >
                    <Card.Body>
                        <Card.Title>Recovered</Card.Title>
                        <Card.Text>{latest.recovered}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </div>
    )
}

export default CardDecks
