import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FormControl, Grid } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

const Input = styled('input')({
  display: 'none',
});
const useStyle = makeStyles(theme =>({
  root:{
    '& .MuiFormControl-root':{
      width: "80%",
      margin: theme.spacing(1)
    }
  }
}))

export default function TForm(props) {

  // const baseData = {
  //   id: 0,
  //   nama: "",
  //   email: "",
  //   noHandphone: "",
  //   pendidikan: "",
  //   files: "",
  //   kelas: "",
  //   harapan: ""
  // }
  // const baseError = {
  //   nama: "",
  //   email: "",
  //   noHandphone: "",
  // }
  const suratKesungguhan = useRef('')
  const clases  = useStyle()
  // const [data, setData] = useState(baseData);
  const [displayUpload, setDisplayUpload] = useState(true);
  

    
    // handle uplod
    // const handleChangeUpload = e =>{
      //   setFiles(e.target.files[0].nama)
      //   setData({
        //     ...data,
        //     files: e.target.files[0]
        //   })
        //   setDisplayUpload(false)
        // }
        // const handleInputChage =(e) =>{
          //   const {name,value} = e.target
          //   setData({
            //     ...data,
            //     [nama]: value
            //   })
            // }
            const navigate = useNavigate();
            const [nama, setNama] = useState('');
            const [email, setEmail] = useState('');
            const [hp, setHp] = useState('');
            const [harapan, setHarapan] = useState('');
            const [kelas, setKelas] = useState('');
            const [pendidikan, setPendidikan] = useState('');
            const [files, setFiles] = useState('');
            const foto = useRef(null)
            const [errorNama, setErrorNama] = useState(false);
            const [errorEmail, setErrorEmail] = useState(false);
            const [errorHp, setErrorHp] = useState(false);
            const [errorMessage, setErrorMessage] = useState('')
            const regex =  /^[A-Za-z ]*$/;


            console.log(nama, email, hp, kelas, harapan, pendidikan)
            // console.log(email)
            // console.log(hp)
            // console.log(kelas)
            // console.log(harapan)
            // console.log(pendidikan)
            
      const handleInput= e =>{
          e.preventDefault();

          if(errorMessage !== ''){
            alert('terdapat data yang tidak sesuai')
          } else{
            alert('data berhasil di terima')
          }
          
          }
      const handleSubmit = (event) => {
        event.preventDefault();
        

        if( nama == ''){
          alert("masukan nama")
          setErrorNama(true)
        } else{
          setErrorNama(false)
        }

        if( email == ''){
          alert("masukan Email")
          setErrorEmail(true)
        } else{
          setErrorEmail(false)
        }

        if( hp == ''){
          alert("masukan No HandPhone")
          setErrorHp(true)
        } else{
          setErrorHp(false)
        }

        // if(nama && email){
        //   fetch('http://localhost:8000/datax',{
        //     method: 'POST',
        //     headers: {"Content-type" : "application/json"},
        //     body: JSON.stringify({nama, email})
            
        //   })
        //   .then(() => navigate.push('./'))
        // }

        // const val = {
        //   nama,
        //   email,
        //   hp,
        //   pendidikan,
        //   files,
        //   kelas,
        //   harapan
        // };
      };
        // props.func(val);
        // clearState();
      // const clearState = () => {
      //   setNama('');
      //   setEmail('');
      //   setHp('');
      //   setPendidikan('');
      //   setFiles('');
      //   setKelas('');
      //   setHarapan('');
      // };

  // handle Riset
  function handleReset(){
    setNama('');
    setEmail('');
    setHp('');
    setHarapan('');
    setKelas('');
    setErrorHp(false);
    setErrorEmail(false);
    setErrorNama(false);
  }
  return (
    <React.Fragment>
        <Box
        component=""
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <form noValidate autoComplete='off' action="" onSubmit={handleInput}>
        <div className={clases.root}>
          <Grid>
              <TextField 
                fullWidth 
                id="outlined-basic" 
                label="Nama Lengkap" 
                variant="outlined" 
                value={nama}
                type="text"
                onChange={(e) => setNama(e.target.value)}
                error={errorNama}
              />
              <TextField 
                id="outlined-basic" 
                label="Email" 
                variant="outlined"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                error={errorEmail}
                />
              <TextField 
                id="outlined-basic" 
                label="No HandPhone" 
                variant="outlined"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                error={errorHp}
                />
          </Grid>
          <Grid className='m-2'>
              <FormLabel id="demo-row-radio-buttons-group-label">Latar Belakang Pendidikan</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    value={pendidikan}
                    onChange={(e) => setPendidikan(e.target.value)}
                  >
                    <FormControlLabel value="it" control={<Radio />} label="IT" />
                    <FormControlLabel value="nonit" control={<Radio />} label="NON IT" />
                  </RadioGroup>
          </Grid>
          <Grid>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Kelas Koding yang Dipilih</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={kelas}
                  onChange={(e) => setKelas(e.target.value)}
                  autoWidth
                  label="Kelas Koding yang Dipilih"
                >
                  {/* <MenuItem value="">
                    <em></em>
                  </MenuItem> */}
                  <MenuItem value='Coding Backend with Golang'>Coding Backend with Golang</MenuItem>
                  <MenuItem value='Coding Frontend with ReactJS'>Coding Frontend with ReactJS</MenuItem>
                  <MenuItem value='Fullstack Developer'>Fullstack Developer</MenuItem>
                </Select>
              </FormControl>
          </Grid>
              <Stack className='m-2' direction="row" alignItems="center" spacing={2}>
                <h1>Foto Surat Sungguhan</h1>
                  <label htmlFor="contained-button-file">
                    <Input accept="image/*" id="contained-button-file" multiple type="file" ref={foto} />
                    <Button variant="contained" component="span">
                      Upload
                    </Button>
                  </label>
              </Stack>
            <Grid>
              <TextField
                id="outlined-multiline-static"
                label="Harapan Untuk Koding Bootcamp Ini"
                multiline
                rows={6}
                value={harapan}
                onChange={(e) => setHarapan(e.target.value)}
              />
            </Grid>
            <Grid className='m-2'>
              <Stack direction="row" spacing={2}>
                  <Button 
                    variant="outlined" 
                    startIcon={<DeleteIcon />}
                    onClick={() => handleReset()}
                    >
                      Reset
                  </Button>
                  <Button variant="contained" endIcon={<SendIcon />}

                    onClick={handleSubmit}
                    >
                    Kirim
                  </Button>
              </Stack>
            </Grid>
        </div>
        </form>

      </Box>
      {/* <UseForm/> */}
    </React.Fragment>
  )
}
