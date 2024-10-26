// @ts-check

import * as React from "react"

/**
 * 
 * @param {*} props 
 * @returns 
 */

export const BreedsSelect = (props) => {
  return (
		<select value={props.selectedBleed} onChange={props.onChange}>
			<option value="">犬種を選ぶ</option>
			{Object.keys(props.breeds).map((breed) => (
				<option key={breed} value={breed}>{breed}</option>
			))};
		</select>
	)
}

export default BreedsSelect
