
import './App.css'
import AccordionSearch from './components/search/search'
import TableUsers from './components/table/table'
import VisitModal from './components/visitModal/visitModal'
import AddModal from './components/addModal/addModal'
import EditModal from './components/editModal/editModal'
import DeleteModal from './components/deleteModal/deleteModal'
import ChartModal from './components/chartModal/chartModal'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getData } from './redux/store/usersReducer'
import { setWindowWidth } from './redux/store/windowReducer'
import MapModal from './components/mapModal/mapModal'

const App = () =>{
  const state = useSelector(state=>state.users.value)
  const dispatch = useDispatch()
  const windowWidthInfo = useSelector(state=>state.windowWidth.value)
  
  let w = window.innerWidth
  window.addEventListener('resize',()=>{
    w = window.innerWidth
    dispatch(setWindowWidth(w))
    console.log(w);
  })

  useEffect(()=>{
    dispatch(getData())
  },[state])

  return (
    <body dir='rtl' className='font-primary text-[16px]'>
        <main className='w-full min-h-[100vh] h-fit bg-[#022539] flex justify-center flex-wrap content-start'>
          <AccordionSearch/>
          <TableUsers/>
          <VisitModal/>
          <AddModal/>
          <EditModal/>
          <ChartModal/>
          <DeleteModal/>
          <MapModal/>
        </main>
    </body>  
)
}

export default App
