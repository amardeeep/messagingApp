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
function SideTray({theme,handleThemeChangeOnClick}){
  return (
    <div className={`${appStyle.iconSideBar} theme-${theme}`}>
        {iconsData.map(icon=>{
          return <img src={icon.svg} alt={icon.name} key={icon.name} className={appStyle.icon}/>
        })}
        <button onClick={()=>{(handleThemeChangeOnClick(theme))}} className={`theme-${theme}`}>{theme}</button>
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
  useEffect(()=>{
    document.body.className=`theme-${theme}`
  },[theme])
  return (
    <>  
      <SideTray theme={theme} handleThemeChangeOnClick={handleThemeChangeOnClick}/>
      
    </>
  )
}


 

export default App
