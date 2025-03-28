import { useEffect, useState } from "react";
const Pagination = ({ onPageChange,totalPages }) => {
    const [pages, setPages] = useState([]);
    const [selectedPage, setSelectedPage] = useState(1);
    const [totalPagesCount, setTotalPagesCount] = useState();
    const THRESHOLD = 10;
    const setNewPagesList = (pageNo) => {
        
        const startPage = Math.max(1, pageNo - Math.ceil(THRESHOLD / 2)+1);

        const endPage = Math.min(totalPages, startPage + THRESHOLD -1);
        
        const newPages = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        setPages(newPages);
    }

    const handleClick = (pageNo) => {
        onPageChange(pageNo);
        setSelectedPage(pageNo);
        setNewPagesList(pageNo);
    }
    useEffect(() =>{
        const list = Array.from({length: Math.min(totalPages,THRESHOLD)}, (_, i) => i + 1)
        setPages(list);
    },[totalPages]);
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