import { useState } from "react";
function Gender(){
    const [gender, setGender] = useState("male");

    return(
        <div>
            <div>
                <label>Enter Your Gender</label>
                <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
            </div>
            {
                gender == "male" ? <h1>I am a Man</h1> : <h2>I am a lady</h2>
            }
        </div>
    )
}

export default Gender;