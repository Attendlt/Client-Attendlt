import React from 'react'
import './styler.css';
import { Button } from '@material-ui/core';
function Footbtn() {
  return (<>
    <div className="footer">
        <Button variant ="primary" style={{background:'teal',color:'white',width:'40%',height:'200%',position:'relative'}}>Register Yourself
        </Button>
    </div>
  </>);
}
export default Footbtn;