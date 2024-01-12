'use client'

import { useEffect, useState } from 'react'
import CompactView from '../components/CompactView'
import ClassicView from '../components/ClassicView'
import Layout from './Layout'
import Header from '../components/Header';
import useSubredditThread from '../hooks/useSubredditThread'

export default function Home() {
  const { view, posts, handleViewChange, onScroll } = useSubredditThread()

  return (
    <>
      <Header onViewChange={ handleViewChange } />
      <div className='scrollContainer' onScroll={onScroll}>
        { view === 'classic' ? posts.map(post => (<ClassicView content={post} />)) : '' }
        { view === 'compact' ? posts.map(post => (<CompactView content={post} onScroll={handleScroll}/>)) : '' }
        { view === 'card' ? posts.map(post => (<Card content={post} />)) : '' }
      </div>
    </>
  )
}
