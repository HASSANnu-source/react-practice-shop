import { Search, ListFilter } from "lucide-react"

export const SearchBar = () => {
  return (
    <div className='flex items-center text-forground-primary text-center relative'>
      <button className='absolute left-3'>
        <Search size={20}/>
      </button>
      <button className='absolute right-3'>
        <ListFilter size={20}/>
      </button>
      <input
      type="text"
      placeholder='Find you needed...'
      className='border-2 border-border-primary py-2 px-11 w-full rounded-lg outline-0 focus:shadow-md focus:shadow-border-primary'
      />
    </div>
  )
}
