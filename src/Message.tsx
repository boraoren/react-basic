import React from 'react';


const Message = ({text}:{text:string}) => {
    return(
        <div style={{color: 'red', fontWeight: 'bold'}}>
            {text}
        </div>
    )
}

export default Message;