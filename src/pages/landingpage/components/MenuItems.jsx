import "./../styles/MenuItems.css"
function MenuItems() {

    const items = ["User Settings","Edit Page", "Sign Out"];

    return (
        <ul className="menu-items">
            {
                items.map((item,indx)=><li key= {indx} className="menu-sub-item" style={{width:"150px"}}>{item}</li>)
            }
        </ul>
    )
}

export default MenuItems;