'use client'

import CompactView from '../components/CompactView';
import ClassicView from '../components/ClassicView';
import Header from '../components/Header';
import useSubredditThread from '../hooks/useSubredditThread';
import { 
  Flame,
  FilePlus2,
  TrendingUp
} from 'lucide-react';

export default function Home() {
  const { view, posts, sort, handleViewChange, onScroll, handleSort } = useSubredditThread()

  return (
    <>
      <Header onViewChange={ handleViewChange } />
      <div className='container'>
        {/* <button onClick={() => handleSort('hot')}>Hot</button>
        <button onClick={() => handleSort('new')}>New</button>
        <button onClick={() => handleSort('top')}>Top</button> */}
        <div className='flex h-[35px] items-center mb-4'>
          <label className='mr-2'>Sort</label>
          <button
            onClick={() => handleSort('hot')}
            className={`py-1 px-2 items-center text-sm flex border ${sort === 'hot' ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300'} `}
          >
            <Flame className='w-4 h-4 mr-1'/> Hot
          </button>
          <button
            onClick={() => handleSort('new')}
            className={`py-1 px-2 items-center text-sm flex border ${sort === 'new' ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300'} `}
          >
            <FilePlus2 className='w-4 h-4 mr-1'/> New
          </button>
          <button
            onClick={() => handleSort('top')}
            className={`py-1 px-2 items-center text-sm flex border ${sort === 'top' ? 'bg-blue-500 border-blue-500 text-white' : 'border-gray-300'} `}
          >
            <TrendingUp className='w-4 h-4 mr-1'/> Top
          </button>
        </div>
        <div className='scrollContainer' onScroll={onScroll}>
          { view === 'classic' ? posts.map(post => (<ClassicView key={post.id} content={post} onScroll={onScroll} />)) : '' }
          { view === 'compact' ? posts.map(post => (<CompactView key={post.id} content={post} onScroll={onScroll}/>)) : '' }
          { view === 'card' ? posts.map(post => (<Card content={post} />)) : '' }
        </div>
      </div>
    </>
  )
}
