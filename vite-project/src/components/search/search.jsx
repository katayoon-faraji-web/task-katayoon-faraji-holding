import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box ,Stack ,TextField ,Typography ,List , ListItem} from '@mui/material';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from 'react-redux';
import { openAddModal} from '../../redux/store/modalsReducer';



export default function AccordionSearch() {

    const dispatch = useDispatch()
    const users = useSelector(state=>state.users.value)
    const selectedUserInfo = useSelector((state) => state.selectedUser.value);
    const windowWidthInfo = useSelector(state=>state.windowWidth.value)
    const [searched,setSearched] = React.useState(false)
    const [searchedUser,setSearchedUser] = React.useState({})
    const [nameInput,setNameInput] = React.useState('')
    const [LnameInput,setLnameInput] = React.useState('')
    const [codeInput,setCodeInput] = React.useState('')
    let i = 0
    const openAddModalFunction = () =>{
        dispatch(openAddModal())
    }
    const searchFunction = () =>{
        users?.map((val)=>{
            if(val.userFname == nameInput && val.userLname == LnameInput && val.userCode == codeInput){
                const searchedItem ={
                    id:val.id,
                    userFname:val.userFname,
                    userLname:val.userLname,
                    userCode:val.userCode
                }
                setSearchedUser(searchedItem)
                setSearched(true)
                setNameInput('')
                setLnameInput('')
                setCodeInput('')
            }
        })
    }

  return (
      <div  className='w-[80%] min-h-[80px] h-fit mt-[30px] relative'>
        <Accordion sx={{border:'1px solid white',borderBottom:'4px solid white',borderRight:'4px solid white',background:"#6e8890"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:"white"}}/>}
          sx={{fontWeight:'800',fontSize:'22px',color:'white'}}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          جستجو
        </AccordionSummary>
        <AccordionDetails>
            <Box component="section" sx={{ p: 2, border: '1px solid white',color:'white' }}>
                <Stack direction="row" spacing={2}>
                    <Box
                        component="form"
                        sx={{
                            color:'white',
                            display:"flex",
                            width:"100%",
                            minHeight:"60px",
                            flexWrap:"wrap",
                            justifyContent:windowWidthInfo<=1400?'center':'start',
                            alignItems:'center'
                        }}
                        noValidate
                        autoComplete="off"
                        >
                        <Box direction="row" spacing={2} className='w-full  xl:w-[22%] h-[40px] mt-[10px] xl:mt-0 xl:h-full text-white flex justify-start items-center'>
                            <Typography className='w-[100px] xl:w-auto' fontFamily={'font1'}>نام</Typography>
                            <TextField fontFamily={'font1'} value={nameInput} onChange={(event)=>{setNameInput(event.target.value)}} variant="outlined" sx={{height:'40px' , width:windowWidthInfo<=1300?'400px':"200px" ,overflow:'hidden' ,border:'1px solid white' ,borderRadius:'5px',color:"white",marginX:'3px'}} />
                        </Box>
                        <Box direction="row" spacing={2} className=' w-full  xl:w-[30%] h-[40px] mt-[10px] xl:mt-0 xl:h-full text-white flex justify-start items-center'>
                            <Typography className='w-[100px] xl:w-auto' fontFamily={'font1'}>نام حانوادگی</Typography>
                            <TextField fontFamily={'font1'} value={LnameInput} onChange={(event)=>{setLnameInput(event.target.value)}} variant="outlined" size='medium' sx={{height:'40px' , width:windowWidthInfo<=1300?'400px':"200px" ,overflow:'hidden' ,border:'1px solid white' ,color:"white",borderRadius:'5px',marginX:'3px'}} />
                        </Box>
                        <Box direction="row" spacing={2} className=' w-full  xl:w-[30%] h-[40px] mt-[10px] xl:mt-0 xl:h-full text-white flex justify-start items-center'>
                            <Typography className='w-[100px] xl:w-auto' fontFamily={'font1'}>کد ملی</Typography>
                            <TextField fontFamily={'font1'} value={codeInput} onChange={(event)=>{setCodeInput(event.target.value)}} variant="outlined" sx={{height:'40px' , width:windowWidthInfo<=1300?'400px':"200px" ,overflow:'hidden' ,border:'1px solid white' ,color:"white",borderRadius:'5px',marginX:'3px',display:'flex',alignItems:'center'}} />
                        </Box>
                       
                        <Button onClick={searchFunction}  sx={{width:'150px', height:'40px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"20px",fontWeight:'500' , marginTop:windowWidthInfo<=1300?'20px':"0", marginLeft:windowWidthInfo<=1300?'15px':"0"}}  variant='contained' >جستجو</Button>
                    </Box>
                </Stack>
                {searched && (
                    <List sx={{overflow:'hidden',height:'fit'}}>
                        <Item item={searchedUser}/>
                    </List>
                )}
            </Box>
        </AccordionDetails>
      </Accordion>
      <Button  onClick={openAddModalFunction} sx={{width:'150px', height:'40px' ,color:"white" ,background:"#fc9a1d" ,border:'1px solid #fc9a1d',fontFamily:"font1",fontSize:"20px",fontWeight:'500',marginTop:"40px"}}  variant='contained'>افزودن</Button>
      </div>
  );
}

const Item = ({item}) =>{
    return(
        <ListItem disablePadding sx={{background:"white",padding:"10px", height:"40px",overflow:'hidden'}}>
             <Typography sx={{width:'15%' ,display:'flex',justifyContent:'start',color:'#022539',fontFamily:'primary'}}>شناسه : {item.id}</Typography>
             <Typography sx={{width:'20%' ,display:'flex',justifyContent:'start',color:'#022539',fontFamily:'primary'}}>نام : {item.userFname}</Typography>
             <Typography sx={{width:'20%' ,display:'flex',justifyContent:'start',color:'#022539',fontFamily:'primary'}}>نام خانوادگی : {item.userLname}</Typography>
             <Typography sx={{width:'20%' ,display:'flex',justifyContent:'start',color:'#022539',fontFamily:'primary'}}>کد ملی : {item.userCode}</Typography>

        </ListItem>
    )
}