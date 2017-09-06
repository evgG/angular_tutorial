import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{title}}</h1><h2>{{hero.name}}</h2>`,
})

export class AppComponent {
	name = 'Angular';
	title = 'Tour of Heroes';
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	};
}

export class Hero {
	id: number;
	name: string;
}

