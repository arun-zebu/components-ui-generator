import React from 'react'
import { Button as MUIButton } from '@mui/material';
import getRandomisedProps from '../util/getRandomisedProps';
import { useLayoutEffect, useRef } from "react";

const Button = () => {
    const elementRef = useRef();

    let randomised = {}

    randomised.size = getRandomisedProps(["small", "medium", "large"]);

    randomised.variant = getRandomisedProps(["text", "outlined", "contained"]);

    randomised.disabled = getRandomisedProps([true, false ]);

    randomised.color = getRandomisedProps([
			"inherit",
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
    <MUIButton 
      {...randomised}
      ref={elementRef}
			data-mui-component
			data-mui-component-type="Button"
			data-mui-component-props={JSON.stringify(randomised, (key, value) => {
				try {
					JSON.stringify(value);
					return value;
				} catch (error) {
					return "[Circular]";
				}
			})}
    >
      {randomised.disabled&&"DISABLED-"}{randomised.size}-{randomised.variant}-BUTTON
    </MUIButton>
  );
}

export default Button