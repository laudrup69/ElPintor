import { Injectable } from '@angular/core';

import { Painter } from '../Painter';
import { PAINTERS } from './painters.mock';

@Injectable()
export class PainterService{

    getPainters(): Promise<Painter[]>
    {
        return Promise.resolve(PAINTERS);
    }

   /* getLaggedPainters(): Promise<Painter[]>
    {
        var res = function miresolve(elresolver) {
            setTimeout( () =>  elresolver, 3000);
        }

        return new Promise<Painter[]>(res);

        //return new Promise<Painter[]>(resolvebis =>
          //  setTimeout(()=>resolvebis(PAINTERS), 3000));
    }*/
}