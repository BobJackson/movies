import {Col, Image, Row} from "react-bootstrap";
import React from "react";

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            covers: []
        };
    }

    componentDidMount() {
        let env = process.env.NODE_ENV
        let baseUrl = ''
        if (env === 'development') {
            baseUrl = "http://host.docker.internal:8080"
        } else if (env === 'production') {
            baseUrl = "https://movies.wangyousong.com"
        }
        console.log(baseUrl);

        fetch(baseUrl + '/api/v1/movies')
            .then((data) => data.json())
            .then(data => this.setState({covers: data.data}))
            .catch(console.error);
    }

    render() {
        let books = this.state.covers.map((item) => {
            return (
                <Col className="MovieContainer hvr-shrink mt-2" key={item.id}>
                    <Image src={item.cover} key={item.id} rounded={true}/>
                </Col>
            )
        });

        return (
            <Row className="mt-2" md={2} lg={3}>
                {books}
            </Row>
        );
    }
}

export default MovieList;