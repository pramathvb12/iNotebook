import React from "react";

function Alert(props) {
  //Using the alert component.
  return (
    props.alert && (
      <div
        class={`alert alert-${props.alert.type} alert-dismissible fade show my-2`}
        role="alert"
      >
        {props.alert.type}
        <strong> : {props.alert.msg}</strong>
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          {/* <span aria-hidden="true">&times;</span> */}
        </button>
      </div>
    )
  );
}

export default Alert;
