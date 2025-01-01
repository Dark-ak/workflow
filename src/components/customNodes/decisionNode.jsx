/* eslint-disable react/prop-types */
import { Handle} from "@xyflow/react";
import Toolbar from "../toolbar";
import chroma from "chroma-js";


export default function DecisionNode ({id,data }){
  
  return(<div
    className=" border text-white flex items-center justify-center"
    style={{
      width: 100,
      height: 100,
      backgroundColor: data.color,
      borderColor: chroma(data.color).darken(0.8).hex(),
      transform: 'rotate(45deg)', // Rotate the container
      position: 'relative', // Relative for child positioning
    }}>

    <Toolbar id={id} data={data} offset={50}/>
  
    <div style={{ transform: 'rotate(-45deg)', backgroundColor:data.color, }}>{data.label}</div>

    {/* Top Edge */}
    <Handle
      type="target"
      position="top"
      id="source-top"
      style={{
        position: 'absolute',
        left: 0,
        background: 'black',
      }}
    />

    {/* Right Edge */}
    <Handle
      type="source"
      position="right"
      id="Yes"
      style={{
        position: 'absolute',
        // left: 0,
        top: 0,
        right: 0,
        background: 'green',
      }}
    />


    {/* Left Edge */}
    <Handle
      type="source"
      position="left"
      id="No"
      style={{
        position: 'absolute',
        bottom: 0,
        top:100,
        background: 'red',
      }}
    />
  </div>)}  