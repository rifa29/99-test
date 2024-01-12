import { useEffect, useState } from 'react'

export default function useSubredditThread() {

  const [view, setView] = useState('classic'); 

  const BASE_REDIT_THREAD_URL = "https://www.reddit.com/r/StartledCats";

  const [posts, setPosts] = useState([]);

  const [after, setAfter] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(()=>{
    (async () => {
      try {
        const rawResults = await fetch(`${BASE_REDIT_THREAD_URL}/.json`);
        const jsonResults = await rawResults.json();
        setPosts([...posts, ...jsonResults.data.children.map(obj => obj.data)])
        setAfter(jsonResults.data.after)
        console.log(jsonResults.data.after, 'AFTER')
        setIsLoading(false)
      } catch(err) {
        console.log(err)
      }
    })(
    );
  },[isLoading])

  const handleScroll = (e) => {
    const scrollElem = document.querySelector('.scrollContainer')
    const trigger = scrollElem.scrollTop + scrollElem.offsetHeight

    if(trigger + 10 > scrollElem.scrollHeight){
      setIsLoading(true)

    }
    return
  }

  const handleViewChange = (selectedView) => {
    setView(selectedView);
    console.log(selectedView)
  };

  return { view, posts, onScroll:handleScroll, handleViewChange }
}