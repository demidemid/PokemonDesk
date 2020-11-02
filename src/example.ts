// Работа с простыми типами

const concat = (firstWord: string, secondWord: string): string => firstWord + secondWord;

concat('Hello ', 'World') // -> Hello World;

// Работа с интерфейсами

interface MyHometask {
    howIDoIt: string,
    simeArray: Array<string | number>,
    withData?: Array<MyHometask>
}

const MyHometask: MyHometask = {
	howIDoIt: "I Do It Wel",
	simeArray: ["string one", "string two", 42],
	withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

// Типизация функций, используя Generic

interface MyArray<T> {
	[N: number]: T;

    reduce<U>(fn: (accumulator: U, currentValue: T, currentIndex: number, array: ReadonlyArray<T>) => U, initialValue: U): U;
}