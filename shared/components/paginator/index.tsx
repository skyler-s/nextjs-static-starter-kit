import React, {FunctionComponent, Fragment, useState} from 'react';
import './styles.css';
import {render} from "react-dom";

type Props = {
    skip?: number;
    range: number[];
    handlePaginationChange: Function;
}
const Paginator: FunctionComponent<Props> = ({skip, range, handlePaginationChange}) => {
    skip = !!skip ? skip : 0;

    const [page, setPageNumber] = useState(1);

    const moveToNextPage = () => {
        if (page > 1) {
            handlePaginationChange(page - 1);
            return setPageNumber(page - 1);
        }

        return null;
    };

    const moveToPreviousPage = () => {
        if (page < range[range.length - 1]) {
            handlePaginationChange(page + 1);
            return setPageNumber(page + 1);
        }

        return null;
    };

    return (
        <Fragment>
            <div className="paginator">
                {range.length > 1 ?
                    <button className="paginator__button"
                            onClick={moveToNextPage}>
                        <span className="paginator__button__indicator left">{'<'}</span> Previous</button> : null}

                {range.map((num, index) => {
                    return (<span
                        className={`paginator__page-number ${num === page ? 'paginator__page-number--selected' : ''}`}
                        key={index} onClick={() => setPageNumber(num)}>{num}</span>)
                })}

                {range.length > 1 ?
                    <button className="paginator__button"
                            onClick={moveToPreviousPage}>
                        Next <span className="paginator__button__indicator right">{'>'}</span>
                    </button> : null}
            </div>
        </Fragment>
    )
};

export default Paginator;