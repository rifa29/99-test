'use client'

import Image from 'next/image'
import { LayoutPanelTop, LayoutList, List } from 'lucide-react'

export default function Header({ onViewChange }) {
  const handleViewToggle = (selectedView) => {
    onViewChange(selectedView);
  };

  return (
    <>
      <header className='bg-white h-[53px] border-b border-gray-200'>
        <div className='container flex h-[53px] items-center justify-between'>
          <Image
            src="/kaskus.svg"
            alt="Kaskus Logo"
            width={128}
            height={16}
            priority
          />
          <div className="flex">
            <input type="text" className="px-2 h-8 border border-gray-200 mr-3 w-[500px]" placeholder='cari di sini...' />
            <button className='bg-white border border-blue-800 font-semibold text-sm px-8 h-8 text-blue-800'>Buat Thread</button>
          </div>
        </div>
      </header>
      <nav className='bg-white h-[53px] shadow-md mb-5'>
        <div className='container flex h-[53px] items-center'>
          <div className='flex h-[53px] items-center'>
            <div className='flex h-[35px] items-center pr-5 mr-5 border-r border-gray-300'>
              <label className='mr-2'>View</label>
              <LayoutPanelTop className='toggleButtonCard w-5 h-5 mr-2 cursor-pointer text-blue-800' />
              <div onClick={() => handleViewToggle('classic')}>
                <LayoutList
                  className='toggleButtonClassic w-5 h-5 mr-2 cursor-pointer text-gray-300'
                />
              </div>
              <div onClick={() => handleViewToggle('compact')}>
                <List
                  className='w-5 h-5 mr-2 cursor-pointer text-gray-300'
                />
              </div>
            </div>
            <div className='flex h-[35px] items-center'>
              <label className='mr-2'>Sort</label>
              
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}