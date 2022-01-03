
import {OnInit, AfterContentChecked, Injector, Component, Directive } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import {BaseResourceModel} from '../../models/base-resource.model'
import {BaseResourceService} from '../../service/base-resource.service'
import { switchMap } from 'rxjs/operators';

//import toastr from 'toastr';



@Directive()
export abstract class BaseResourceFormComponent<T extends BaseResourceModel> implements OnInit, AfterContentChecked {

  currentAction: string | undefined;
  resourceForm: FormGroup | any;
  pageTitle: string | undefined;
  serverErrorMessages: string[] | undefined
  submittingForm: boolean = false;

  protected route: ActivatedRoute;
  protected router: Router;
  protected formBuilder: FormBuilder;


  constructor(
    protected injector: Injector,
    protected resourceService:BaseResourceService<T>,
    //protected toastr: ToastrService,
    public resource: T,
    protected jsonDataToResourceFn: (jasonData:any) => T,
  ) {
    this.route = this.injector.get(ActivatedRoute);
    this.router = this.injector.get(Router);
    this.formBuilder = this.injector.get(FormBuilder);
   }


  ngAfterContentChecked(): void {
    this.setPageTitle();
  }

  ngOnInit(): void {
    this.setCurrentAction();
    this.buildResourceForm();
    this.loadResource();
  }

  submitForm(){
    this.submittingForm = true;

    if(this.currentAction == "new")
      this.createResource();
    else //current action == edit
      this.updateResource()
  }

  //PRIVATE METHODS

  protected setCurrentAction(){
    if(this.route.snapshot.url[0].path == "new")
      this.currentAction = "new"
    else
      this.currentAction = "edit"
  }



  protected loadResource(){
    if(this.currentAction == "edit"){
      this.route.paramMap.pipe(
        switchMap((params: ParamMap|any) => this.resourceService.getById(+params.get("id")))
      )
      .subscribe(
        (resource) => {
          this.resource = resource
          this.resourceForm.patchValue(resource) // binds loaded resource data to ResourceForm
        },
        (error) => alert("Ocorreu um erro no servidor, tente mais tarde")
      )
    }
  }

  protected setPageTitle(){
    if(this.currentAction == 'new')
      this.pageTitle = this.creationPageTitle();
    else{
      this.pageTitle = this.editionPageTitle()
    }
  }

  protected creationPageTitle(): string{
    return 'Novo'
  }

  protected editionPageTitle(): string{
    return 'Edição'
  }



  protected createResource(){
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value)

    this.resourceService.create(resource).subscribe(
      resource => this.actionsForSuccess(resource),
      error => this.actionsForError(error)
    )

  }

  protected updateResource(){
    const resource: T = this.jsonDataToResourceFn(this.resourceForm.value)

    this.resourceService.update(resource).subscribe(
      resource => this.actionsForSuccess(resource),
      error => this.actionsForError(error)
    )
  }

  protected actionsForSuccess(resource: T){

    //const baseComponentPath: string = this.route.snapshot.parent.url[0].path;

   // this.router.navigateByUrl(baseComponentPath, {skipLocationChange: true}).then(
   //   () => this.router.navigate([baseComponentPath, resource.id, "edit"])
   // )
  }

  protected actionsForError(error:any){


    this.submittingForm = false;

    if(error.status === 422)
    this.serverErrorMessages = JSON.parse(error._body).errors;
    else
      this.serverErrorMessages = ["Falha na comunicação com o servidor. Por favor, tente novamente mais tarde!"]

  }

  protected abstract buildResourceForm(): void

}
