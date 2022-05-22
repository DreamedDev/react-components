import {AppBar, Toolbar, Typography} from "@mui/material";

const Footer = ({label}) => {
    return(
        <AppBar position='static'>
            <Toolbar>
                <Typography sx={{width: '100%', textAlign: 'center'}}>
                    {label}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Footer