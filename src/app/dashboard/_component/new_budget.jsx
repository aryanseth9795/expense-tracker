import React from 'react'
import { CirclePlus } from 'lucide-react'

const New_budget = () => {
  return (
 <div className="border shadow-md p-4 h-[15vh] flex flex-col items-center justify-center cursor-pointer" >
        <h2 className="font-bold">Create New Budget </h2>
        <CirclePlus />
      </div>
  )
}

export default New_budget
