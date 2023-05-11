import { useState } from "react"

export default function Addlist(props){
    const [text, setText] = useState("")
    return(
        <form className="formadd"
        onSubmit={(e)=>{
            e.preventDefault()
            props.addlist(text)
            setText("")
        }}>
        <input 
        type="text"
        placeholder="Enter name"
        value={text}
        onChange={(e)=>{
            setText(e.target.value)
        }
        }
        />
        
        </form>
    )
}