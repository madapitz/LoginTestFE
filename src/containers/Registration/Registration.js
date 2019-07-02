import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const registration = (props) => {
	return (
		<Container fluid>
			<Row>
				<Col lg={3} md={3} sm={1} xs={1} style={{background: 'red'}}>
					jejejeje
				</Col>

				<Col lg={9} md={9} sm={11} xs={11} style={{background: 'blue'}}>
					jajajaja
				</Col>

			</Row>
		</Container>
	);
};

export default registration;
