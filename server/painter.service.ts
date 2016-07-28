import { Injectable } from '@angular/core';

import { Painter } from '../Painter';
import { PAINTERS } from './painters.mock';

@Injectable()
export class PainterService{

    getPainters(): Promise<Painter[]>
    {
        return Promise.resolve(PAINTERS);
    }

    getLaggedPainters(): Promise<Painter[]>
    {
        return new Promise<Painter[]>(resolve =>
            setTimeOut(()=>resolve(PAINTERS), 3000));
    }
}