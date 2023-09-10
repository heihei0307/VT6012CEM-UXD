import {Box, Card, CardMedia, Typography} from "@mui/material";
import {Add, ClosedCaption, FiberManualRecord, Mic} from "@mui/icons-material";
import {Link} from "react-router-dom";

interface prop {
    enableAdd?: boolean
}

const ListItem = ({enableAdd=true}:prop) => {
  return (
      <Link to={'/details'}>
          <Box sx={{display: 'flex', gap: '16px', padding: '16px 0', alignItems: 'center', borderBottom: '1px solid #FFFFFF66'}}>
              <Box>
                  <Card>
                      <CardMedia component={'img'} image={"/cover.png"} sx={{width: '60px'}}></CardMedia>
                  </Card>
              </Box>
              <Box sx={{display:'flex', flexFlow: 'column', gap:'8px', flexGrow: 1}}>
                  <Typography sx={{color:'white'}}>One Piece</Typography>
                  <Box>
                      <Box sx={{display: 'flex', gap: '.25rem', alignItems: 'center'}}>
                          <Box sx={{
                              background: '#B0E3AF',
                              padding: '4px 6px',
                              color: 'black',
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px',
                              borderRadius: '4px 0 0 4px'
                          }}><ClosedCaption/>1071</Box>
                          <Box sx={{
                              background: '#E3B5CD',
                              padding: '4px 6px',
                              color: 'black',
                              fontWeight: 'bold',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '4px'
                          }}><Mic/>1030</Box>
                          <FiberManualRecord sx={{color:'white', fontSize: '.5rem'}}/>
                          <Typography sx={{color:'white'}}>TV</Typography>
                      </Box>
                  </Box>
              </Box>
              {enableAdd && <Add sx={{color: '#AAAAAA'}}/>}
          </Box>
      </Link>
  )
}

export default ListItem