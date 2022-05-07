export interface IExercise {
	id: number,
	name: string,
	sets?: number,
	reps?: number
}

export interface IWeights extends IExercise {
	weight: number;
}

export interface ICardio extends IExercise {
	miles?: number,
	time?: number
}

export interface IHiit extends IExercise {
	time?: number;
	description?: string;
}
