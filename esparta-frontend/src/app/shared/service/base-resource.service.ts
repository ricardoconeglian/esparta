
import {BaseResourceModel} from '../models/base-resource.model'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map, catchError } from 'rxjs/operators';
import { Injector } from '@angular/core';


export abstract class BaseResourceService<T extends BaseResourceModel>{

  protected http: HttpClient;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
    protected jsonDataToResourceFn: (jsonData:any) => T)
    {
    this.http = injector.get(HttpClient);

  }

  //monta a base da URL que será enviado a API
  baseUrl = "http://127.0.0.1:8000/";
  //Monta o cabeçalho do HTTP a ser enviado
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json')

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + this.apiPath, {headers: this.httpHeaders})//.pipe(
   //   map(this.jsonDataToResources.bind(this)),
   //   catchError(this.handleError),
   // )

  }

  getById(id: number): Observable<T> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(this.baseUrl + url, {headers: this.httpHeaders}).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)

    )
  }

  create(resource: T): Observable<T> {
    return this.http.post(this.baseUrl + this.apiPath, resource, {headers: this.httpHeaders}).pipe(
      map(this.jsonDataToResource.bind(this)),
      catchError(this.handleError)
    )
  }

  update(resource: T): Observable<T> {
    const url = `${this.apiPath}/${resource.id}`;

    return this.http.put(this.baseUrl + url, resource, {headers: this.httpHeaders} ).pipe(
      map(() => resource),
    catchError(this.handleError)
    )
  }

  delete(id: number): Observable<any> {
    const url = `${this.apiPath}/${id}`;

    return this.http.delete(this.baseUrl + url, {headers: this.httpHeaders}).pipe(
      map(() => null),
      catchError(this.handleError)

    )
  }

  //PROTECTED METHODS

  protected jsonDataToResource(jsonData:any): T{
    return this.jsonDataToResourceFn(jsonData);
  }

  protected jsonDataToResources(jsonData:any[]):T[] {
    const resources:T[] = [];
    jsonData.forEach(
      element => resources.push(this.jsonDataToResourceFn(element))
    )
    return resources;

  }

  protected handleError(error:any): Observable<any> {
    console.log("Erro na requisição => ", error)
    return throwError(error);
  }

}
