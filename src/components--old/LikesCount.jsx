import { useState } from "react";

function LikesCount(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <h1>{count} likes</h1>
            <button onClick={() => setCount(count + 1)}>Add Like</button>
        </div>
    )

}

export default LikesCount;