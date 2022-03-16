import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import { pink } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';

const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function Header() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className='w-full bg-teal-100 h-16 flex justify-start items-center z-30 sticky top-0'>
          <h1 className='text-current pl-2'>Al-Bayan</h1>
          <Box
            sx={{
                  '& > :not(style)': {
                    m: 2,
                  },
            }}
          >
            <HomeIcon color="primary" fontSize="large" />
          </Box>
      </div>
        <List sx={style} component="nav" aria-label="mailbox folders">
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button divider>
            <ListItemText primary="Contac" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
    </List>
    </div>
  );
}
// export default function Header() {
//   return (
//     <div className=''>
//       <div className='w-full bg-teal-100 h-16 flex justify-start items-center z-30 sticky top-0'>
//         <h1 className='text-current pl-2'>Al-Bayan</h1>
//         </div>
//         <div className='h-screen w-1/4 bg-teal-700 z-40'>
//           <div>
//             <ul className='text-white'>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Menu</li>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Tabungan</li>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Angasuran</li>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Administrasi</li>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Penarikan</li>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Realisasi Angsuran</li>
//               <li className='border-b border-orange-200 py-4 pl-1.5'>Logout</li>
//             </ul>
//           </div>
//       </div>
//     </div>
//   )
// }

