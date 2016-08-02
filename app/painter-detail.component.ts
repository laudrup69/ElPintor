import { Component } from '@angular/core';

import { Painter } from './painter';

@Component({
    inputs: ['painter'],
    selector: 'my-painter-detail',
    template: `
        <div *ngIf="painter">
            <h2>{{painter.name}}</h2>
            <div><label>style: </label>{{painter.style}}</div>
            <div><label>Ejemplos: </label>{{painter.examples}}</div>
            <div>
                <h3>Edición</h3>
                <label>Nombre: </label>
                <div><input [(ngModel)]="painter.name" placeholder="name"></div>
            </div>
        </div>
    `
})

export class PainterDetailComponent{
    public painter: Painter;
}