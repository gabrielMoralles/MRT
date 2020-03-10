// export interface Order {
    
//     id_OrdemServico:number,
//     dt_servico:Date,
//     dt_PagamentoOS:Date,
//     valor_Servico:number,
//     descricao:string,
//     forma_PagamentoOS:string,
//     id_ProdutoOS:number,
//     id_ClienteOS:number,
//     nome_Cliente:string

// }
export interface Order {
    
    id:number,
    cliente:string;
    valor:number;
    desc:string;
    form_pag:string
    status:number;
    data:Date;
    data_pag:Date;
}