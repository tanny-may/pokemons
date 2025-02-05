export function saveToLocalStorage(state) {
	try {
		const serializedState = JSON.stringify(state);
		localStorage.setItem('state', serializedState);
	} catch (error) {
		console.error('Error saving to localStorage', error);
	}
};
  
export function loadFromLocalStorage() {
	try {
		const serializedState = localStorage.getItem('state');
		if (serializedState === null) {
			return undefined;
		}
		return JSON.parse(serializedState);
	} catch (error) {
		console.error('Error loading from localStorage', error);
		return undefined;
	}
};
