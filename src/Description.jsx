// @ts-check

import React, { useState } from 'react';
import { DogImage } from './DogImage';

async function getRandomDogImageUrl() {
	const resultUrl = (await fetch("https://dog.ceo/api/breeds/image/random")).json().then((res) => {
		console.log(res);
		return res.message;
	});
	return resultUrl
}

export const Description = () => {
	const [dogUrl, setDogUrl] = useState("https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg");
	console.log(`dogUrl: ${dogUrl}`);
  return (
		<div className="description">
			<DogImage imageUrl={dogUrl} />
			<p>これは犬の画像です</p>
			<button onClick={async() => {
				const url = await getRandomDogImageUrl();
				setDogUrl(url);
			}}>更新</button>
		</div>
	)
}

export default Description
