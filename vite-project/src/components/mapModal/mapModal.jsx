import React from "react";
import GoogleMapReact from 'google-map-react';
import { Box ,Typography ,Modal} from '@mui/material';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { closeMapModal } from '../../redux/store/modalsReducer';
import ClearIcon from '@mui/icons-material/Clear';



export default function MapModal() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {setOpen(false);dispatch(closeMapModal())};
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
    height:400,
    bgcolor: '#022539',
    border: '2px solid white',
    boxShadow: 24,
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center',
    p: 1,
  };

  useEffect(()=>{
      if(modals[5]==true){
          setOpen(true)
      }else{
          setOpen(false)
          dispatch(closeMapModal())
      }
  },[modals[5]])


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
            نقشه
          </Typography>
          <Box sx={{border:'1px solid white',width:'100%',height:'80%',display:'flex',flexWrap:'wrap',justifyContent:'start',alignContent:'center',paddingX:'20px'}}>
                <MapBox Props={selectedUserInfo}/>
            </Box>
        </Box>
        </div>
      </Modal>
    </div>
  );
}


// *****************map****************************

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function MapBox({Props}){
    console.log(Props);
  const defaultProps = {
    center: {
    //   lat: 10.99835602,
    //   lng: 77.01502627,
    lat:Number(Props.lat),
    lng:Number(Props.lng),
    },
    zoom: 11
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  );
}