import {AppBar, Avatar, Box, styled, Tab, Tabs, Typography} from "@mui/material";
import React, {useState} from "react";

const NavBar = ({logo, tabs, userdata}) => {
    return(
        <>
            <AppBar position='fixed'>
                <BarContent>
                    <BarLogo logo={logo}/>
                    <BarTabs tabs={tabs}/>
                    <BarAvatar userdata={userdata}/>
                </BarContent>
            </AppBar>
            <div style={{marginTop: '75px'}}/>
        </>
    )
}

export default NavBar

const BarContent = styled(Box)({
    padding: '0 20px',
    width: 'calc(100% - 40px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
})

const BarLogo = ({logo}) => {
    return(
        <BarBox>
            {logo.icon}
            <BarTypography label={logo.label}/>
        </BarBox>
    )
}

const BarTabs = ({tabs}) => {
    const [value, setValue] = useState(0)
    const getTabLabel = tab => tab === value ? tabs[value].label : ""
    const handleChange = (event, newValue) => {
        setValue(newValue);
        tabs[newValue].callback()
    };

    return(
        <Tabs value={value} onChange={handleChange} indicatorColor='secondary' textColor='inherit'>
            {tabs.map((tab, index) =>
                <StyledBarTab icon={tab.icon} label={getTabLabel(index)}/>
            )}
        </Tabs>
    )
}

const BarAvatar = ({userdata}) => {
    return(
        <BarBox>
            <BarTypography label={userdata.username}/>
            <Avatar sx={{ width: 32, height: 32 }} src={userdata.avatar}/>
        </BarBox>
    )
}

const BarBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
})

const StyledBarTab = styled(Tab)({
    fontSize: '12px'
})

const BarTypography = ({label}) => {
    return <Typography sx={{display: {xs: 'none', md: 'block'}}} variant='body1'>{label}</Typography>
}