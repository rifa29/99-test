import { ArrowBigDown, ArrowBigUp, Expand, MessageSquare } from 'lucide-react';
import moment from 'moment';

export default function ClassicView({ content }) {
  const momentDate = moment.unix(content.created);

  const formattedDate = momentDate.format('MM DD YYYY');
  const timeDifference = momentDate.fromNow();

  return (
    <div className='flex border-b border-gray-300'>
      <div className='bg-gray-100 flex w-10 justify-center'>
        <div>
          <ArrowBigUp className='w-5 h-5 cursor-pointer text-gray-500' />
          <p className='text-center text-xs'>{content.ups - content.downs}</p>
          <ArrowBigDown className='w-5 h-5 cursor-pointer text-gray-500' />
        </div>
      </div>
      <div className='px-4 py-2 flex'>
        <img className='w-24 h-18 rounded-md mr-2' src={content.thumbnail} alt='image'/>
        <div className=''>
          <div className='text-md font-bold'>{content.title}</div>
          <div className='flex mb-1'>
            <div className='text-xs text-gray-500 pr-4 mr-4 border-r border-gray-400'>
              Posted By : <span className='text-gray-800'>{content.author}</span>
            </div>
            <div className='text-xs text-gray-500'>{timeDifference}</div>
          </div>
          <div className='flex'>
            <Expand className='w-4 h-4 mr-3 cursor-pointer text-gray-500' />
            <div className='flex'>
              <MessageSquare className='w-4 h-4 mr-1 text-gray-500' />
              <span className='text-xs text-gray-500'>{content.num_comments} Comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}