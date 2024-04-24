import * as React from 'react';

import { Box ,Stack ,TextField ,Typography ,Modal,Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeDeleteModal } from '../../redux/store/modalsReducer';
import { deleteUser } from '../../redux/store/usersReducer';
import { setUser } from '../../redux/store/selectedUserReducer';
import { deleteUserApi } from '../../redux/store/usersReducer';
import ClearIcon from '@mui/icons-material/Clear';



export default function DeleteModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false);dispatch(closeDeleteModal())};
  const dispatch = useDispatch()
  const modals = useSelector((state) => state.modals.value);
  const users = useSelector((state) => state.users.value);
  const selectedUserInfo = useSelector((state) => state.selectedUser.value);
  const windowWidthInfo = useSelector(state=>state.windowWidth.value)

  const style = {
    position: 'absolute' ,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: windowWidthInfo<=1200?'450px':'600px',
    height:300,
    bgcolor: '#022539',
    border: '2px solid white',
    boxShadow: 24,
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    p: 1,
  };

  useEffect(()=>{
      if(modals[3]==true){
          setOpen(true)
      }else{
          setOpen(false)
          dispatch(closeDeleteModal())
          
      }
  },[modals[3]])

  const submitDelete = () =>{

    dispatch(deleteUser({id:selectedUserInfo.id}))
    dispatch(deleteUserApi(selectedUserInfo.id))
    dispatch(setUser({id:0,Fname:"",Lname:"",code:""}))
    setOpen(false)
    dispatch(closeDeleteModal())
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div dir='rtl' className='w-full h-[100%] font-primary'>
        <Box sx={style} >
        <ClearIcon onClick={handleClose} sx={{position:'absolute',top:"10px",left:"10px",color:'white',cursor:"pointer"}}/>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{width:'100%',display:'flex',justifyContent:'start' ,fontFamily:'font1',fontSize:'22px' ,color:"white"}} fontFamily={'font1'}>
            حذف
          </Typography>
          <Box sx={{border:'1px solid white',width:'100%',height:'80%',display:'flex',flexWrap:'wrap',justifyContent:'start',alignContent:'center',paddingX:'20px'}}>
            <Typography sx={{width:'100%',display:'flex',justifyContent:'start',marginLeft:'2px',fontSize:'25px',fontFamily:'font1',color:"white"}}>آیا رکورد حذف شود؟</Typography>
            <Box  sx={{width:'100%',display:"flex",justifyContent:"start",alignItems:'center',marginTop:"20px",gap:"20px"}}>
                    <Button onClick={submitDelete} sx={{width:'150px', height:'30px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"15px",fontWeight:'500'}}  variant='contained'>تایید</Button>
                    <Button onClick={handleClose} sx={{width:'150px', height:'30px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"15px",fontWeight:'500'}}  variant='contained'>بستن</Button>
            </Box>
            
            </Box>
        </Box>
        </div>
      </Modal>
    </div>
  );
}




