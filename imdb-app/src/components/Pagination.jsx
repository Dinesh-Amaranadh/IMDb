import { useState } from "react";
const Pagination = ({ onPageChange }) => {
    const [pages, setPages] = useState([1, 2, 3, 4, 5]);
    const [selectedPage, setSelectedPage] = useState(0);
    const handleClick = (pageNo) => {
        onPageChange(pageNo);
        setSelectedPage(pageNo);
    }
    return (

        <div className="pagination">
            <button onClick={() => handleClick(selectedPage - 1)} disabled={selectedPage ===1}>Prev</button>
            {pages.map((page) => 
                <button className={selectedPage === page ? 'active' : ''} key={page} onClick={() => handleClick(page)}>{page}</button>
            )}
            <button onClick={() => handleClick(selectedPage + 1)} disabled={selectedPage === pages[pages.length-1]}>Next</button>
        </div>
    );
}
export default Pagination;