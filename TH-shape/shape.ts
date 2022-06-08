export class Shape {
    private _color: string = "blue";
    private _filled: boolean = true;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    public getColor(): string {
        return this._color;
    }

    public setColor(value: string): void {
        this._color = value;
    }

    public isFilled(): boolean {
        return this._filled;
    }

    public setFilled(value: boolean): void {
        this._filled = value;
    }

    public toString(): string {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");

    }
}