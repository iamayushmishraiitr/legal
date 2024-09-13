
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'


const Analysis = () => {
  
 
  return (
    <div className='flex flex-col'>
      <div className="text-gray-900 font-medium text-base">
        Analysis
      </div>
      <div className='flex flex-col gap-[15vh] mt-[5vh]'>
      <div className='flex flex-row justify-center border-2 h-[140px] w-full'>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Total Scans</h1>
    <h1 className='text-xl text-blue-600'>100</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Males</h1>
    <h1 className='text-xl text-blue-600'>75</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Females</h1>
    <h1 className='text-xl text-blue-600'>25</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Below 21 Years</h1>
    <h1 className='text-xl text-blue-600'>25</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Between 21-25 Years</h1>
    <h1 className='text-xl text-blue-600'>25</h1>
  </div>
  <div className='flex flex-col mt-2 mb-2 border-r-2 items-center justify-center flex-1'>
    <h1 className='text-xl'>Above 25 Years</h1>
    <h1 className='text-xl text-blue-600'>25</h1>
  </div>
</div>
        <div>
          <h1 className='text-center font-bold text-xl'>Monthly User Scan Trends</h1>
          <LineChart />
        </div>
        <div>
          <h1 className='text-center font-bold text-xl'>Weekly User Scan Trends</h1>
          <BarChart />
        </div>
        <div>
          <h1 className='text-center font-bold text-xl'>Age wise User Scan Trends</h1>
          <PieChart />
        </div>
      </div>
    </div>
  )
}

export default Analysis