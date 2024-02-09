import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Topbar from './Topbar';



export default function Portal({mode, setMode}) {
  return (
    <div className="portal">
<Topbar mode={mode} setMode={setMode}/>
<Outlet />
    
    </div>
  )
}