import { wrapFieldsWithMeta } from "tinacms";
import React from "react";


export  default wrapFieldsWithMeta(({ field, input, meta }) => {
    return (
      <div>
        
        <input
          id="saturation"
          type="file"
          // This will pass along props.input.onChange to set our form values as this input changes.
        />
        <button onClick={() => input.onChange('sdf')}>Upload</button>
        <br/>
        Value: {input.value}
      </div>
    )
  })