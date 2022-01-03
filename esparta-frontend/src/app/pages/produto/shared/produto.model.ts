import {BaseResourceModel} from '../../../shared/models/base-resource.model'

export class Produto extends BaseResourceModel{
  static Produto: Produto;

  constructor(
    public id?: number,
    public  codigo_sap_produto?: number,
    public nome_produto?: string,
    public descricao_produto?: string,
    public  utilizacao?: string

  ){
    super();
    }

  static fromJson(jsonData: any): Produto{
    return Object.assign(new Produto(), jsonData)
  }

}
