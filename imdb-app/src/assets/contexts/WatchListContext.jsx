import { createContext,useState } from "react";

export const WatchListContext = createContext();

const WatchListProvider = ({children}) => {
    const [watchList, setWatchList] = useState({});
    return (
        <WatchListContext.Provider value = {{watchList, setWatchList}}>
            {children}
        </WatchListContext.Provider>
        )
}
export default WatchListProvider;