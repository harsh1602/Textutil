import React from 'react'

export default function Alert(props) {

    // Function to capitalize the first word of type.
    const capitalize= (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
  return (
    props.alert && <div>
        {/* props.alert && is used to make sure to evaluate props.alert first and then the second one if its true. */}  
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    </div>
  )
}
