import { useEffect, useState } from 'react'

export default function useSubredditThread() {

  const [view, setView] = useState('classic'); 

  const BASE_REDIT_THREAD_URL = "https://www.reddit.com/r/holdmybeer";

  const [posts, setPosts] = useState([]);

  const [after, setAfter] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [sort, setSort] = useState('new');

  useEffect(() => {
    (async () => {
      try {
        const rawResults = await fetch(`${BASE_REDIT_THREAD_URL}/${sort}.json?after=${after}&limit=15`);
        const jsonResults = await rawResults.json();
        setPosts([...posts, ...jsonResults.data.children.map(obj => obj.data)])
        setAfter(jsonResults.data.after)
        setIsLoading(false)
      } catch(err) {
        console.log(err)
      }
    })(
    );
  },[isLoading])

  useEffect(()=>{
    setPosts([]);
    
    try {
      const fetchResults = async () => {
        const rawResults = await fetch(`${BASE_REDIT_THREAD_URL}/${sort}.json?limit=15`);
        const jsonResults = await rawResults.json();
        setPosts(jsonResults.data.children.map(obj => obj.data));
      };
  
      fetchResults();
    } catch (err) {
      console.error(err);
    }
  },[sort])

  const handleScroll = (e) => {
    const scrollElem = document.querySelector('.scrollContainer')
    const trigger = scrollElem.scrollTop + scrollElem.offsetHeight

    if(trigger + 10 > scrollElem.scrollHeight){
      setIsLoading(true)

    }
    return
  }

  const handleSort = (sortBy) => {
    setSort(sortBy)
    console.log(sort, 'lalala')
  }

  const handleViewChange = (selectedView) => {
    setView(selectedView);
  };

  return { view, posts, onScroll:handleScroll, handleViewChange, handleSort, sort }
}