import React from 'react'

const ListItem = (props) => {
const item = props.items

const listItems = item.map((item) => {
return(<div className="listedItem" key={item.key}><p>{item.text} <button onClick={()=>props.deleteItem(item.key)}>Delete</button></p></div>)
})

    return (
        <div>
            {listItems}
        </div>
    )
}

export default ListItem
