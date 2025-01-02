import { useEffect, useState } from 'react'
import chatIcon from './svgs/chat.svg'
import accountIcon from './svgs/account.svg'
import commIcon from './svgs/community.svg'
import groupIcon from './svgs/group.svg'
import settingIcon from './svgs/setting.svg'
import appStyle from './app.module.css'
import './App.css'

const iconsData=[
  { 
    name:"Chat",
    svg:chatIcon
  },
  {
    name:"Group",
    svg:groupIcon
  },
  {
    name:"Communities",
    svg:commIcon
  },
  {
    name:"Setting",
    svg:settingIcon
  },
  {
    name:"Account",
    svg:accountIcon
  }
  
]
function SideTray({theme}){
  return (
    <div className={`${appStyle.iconSideBar} ${theme}`}>
        {iconsData.map(icon=>{
          return <img src={icon.svg} alt={icon.name} key={icon.name} className={appStyle.icon}/>
        })}
    </div>
  )
}

function App(){
  const [theme,setTheme]=useState('dark');
  const handleThemeChangeOnClick=(theme)=>{
    if(theme=='dark'){
      setTheme('light')
    }
    else if(theme=='light'){
      setTheme('dark')
    }
  }
  return (
    <>  
      <SideTray theme={theme}/>
      <button onClick={()=>{(handleThemeChangeOnClick(theme))}} className={theme}>Toggle Theme {theme}</button>
    </>
  )
}


 

export default App
