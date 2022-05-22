import {AppBar, Avatar, Box, Button, IconButton, styled, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import React, {useEffect, useState} from "react";
import {Send} from "@mui/icons-material";

const NavBar = ({logo, tabs, userdata = null, navBtn, topOpacity = true}) => {
    const [opacity, setOpacity] = useState(topOpacity)

    const onAppBarScroll = () => window.scrollY < 75 ?
        setOpacity(topOpacity) : setOpacity(true)

    useEffect(()=>{
        window.addEventListener('scroll', onAppBarScroll)
        return () => {
            window.removeEventListener('scroll', onAppBarScroll)
        }
    }, [])

    return(
        <>
            <AppBar position='fixed' sx={!opacity ? {background: 'transparent', boxShadow: '0'}: {}}>
                <BarContent>
                    <BarLogo logo={logo}/>
                    <BarTabs tabs={tabs}/>
                    {userdata ? <BarAvatar userdata={userdata}/> : <BarBtn navBtn={navBtn}/>}
                </BarContent>
            </AppBar>
            {topOpacity ? <div style={{marginTop: '75px'}}/> : <div/>}
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
                <StyledBarTab key={index} icon={tab.icon} label={getTabLabel(index)}/>
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

const BarBtn = ({navBtn}) => {
    return(
        <BarBox>
            <Button color="inherit" endIcon={navBtn.icon} sx={{display: {xs: 'none', md: 'inherit'}}} onClick={()=>navBtn.callback()} >{navBtn.label}</Button>
            <IconButton color="inherit" sx={{display: {xs: 'inherit', md: 'none'}}} onClick={()=>navBtn.callback()}>{navBtn.icon}</IconButton>
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