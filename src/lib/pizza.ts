/*
 * Class to represent a simple pizza entry
 */

export class Pizza {
	private _size: number;
	private _price: number;

	constructor(size: number, price: number) {
		this._size = size;
		this._price = price;
	}

	// factory method for creation from JSON
	static fromJSON(json: JSON): Pizza {
		return new Pizza(json["size"], json["price"])
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
}