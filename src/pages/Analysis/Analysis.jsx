
import LineChart from './LineChart'
import BarChart from './BarChart'
import PieChart from './PieChart'
import Statistics from '../../component/global/statistics'

const Analysis = () => {
  
  const dataName = [
    {
      name: "Total Scans",
      value: 100,
    },
    {
      name: "Males",
      value: 75,
    },
    {
      name: "Females",
      value: 25,
    },
    {
      name: "Below 21 Years",
      value: 25,
    },
    {
      name: "Between 21-25 Years",
      value: 25,
    },
    {
      name: "Above 25 Years",
      value: 25,
    }
  ]

  return (
    <div className='flex flex-col'>
      <div className="text-gray-900 font-medium text-base">
        Analysis
      </div>
      <div className='flex flex-col gap-[15vh] mt-[5vh]'>
        {<Statistics dataName={dataName} heading={"analysis"} />}
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