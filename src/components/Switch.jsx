
import React from 'react'
import { Switch as MUISwitch } from '@mui/material';
import getRandomisedProps from '../util/getRandomisedProps';
import { useLayoutEffect, useRef } from "react";

const Switch = () => {

	  const elementRef = useRef();

    let randomised = {}

    randomised.size = getRandomisedProps(["small", "medium"]);

    randomised.checked = getRandomisedProps([true, false]);

    randomised.disabled = getRandomisedProps([true, false ]);

    randomised.color = getRandomisedProps([
      "default",
      "primary",
      "secondary",
      "success",
      "error",
      "info",
      "warning",
    ]);

    useLayoutEffect(()=>{
      const boundingBox = elementRef.current?.getBoundingClientRect();
      if(elementRef && elementRef.current){
        elementRef.current.dataset.muiComponentBoundingBox = JSON.stringify(boundingBox);
      } 
    },[])

  return (
    <MUISwitch 
      {...randomised}
			ref={elementRef}
			data-mui-component
			data-mui-component-type="Switch"
			data-mui-component-props={JSON.stringify(randomised, (key, value) => {
				try {
					JSON.stringify(value);
					return value;
				} catch (error) {
					return "[Circular]";
				}
			})}
    />
  );
}

export default Switch