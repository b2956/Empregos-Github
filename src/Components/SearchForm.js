import React from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


const SearchForm = ({params, onParamChange}) => {
    return (
        <Form className="mb-4">
            <Form.Row className="align-items-end" >
                <Form.Group as={Col}>
                    <Form.Label>Descrição</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.description} name="description"></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Lugar</Form.Label>
                    <Form.Control onChange={onParamChange} value={params.location} name="location"></Form.Control>
                </Form.Group>
                <Form.Group as={Col} xs="auto" className="ml-2">
                    <Form.Check onChange={onParamChange} value={params.full_time} name="full_time" id="full_time" label="Only Full Time" type="checkbox" className="mb-2" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default SearchForm;