import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Info, loadPokemons } from './components/Info';
import { downloadPokemon } from './domain/downloadPokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},

	{
		path: '/:pokemonId',
		element: <Info />,
		loader: async ({ params }) => await downloadPokemon(params.pokemonId),
	},
]);

root.render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
);
