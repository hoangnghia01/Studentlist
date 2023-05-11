export default function Footer(props){
    const btnList = [
        {
            id: 1,
            name: "Fillter all",
            handleClick: () =>props.fillAll(),
        },
        {
            id: 2,
            name: "Remove checked",
            handleClick: () =>props.removeChecked(),
        },
        {
            id: 3,
            name: "Fillter checked",
            handleClick: () =>props.fillChecked(),
           
        },
        {
            id: 4,
            name: "Fillter nochecked",
            handleClick: () =>props.fillNoChecked(),
        }
    ]
    return(<div className="footer">
        {btnList.map((item, key) =>(
            <button key = {key} onClick={item.handleClick}>{item.name}</button>
        ))}
    </div>)
}