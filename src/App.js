import React, { useState } from 'react';
import { Container } from 'react-bootstrap';

import useFetchJobs from './useFetchJobs';

import Job from './Components/Job';
import JobsPagination from './Components/JobsPagination';
import SearchForm from './Components/SearchForm';

function App() {
  const [page, setPage] = useState(1);
  const [params, setParams] = useState({});

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  const paramChangeHandler = event => {
    const param = event.target.name;
    const value = event.target.value;
    
    setPage(1);

    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
    
  }

  return (
    < Container className="my-4" >
      <h1 className="mb-4" >Empregos GitHub</h1>
      < SearchForm params={params} onParamChange={paramChangeHandler} />
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
      {loading && <h1>Carregando ...</h1> }
      {error && <h1>Erro. Tente recarregar a página.</h1> }
      {jobs.map(job => {
        return <Job key={job.id} job={job} />
      })}
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </Container>
  );
}

export default App;
