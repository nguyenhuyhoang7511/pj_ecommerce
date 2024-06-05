import type { AxiosInstance } from 'axios';
import { useNuxtApp } from '#app';

export const isNull = (value) => {
	return (
		value === undefined ||
		value === null ||
		value === "" ||
		value.length <= 0 ||
		Object.keys(value).length === 0
	);
}

/**
 * Check if a value is empty
 * @param {string | number} valueToCheck
 * @returns {boolean}
 */
export function isEmpty(valueToCheck: string | number): boolean {
	return valueToCheck === null || valueToCheck === undefined || valueToCheck === "";
}

export const parseDateTime = (dateTimeString: string, second = false) => {
	const date = new Date(dateTimeString);

	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const day = String(date.getDate()).padStart(2, '0');
	const hours = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, "0");

	if (second) {
		return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
	}

	return `${year}-${month}-${day} ${hours}:${minutes}`;
};

/**
 * Remove item from local storage by name
 * @param {string} name
 */
export function removeLocalStorageByName(name: string): void {
	if (typeof window !== "undefined") {
		window.localStorage.removeItem(name);
	}
}

/**
 * Set item in local storage
 * @param {string} name
 * @param {any} data
 */
export function setLocalStorageByItem(name: string, data): void {
	if (typeof window !== "undefined") {
		window.localStorage.setItem(name, JSON.stringify(data));
	}
}

export function getLocalStorageByItem(name: string) {
	if (typeof window !== "undefined") {
		const dataLocalStorage = window.localStorage.getItem(name);
		return isEmpty(dataLocalStorage) || dataLocalStorage === "undefined"
			? null
			: JSON.parse(dataLocalStorage);
	}
	return null;
}

export function getSessionStorageByItem(name: string) {
	if (typeof window !== "undefined") {
		const dataSessionStorage = window.sessionStorage.getItem(name);
		return isEmpty(dataSessionStorage) ? null : JSON.parse(dataSessionStorage);
	}
	return null;
}

export function removeSessionStorageByName(name: string): void {
	if (typeof window !== "undefined") {
		window.sessionStorage.removeItem(name);
	}
}

export function setSessionStorageByItem(name: string, data): void {
	if (typeof window !== "undefined") {
		window.sessionStorage.setItem(name, JSON.stringify(data));
	}
}

export const getAxiosInstance = (): AxiosInstance => {
	return useNuxtApp().$api as AxiosInstance;
};

