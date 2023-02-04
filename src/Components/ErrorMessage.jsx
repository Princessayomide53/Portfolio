import React from 'react'

 const ErrorMessage = ({ error })  => {
  return (
      <div className='flex items-center justify-flex-start p-[8px] -mt-[15px] mb-[10px]'>
          <span className='text-[#f7f7f7] font-medium text-base -mt-[1px]'>{error}</span>
    </div>
  )
}
export default ErrorMessage