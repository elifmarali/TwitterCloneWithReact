import { Outlet } from 'react-router-dom'
import Sidebar from '../sidebar'
import Rightbar from '../rightbar'

function MainLayout() {
  return (
    <div className='w-[1265px] mx-auto flex'>
      <Sidebar />
      {/* router kısmında tanımladığımız child elemanlarını kullanmak için Outlet elementini kullanırız*/}
      <main className='flex flex-1 gap-[30px]'>
        <main className='flex-1 border-x border-[#2f3336] max-w-[600px]'>
          <Outlet />
        </main>
        <Rightbar />
      </main>
    </div>
  )
}

export default MainLayout
