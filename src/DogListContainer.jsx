// @ts-check

import * as React from 'react';

import { BreedsSelect } from './BreedsSelect';

export const DogListContainer = () => {
	const [breeds, setBreeds] = React.useState([]);
	const [selectedBleed, setselectedBleed] = React.useState([]);
	/**
	 * 
	 * @param {*} ev 
	 */
	const handleBreedChange = (ev) => {
		setselectedBleed(ev.target.value)
	}
	console.log(selectedBleed);
	React.useEffect(() => {
		fetch("https://dog.ceo/api/breeds/list/all")
			.then((res) => res.json())
			.then((data) => {
				setBreeds(data.message)
			})
	}, [])
  return (
		<section>
			<BreedsSelect breeds={breeds} selectedBleed={selectedBleed} onChange={handleBreedChange} />
		</section>
	)
}

export default DogListContainer
