// DO NOT DELETE

import './App.css'
import React, { useState } from 'react';
import { Header } from './Header';
import { Description } from './Description';

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
		<main>
		<Header />
		<Description/>
		</main>
  )
}
