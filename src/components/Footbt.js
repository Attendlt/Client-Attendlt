import React from 'react'
import './styler.css';
import { Button } from '@material-ui/core';
function Footbtn() {
  return (<>
    <div className="footer">
        <Button variant ="text" style={{color:'white',width:'100%',height:'100%'}}>Schedule Demo
        </Button>
    </div>
  </>);
}
export default Footbtn;