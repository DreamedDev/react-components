import {Box} from "@mui/material";

const FullPage = ({src = null, children}) => {
    return <Box sx={{
        backgroundImage: `url(${src})`,
        height: '100vh',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center',
        padding: {xs: '0 100px', md: '0 200px'}
    }}>
        {children}
    </Box>
}

export default FullPage