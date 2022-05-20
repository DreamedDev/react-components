import { storiesOf } from '@storybook/react';

import avatar from "./assets/1.jpg"
import {Explore, GridView, Note, School} from "@mui/icons-material";
import {NavBar} from "../index";

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


const stories = storiesOf('react-components', module)
stories.add('NavBar', ()=>{
    return <NavBar logo={logo} tabs={tabs} userdata={userdata}/>
})
