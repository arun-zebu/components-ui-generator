import React from 'react'
import { useLayoutEffect, useRef } from "react";
import { Checkbox as MUICheckbox } from '@mui/material';
import getRandomisedProps from '../util/getRandomisedProps';

const Checkbox = () => {

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
    <MUICheckbox 
      {...randomised}
			ref={elementRef}
			data-mui-component
			data-mui-component-type="Checkbox"
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

export default Checkbox