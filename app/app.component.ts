import { Painter } from './painter';
import { PainterDetailComponet } from './server/painter-detail.component';
import { PainterService } from './server/painter.service';

@Component({
    directives: [PainterDetailComponet],
    providers: [PainterService],
    selector: 'my-app',
    template: `
        <h1><img class="logoImg" src="img/brush.png" /> Famous painters</h1>
        <ul class="painters">
            <li *ngFor="let p of painters"
                [class.selected]="p === selectedPainter"
                (click)="onSelect(p)">
                <span class="badge">{{p.id}}</span> {{p.name}}
            </li>
        </ul>
        <my-painter-detail [painter]="selectedPainter"></my-painter-detail>
    `
})