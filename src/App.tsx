import { columns } from './components/Columns'
import { DataTable } from './components/DataTable'
import { tools } from './constants/tools'

function App() {
  return (
    <div className='p-5'>
      <DataTable data={tools} columns={columns} />
    </div>
  )
}

export default App
