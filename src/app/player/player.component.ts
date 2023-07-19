import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
	private _name: string; 
	private _turn: boolean = false;
	private _wins: number = 0;
	
	constructor(){}
	public set name(name: string) {
		this._name = name;
	}
	public get name(): string {
		return this._name
	}

	public set turn(turn: boolean) {
		this._turn = turn;
	}
	public get turn(): boolean {
		return this._turn
	}

	public set wins(wins: number) {
		this._wins = wins;
	}
	public get wins(): number {
		return this._wins
	}
}
