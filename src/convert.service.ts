import { Injectable } from '@angular/core';
import { Selectobject } from './selectobject';
@Injectable()
export class ConvertService {
    public toSelectobjet(items: any) {
    let buf: Array<Selectobject>=[];
    for (let i of items) {

      let so = { id: i.id, text: '' };
      if (!!i.text)
        so.text = i.text;
      else if (!!i.name)
        so.text = i.name;
      buf.push(so);
    }
    return buf;
  }
}