
import DateTime from "./DateTime";
import GreetingComponent from "./GreetingComponent";
function ExtendedHeader() {
    return (
        <div className="extended-header" style={{display:"grid", gridTemplateColumns:"1fr 2fr", justifyContent:"space-between"}}>
            <DateTime/>
            <div>
            <GreetingComponent/>
            <input style={{width:"600px", height:"30px"}} placeholder="Search"/>
            </div>

        </div>
    )
}

export default ExtendedHeader;