import * as React from 'react';

import { Box ,Typography ,Modal} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeChartModal } from '../../redux/store/modalsReducer';
import ClearIcon from '@mui/icons-material/Clear';



export default function ChartModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false);dispatch(closeChartModal())};
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
      if(modals[4]==true){
          setOpen(true)
      }else{
          setOpen(false)
          dispatch(closeChartModal())
      }
  },[modals[4]])

 

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
            نمودار
          </Typography>
          <Box sx={{border:'1px solid white',width:'100%',height:'80%',display:'flex',flexWrap:'wrap',justifyContent:'start',alignContent:'center',paddingX:'20px'}}>
              <BarChartModal/>
            
            </Box>
        </Box>
        </div>
      </Modal>
    </div>
  );
}




import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const BarChartModal = () => {
  

  const data = [
    {
      name: 'Sat',
      sc: 4000,

    },
    {
      name: 'Sun',
      sc: 3000,

    },
    {
      name: 'Mon',
      sc: 2000,
  
    },
    {
      name: 'Tue',
      sc: 2780,
   
    },
    {
      name: 'Wed',
      sc: 1890,
   
    },
    {
      name: 'Thu',
      sc: 2390,
     
    },
  
  ];
  return (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 25,
            left: -20,
            bottom: 0,
          }}

        >
          <CartesianGrid  vertical={false}/>
          <XAxis dataKey="name" fontSize={15}/>
          <YAxis fontSize={15}/>
          <Tooltip contentStyle={{fontSize:'15px'}}/>
          <Bar dataKey="sc" fill="#fc9a1d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
  );
};

