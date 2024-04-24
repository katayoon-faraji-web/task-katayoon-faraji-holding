import * as React from 'react';

import { Box ,Stack ,TextField ,Typography ,Modal,Button } from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeEditModal } from '../../redux/store/modalsReducer';
import { updateUsername } from '../../redux/store/usersReducer';
import { setUser } from '../../redux/store/selectedUserReducer';
import { UpdateUserApi } from '../../redux/store/usersReducer';
import ClearIcon from '@mui/icons-material/Clear';


export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false);dispatch(closeEditModal())};
  const dispatch = useDispatch()
  const modals = useSelector((state) => state.modals.value);
  const users = useSelector((state) => state.users.value);
  const selectedUserInfo = useSelector((state) => state.selectedUser.value);
  const [nameInput,setNameInput] = React.useState(selectedUserInfo.Fname)
  const [LnameInput,setLnameInput] = React.useState(selectedUserInfo.Lname)
  const [codeInput,setCodeInput] = React.useState(selectedUserInfo.code)
  const windowWidthInfo = useSelector(state=>state.windowWidth.value)
  useEffect(()=>{
    setNameInput(selectedUserInfo.Fname)
    setLnameInput(selectedUserInfo.Lname)
    setCodeInput(selectedUserInfo.code)
  },[selectedUserInfo.id])

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
      if(modals[2]==true){
          setOpen(true)
      }else{
          setOpen(false)
          dispatch(closeEditModal())
          
      }
  },[modals[2]])

  const submitEdit = () =>{
    if(nameInput && LnameInput && codeInput){
        console.log(selectedUserInfo.Fname);
        dispatch(updateUsername({id:selectedUserInfo.id,Fname:nameInput,Lname:LnameInput,code:codeInput}))
        dispatch(UpdateUserApi({id:selectedUserInfo.id,Fname:nameInput,Lname:LnameInput,code:codeInput}))
        dispatch(setUser({id:selectedUserInfo.id,Fname:nameInput,Lname:LnameInput,code:codeInput}))
        setOpen(false)
        dispatch(closeEditModal())
    }
  }
  const closeModal =() =>{
    setOpen(false)
    dispatch(setUser({id:selectedUserInfo.id,Fname:nameInput,Lname:LnameInput,code:codeInput}))
    dispatch(closeEditModal())
    setNameInput('')
    setLnameInput('')
    setCodeInput('')
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
        <ClearIcon onClick={handleClose} sx={{position:'absolute',top:"10px",left:"10px",color:'white',cursor:"pointer"}}/>

          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{color:"white",width:'100%',display:'flex',justifyContent:'end'}} fontFamily={'primary'}>
            افزودن
          </Typography>
          <Box sx={{border:'1px solid white',width:'100%',height:'80%',display:'flex',flexWrap:'wrap',justifyContent:'start',alignContent:'center'}}>
          <Box
                        component="form"
                        sx={{

                            display:"flex",
                            width:"100%",
                            minHeight:"60px",
                            flexWrap:"wrap",
                            justifyContent:'start',
                            alignItems:'center'
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <div dir='rtl' className='w-full h-[80%]'>
                        <Box  sx={{width:'100%',display:"flex",justifyContent:"start",alignItems:'center' , gap:'10px'}}>
                            <Box direction="row" spacing={2} className=' w-[45%] h-full  flex justify-start items-center'>
                                <Typography sx={{width:'100px',display:'flex',justifyContent:'end',marginLeft:'5px',color:"white",fontFamily:"font1"}}>نام</Typography>
                                <TextField value={nameInput} onChange={event=>setNameInput(event.target.value)} variant="outlined" sx={{width:"250px" ,overflow:'hidden' ,border:'1px solid white' ,borderRadius:'5px',marginX:'3px',display:'flex',alignItems:"center",color:"white",fontFamily:"font1",input:{color:'white'} }} className='h-[45px]  ' />
                            </Box>
                            <Box direction="row" spacing={2} className=' w-[45%] h-full  flex justify-start items-center'>
                                <Typography sx={{width:'100px',display:'flex',justifyContent:'start',marginLeft:'2px',color:"white",fontFamily:"font1"}}>نام حانوادگی</Typography>
                                <TextField value={LnameInput} onChange={event=>setLnameInput(event.target.value)} variant="outlined" sx={{ width:"250px" ,overflow:'hidden' ,border:'1px solid white' ,borderRadius:'5px',marginX:'3px',display:'flex',alignItems:"center",color:"white",fontFamily:"font1",input:{color:'white'}}} className='h-[45px] '/>
                            </Box>
                        </Box>
                        <Box  sx={{width:'100%',display:"flex",justifyContent:"start",alignItems:'center',marginTop:"20px"}}>
                          <Box className=' w-[45%] h-full  flex justify-start items-center bg-blue '>
                              <Typography sx={{width:'100px',display:'flex',justifyContent:'end',marginLeft:'5px',color:"white",fontFamily:"font1"}}>کد ملی</Typography>
                              <TextField value={codeInput} onChange={event=>setCodeInput(event.target.value)} variant="outlined" sx={{ width:"250px" ,overflow:'hidden' ,border:'1px solid white' ,borderRadius:'5px',marginX:'3px',display:'flex',alignItems:"center",color:"white",fontFamily:"font1",input:{color:'white'}}} className='h-[45px] '/>
                          </Box>
                        </Box>
                        </div>
                        <Box  sx={{width:'100%',display:"flex",justifyContent:"center",alignItems:'center',marginTop:"20px",gap:"20px"}}>
                              <Button onClick={closeModal} sx={{width:'150px', height:'30px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"15px",fontWeight:'500'}}  variant='contained'>بستن</Button>
                              <Button onClick={submitEdit} sx={{width:'150px', height:'30px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"15px",fontWeight:'500'}}  variant='contained'>تایید</Button>
                        </Box>
                    </Box>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}