import React, {useState, useEffect} from 'react'
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import Columns from 'react-columns'
import Form from 'react-bootstrap/Form'

const CountrySearch = () => {
    const [latest, setLatest] = useState("");
    const [results, setResults] = useState([])
    const [searchCountries, setSearchCountries] = useState("")

    useEffect(() => {
        axios
            .all([
                axios.get("https://disease.sh/v2/all"),
                axios.get("https://disease.sh/v2/countries")

            ])
            .then(responseArr => {
                setLatest(responseArr[0].data);
                setResults(responseArr[1].data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);
    const date = new Date(parseInt(latest.updated));
    const lastUpdated = date.toString();

    const filterCountries = results.filter(item => {
    return searchCountries !== "" ? item.country.includes(searchCountries) : item
    })
    const countries = filterCountries.map((data, i) => {
        return (
            <Card
                key={i}
                bg="light"
                text="dark"
                className="text-center"
                style={{ margin: "10px" }}>
                <Card.Img variant="top" src={data.countryInfo.flag} />
                <Card.Body>
                    <Card.Title>{data.country}</Card.Title>
                    <Card.Text>Cases {data.cases}</Card.Text>
                    <Card.Title>Deaths {data.deaths}</Card.Title>
                    <Card.Text>Recovered {data.recovered}</Card.Text>
                    <Card.Title>Today's Cases {data.todaysCases}</Card.Title>
                    <Card.Text>Today's Deaths {data.todaysDeaths}</Card.Text>
                    <Card.Title>Active {data.active}</Card.Title>
                    <Card.Text>Critical {data.critical}</Card.Text>
                </Card.Body>
            </Card>
        )
    })

    var queries = [{
        columns: 2,
        query: 'min-width: 500px'
    }, {
        columns: 3,
        query: 'min-width: 1000px'
    }];
    return (
        <div>
            <Form>
                <Form.Group controlId="formGroupSearch">
                    <Form.Control
                        type="text"
                        placeholder="Search a country"
                        onChange={e => setSearchCountries(e.target.value)} />
                </Form.Group>
            </Form>
            <Columns queries={queries}>{countries}</Columns>
        </div>
    )
}

export default CountrySearch
