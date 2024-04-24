import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeVisitModal } from '../../redux/store/modalsReducer';
import ClearIcon from '@mui/icons-material/Clear';


export default function VisitModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false);dispatch(closeVisitModal())};
  const dispatch = useDispatch()
const modals = useSelector((state) => state.modals.value);
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
    if(modals[0]==true){
        setOpen(true)
    }else{
        setOpen(false)
        dispatch(closeVisitModal())
        
    }
},[modals[0]])

  return (
    <div >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <ClearIcon onClick={handleClose} sx={{position:'absolute',top:"10px",left:"10px",color:'white',cursor:"pointer"}}/>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:'white',fontFamily:"font1",width:'100%',display:'flex',justifyContent:'end'}} fontFamily={'primary'}>
            مشاهده
          </Typography>
          <Box sx={{border:'1px solid white',width:'100%',height:'80%',display:'flex',flexWrap:'wrap',justifyContent:'end',alignContent:'center',padding:'10px'}}>
            <Box sx={{width:'100%',display:'flex',justifyContent:'end'}}>
                <Typography sx={{color:'white',fontFamily:"font1",fontSize:"20px",display:'flex',alignItems:'center',height:"100%"}}>{selectedUserInfo?.Fname}</Typography>
                <Typography sx={{color:'white',fontFamily:"font1",marginLeft:'20px',marginRight:'10px',fontWeight:'500',fontFamily:'font1',display:'flex',alignItems:'center',height:"100%"}}>:نام</Typography>
            </Box>
            <Box sx={{width:'100%',display:'flex',justifyContent:'end',marginY:'30px'}}>
                <Typography sx={{color:'white',fontFamily:"font1",fontSize:"20px",display:'flex',alignItems:'center',height:"100%"}}>{selectedUserInfo?.Lname}</Typography>
                <Typography sx={{color:'white',fontFamily:"font1",marginLeft:'20px',marginRight:'10px',fontWeight:'500',fontFamily:'font1',display:'flex',alignItems:'center',height:"100%"}}>:نام خانوادگی</Typography>
            </Box>
            <Box sx={{width:'100%',display:'flex',justifyContent:'end'}}>
                <Typography sx={{color:'white',fontFamily:"font1",fontSize:"20px",display:'flex',alignItems:'center',height:"100%"}}>{selectedUserInfo?.code}</Typography>
                <Typography sx={{color:'white',fontFamily:"font1",marginLeft:'20px',marginRight:'10px',fontWeight:'500',fontFamily:'font1',display:'flex',alignItems:'center',height:"100%"}}>:کد ملی</Typography>
            </Box>
            <Button onClick={handleClose} sx={{width:'150px', height:'30px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"15px",fontWeight:'500',marginTop:'20px'}}  variant='contained'>بستن</Button>
            
          </Box>
        </Box>
      </Modal>
    </div>
  );
}