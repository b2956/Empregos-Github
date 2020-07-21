import React from 'react';
import Pagination from 'react-bootstrap/Pagination';

const JobsPagination = ({page, setPage, hasNextPage}) => {
    const nextPageHandler = () => {
        setPage(page + 1);
    }

    const previousPageHandler = () => {
        setPage(page - 1);
    }

    return (
        <Pagination>
            {page > 1 && <Pagination.Prev onClick={previousPageHandler}/> }
            {page > 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item> }
            {page > 3 && <Pagination.Ellipsis/>}
            {page > 2 && <Pagination.Item>{page - 1}</Pagination.Item> }
            <Pagination.Item active>{page}</Pagination.Item>
            {hasNextPage && <Pagination.Item onClick={nextPageHandler}>{page + 1}</Pagination.Item>}
            {hasNextPage && <Pagination.Next onClick={nextPageHandler}/>}
        </Pagination>
    )
}

export default JobsPagination;