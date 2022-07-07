import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { TextField as MUITextField } from '@mui/material';
import getRandomisedProps from '../util/getRandomisedProps';

const TextField = () => {

    const elementRef = useRef();

    let randomised = {}

    randomised.variant = getRandomisedProps(["outlined", "filled", "standard"]);

    randomised.disabled = getRandomisedProps([true, false]);

    randomised.color = getRandomisedProps([
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
    <MUITextField 
      {...randomised}
			ref={elementRef}
      data-mui-component
			data-mui-component-type="TextField"
			data-mui-component-props={JSON.stringify(randomised, (key, value) => {
				try {
					JSON.stringify(value);
					return value;
				} catch (error) {
					return "[Circular]";
				}
			})}
      label={`${randomised.disabled?"DISABLED-":""}${randomised.variant.toUpperCase()}-TEXTFIELD`} 
    />
  );
}

export default TextField