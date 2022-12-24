import { v4 as uuid } from 'uuid';

/*
 * Class to represent a simple pizza entry
 */

export class Pizza {
	private _size: number;
	private _price: number;
	private _uuid: string;

	constructor(size: number = 8, price: number = 10) {
		this._size = size;
		this._price = price;
		this._uuid = uuid();
	}

	// factory method for creation from JSON
	static fromJSON(json: JSON): Pizza {
		return Object.assign(new Pizza(), json);
	}

	public get size(): number {
		return this._size;
	}

	public get price(): number {
		return this._price;
	}

	public get surfaceArea(): number {
		return Math.PI * Math.pow(this._size / 2, 2);
	}

	public get areaPerMoney(): number {
		return this.surfaceArea / this.price;
	}

	// Function for comparing pizzas
	static compare(a: Pizza, b: Pizza): number {
        let x = a.areaPerMoney, y = b.areaPerMoney;

        if (x < y) {
            return 1;
        } else if (x > y) {
            return -1;
        } else {
            return 0;
        }
    }

	// Equals function
	public equals(that: Pizza): boolean {
		return this._uuid == that._uuid;
	}
}