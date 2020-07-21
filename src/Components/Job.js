import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import ReactMarkdown from 'react-markdown';

const Job = ({ job }) => {
    const [open, setOpen] = useState(false);

    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <div>
                        <Card.Title>
                            {job.title} - <span className="text-muted font-weight-light">{job.company}</span>
                        </Card.Title>
                        <Card.Subtitle className="text-mute mb-2" >
                            {new Date(job.created_at).toLocaleDateString()}
                        </Card.Subtitle>
                        <Badge variant="secondary" className="mr-2" >{job.type}</Badge>
                        <Badge variant="secondary">{job.location}</Badge>
                        <div style={{wordBreak: "break-all"}}>
                            <ReactMarkdown source={job.how_to_apply}/>
                        </div>
                    </div>
                    <img className="d-sm-none d-md-block" alt={job.company} src={job.company_logo} height="50" />
                </div>
                <Card.Text >
                    <Button 
                        variant="primary" 
                        onClick={() => setOpen(prevOpen => !prevOpen)}>
                            {open ? 'Hide Details' : 'View Details'}
                    </Button>
                    <Collapse in={open}>
                        <div className="mt-4">
                            <ReactMarkdown source={job.description}/>
                        </div>
                    </Collapse>
                </Card.Text>
            </Card.Body>
        </Card>
    )
};

export default Job;