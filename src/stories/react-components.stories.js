import { storiesOf } from '@storybook/react';
import avatar from "./assets/1.jpg";
import hotel from "./assets/hotel_l.jpg"
import room from "./assets/room_l.jpg"
import {Dashboard, Explore, GridView, Lock, Note, School} from "@mui/icons-material";
import {Footer, FullPage, NavBar} from "../index";
import {Button, Typography} from "@mui/material";

const logo = {
    icon: <Note/>,
    label: 'Flashcards'
}

const tabs = [{
    icon: <School/>,
    label: 'courses',
    callback: () => console.log('Courses redirect')
},{
    icon: <GridView/>,
    label: 'groups',
    callback: () => console.log('Groups redirect')
},{
    icon: <Explore/>,
    label: 'explore',
    callback: () => console.log('Explore redirect')
}]

const userdata = {
    username: "NorbertBaran",
    // https://unsplash.com/photos/rDEOVtE7vOs?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink
    avatar: avatar
}

const navBtn = {
    icon: <Dashboard/>,
    label: 'Dashboard',
    callback: () => console.log('Dashboard')
}


const stories = storiesOf('react-components', module)
stories.add('NavBar', ()=>{
    return (
        <>
            <NavBar logo={logo} tabs={tabs} userdata={userdata}/>
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dui sit amet lorem lacinia ornare. Sed sit amet vehicula magna. Aliquam erat volutpat. Ut nec lacus vel odio elementum semper quis eu enim. Maecenas lacinia enim velit, sed interdum tortor condimentum non. Pellentesque luctus turpis sed malesuada rhoncus. Duis aliquam, eros sed pulvinar cursus, nunc libero venenatis ex, sit amet eleifend turpis neque id arcu. Nullam orci odio, sagittis at feugiat ut, mollis et purus. Curabitur auctor mauris nec leo efficitur, at consequat lorem euismod.
            </Typography>
        </>
    )
})

stories.add('NavBar - topOpacity', ()=>{
    return (
        <>
            <NavBar logo={logo} tabs={tabs} navBtn={navBtn} topOpacity={false}/>
            <FullPage src={hotel}>
            </FullPage>
            <FullPage>
                <Typography variant='h4'>
                    <p>About</p>
                </Typography>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget gravida sapien. Nunc interdum consectetur est, at rhoncus orci. In non finibus ex. Vestibulum quis fermentum massa. Donec et orci nulla. Curabitur nec luctus mauris. Fusce fermentum sollicitudin elit ac lobortis.
                </Typography>
            </FullPage>
            <FullPage src={room}>
                <Button variant='outlined' sx={{width: '250px', height: '50px'}}>Gallery</Button>
            </FullPage>
            <FullPage>
                <Typography variant='h4'>
                    <p>Contact</p>
                </Typography>
                <Typography>
                    <div>Tel: 123-456-789</div>
                    <div>Facebook: facebook.com</div>
                </Typography>
            </FullPage>
            <Footer label='Zapraszamy ponownie!'/>
        </>
    )
})

stories.add('FullPage', ()=>{
    return <FullPage>
        <div>FullPage</div>
    </FullPage>
})

stories.add('FullPage - img', ()=>{
    return <FullPage src={hotel}>
        <div>FullPage - img</div>
    </FullPage>
})