import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/service/base-resource.service';
import {Produto} from './produto.model';

import {Observable} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseResourceService<Produto> {

  constructor(protected injector: Injector) {
    super( 'api/produto', injector, Produto.fromJson)
  }

}
