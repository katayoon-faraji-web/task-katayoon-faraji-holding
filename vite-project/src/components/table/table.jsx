import {
  Box,
  Pagination,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useSelector, useDispatch } from "react-redux";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditNoteIcon from '@mui/icons-material/EditNote';
import PinDropIcon from '@mui/icons-material/PinDrop';
import DeleteIcon from '@mui/icons-material/Delete';
import BarChartIcon from '@mui/icons-material/BarChart';
import { openChartModal, openVisitModal ,openMapModal} from '../../redux/store/modalsReducer';
import { setUser } from '../../redux/store/selectedUserReducer';
import { openEditModal } from '../../redux/store/modalsReducer';
import { openDeleteModal } from '../../redux/store/modalsReducer';

const TableUsers = () =>{

    const windowWidthInfo = useSelector(state=>state.windowWidth.value)
    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);
    const modals = useSelector((state) => state.modals.value);
    const openVisitModalFunction = ({id,Fname,Lname,code}) =>{
      dispatch(openVisitModal())
      dispatch(setUser({id,Fname,Lname,code}))
    }
    const openEditModalFunction = ({id,Fname,Lname,code}) =>{
      dispatch(openEditModal())
      dispatch(setUser({id,Fname,Lname,code}))
    }
    const openDeleteModalFunction = ({id,Fname,Lname,code}) =>{
      dispatch(openDeleteModal())
      dispatch(setUser({id,Fname,Lname,code}))
    }
    const openChartModalFunction = ({id,Fname,Lname,code}) =>{
      dispatch(openChartModal())
      dispatch(setUser({id,Fname,Lname,code}))
    }
    const openMapModalFunction = ({lat,lng}) =>{
      dispatch(openMapModal({lat,lng}))
    }


    return(
        <TableContainer component={Paper}  sx={{position:'relative',width:'80%' ,background:"#6e8890",color:'white',marginTop:'60px' ,border:'1px solid white',borderBottom:'4px solid white',borderRight:'4px solid white'}}>
            <Table sx={{width:'100%' ,display:'flex',flexWrap:"wrap" ,justifyContent:'center'}}>
              <TableHead sx={{width:'100%',display:'flex' ,justifyContent:'center' }}>
                <TableRow sx={{width:'100%' ,display:'flex' ,justifyContent:windowWidthInfo<=900?'start':"center"}}>
                  <TableCell sx={{width:windowWidthInfo<=900?'10%':'20%', color:"white",display:'flex',justifyContent:'start',fontSize: windowWidthInfo<=900?'15px':'22px', fontWeight:'600',fontFamily:'font1'}} >ردیف</TableCell>
                  <TableCell sx={{width:windowWidthInfo<=900?'15%':'20%', color:"white",display:'flex',justifyContent:'start',fontSize: windowWidthInfo<=900?'15px':'22px', fontWeight:'600',fontFamily:'font1'}} >نام</TableCell>
                  <TableCell sx={{width:windowWidthInfo<=900?'25%':'20%' ,color:"white",display:'flex',justifyContent:'start',fontSize: windowWidthInfo<=900?'15px':'22px', fontWeight:'600',fontFamily:'font1'}} >نام خانوادگی</TableCell>
                  <TableCell sx={{width:windowWidthInfo<=900?'20%':'20%' ,color:"white",display:'flex',justifyContent:'start',fontSize: windowWidthInfo<=900?'15px':'22px', fontWeight:'600',fontFamily:'font1'}} >کد ملی</TableCell>
                  <TableCell sx={{width:windowWidthInfo<=900?'20%':'20%' ,color:"white",display:'flex',justifyContent:'start',fontSize: windowWidthInfo<=900?'15px':'22px', fontWeight:'600',fontFamily:'font1'}} >عملیات</TableCell>
                </TableRow>
              </TableHead>
              <TableBody  sx={{width:'100%',display:'flex' ,flexWrap:'wrap',justifyContent:windowWidthInfo<=900?'start':"center"}}>
                {userList?.map((item) => (
                  <TableRow key={item.id} sx={{width:'100%' ,display:'flex' ,justifyContent:windowWidthInfo<=900?'start':"center" }}>
                    <TableCell sx={{width:windowWidthInfo<=900?'10%':'20%' ,display:'flex',justifyContent:'start',fontFamily:'font1',color:'white',fontSize:'25px'}} component="th" scope="row">
                      {item.id}
                    </TableCell>
                    <TableCell sx={{width:windowWidthInfo<=900?'20%':'20%' ,display:'flex',justifyContent:'start',alignItems:"center",fontFamily:'font1' ,fontSize: windowWidthInfo<=900?'14px':'20px',color:'white'}}>{item.userFname}</TableCell>
                    <TableCell sx={{width:windowWidthInfo<=900?'15%':'20%' ,display:'flex',justifyContent:'start',alignItems:"center",fontFamily:'font1' ,fontSize: windowWidthInfo<=900?'14px':'20px',color:'white'}}>{item.userLname}</TableCell>
                    <TableCell sx={{width:windowWidthInfo<=900?'20%':'20%' ,display:'flex',justifyContent:'start',alignItems:"center",fontFamily:'font1' ,fontSize: windowWidthInfo<=900?'14px':'20px',color:'white'}}>{item.userCode}</TableCell>
                    <TableCell sx={{width:windowWidthInfo<=900?'20%':'20%' ,display:'flex',justifyContent:'start'}}>
                      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
                        <RemoveRedEyeIcon sx={{color:'#fc9a1d',cursor:"pointer",fontSize:windowWidthInfo<=900?'15px':'30px'}} onClick={()=>{openVisitModalFunction({id:item.id,Fname:item.userFname,Lname:item.userLname,code:item.userCode})}}/>
                        <EditNoteIcon sx={{color:'#fc9a1d',cursor:"pointer",fontSize:windowWidthInfo<=900?'15px':'30px'}} onClick={()=>{openEditModalFunction({id:item.id,Fname:item.userFname,Lname:item.userLname,code:item.userCode})}}/>
                        <PinDropIcon onClick={()=>{openMapModalFunction({lat:'10.99835602',lng:"77.01502627"})}} sx={{color:'#fc9a1d',cursor:"pointer",fontSize:windowWidthInfo<=900?'15px':'30px'}}/>
                        <DeleteIcon sx={{color:'#fc9a1d',cursor:"pointer",fontSize:windowWidthInfo<=900?'15px':'30px'}} onClick={()=>{openDeleteModalFunction({id:item.id,Fname:item.userFname,Lname:item.userLname,code:item.userCode})}}/>
                        <BarChartIcon onClick={()=>{openChartModalFunction({id:item.id,Fname:item.userFname,Lname:item.userLname,code:item.userCode})}} sx={{color:'#fc9a1d',cursor:"pointer"}}/>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        </TableContainer>
    )
}
export default TableUsers;