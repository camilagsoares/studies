Criar codigo onde ao clicar em "Adicionar novo item" surja mais campos de descricao,numeroDUplicata,valor e vencimento e vá guardando em um outro array ainda dentro do itens. E que eu possa remover esses novos campos caso eu queira. Mas se for remover, que seja removido todos esses novos itens. RESPEITANDO A LOGICA QUE JA EXISTE

COmo devo enviar ao backend,exemplo:
{
"recebiveis": [
{
"dataEmissao": "2024-03-08T12:00:00Z",
"tipo": "NOTA_FISCAL_PRODUTO",
"numeroDocumento": "11122233344455566677106",
"tipoPagamento": "BOLETO",
"documentoFornecedor": "38475984375934",
"documentoAncora": "21384359843652",
"itens": [
{
"descricao": "teste",
"numeroDuplicata": 123,
"valor": 10.5,
"vencimento": "2025-03-08T00:00:00Z"
},
{
"descricao": "teste",
"numeroDuplicata": 123,
"valor": 10.5,
"vencimento": "2025-03-08T00:00:00Z"
}
]
}
]
}

OBS: RESPEITANDO COMO ESTÁ O HTML
-----------------------------------------------------
<div class="mt-2 px-5 pb-5">
  <div class="mt-3 flex flex-col p-5 card">
    <form class="px-4" [formGroup]="formulario">
      <div
        *ngFor="let linha of estruturaFormularioDescricao.linhas"
        [class]="linha.className"
      >
        <div *ngFor="let campo of linha.linha" [class]="campo.className">
          <app-input
            [type]="campo.type"
            [formControlName]="campo.formControlName"
            [placeholder]="campo.placeholder"
            [form]="formulario"
            [label]="campo.label"
            [options]="campo.options"
          ></app-input>
        </div>
      </div>
    </form>
    <div class="mt-8 mb-6">
      <a
        class="addRepresentante flex text-primary-color hover:text-primary-color-3"
        role="button"
        (click)="addNovoItem()"
      >
        <mat-icon class="-mt-1.5 iconAdd">add</mat-icon>
        <span class="ml-2 text-sm font-semibold"
          >{{ "Adicionar novo item" | translate }}</span
        >
      </a>
    </div>
  </div>
</div>
-------------criar-recebivel.component.ts

  criarRecebivel() {
    let item = {
      descricao: this.formulario.get('descricao')?.value,
      numeroDuplicata: this.formulario.get('numeroDuplicata')?.value,
      valor: this.formulario.get('valor')?.value,
      vencimento: this.formulario.get('vencimento')?.value,
    };

    this.itensRecebiveis.push(item);

    let recebivel = {
      recebiveis: [
        {
          dataEmissao: this.formulario.get('dataEmissao')?.value,
          tipo: this.formulario.get('tipo')?.value,
          numeroDocumento: this.formulario.get('numeroDocumento')?.value,
          tipoPagamento: this.formulario.get('tipoPagamento')?.value,
          documentoFornecedor: this.formulario.get('documentoFornecedor')
            ?.value,
          documentoAncora: this.formulario.get('documentoAncora')?.value,
          itens: this.itensRecebiveis,
        },
      ],
    };

    //
    console.log(recebivel);
    /**  this.taxasService.criarNovoRecebivel(recebivel).subscribe({
      next: async (data) => {},
      error: (err) => {
        console.error('Erro ao criar recebível:', err);
      },
    });  */
  }

  -----------------MODEL.TS

export const FormGroupCadastroNovoRecebivel: FormGroup = new FormGroup({ tipo:
new FormControl('', [Validators.required]), documentoAncora: new FormControl('',
[Validators.required]), documentoFornecedor: new FormControl('',
[Validators.required]), tipoPagamento: new FormControl('',
[Validators.required]), dataEmissao: new FormControl('', [Validators.required]),
numeroDocumento: new FormControl('', [Validators.required]), dataPagamento: new
FormControl('', [Validators.required]), statusDocumento: new FormControl('',
[Validators.required]), numeroDuplicata: new FormControl('',
Validators.required), descricao: new FormControl('', Validators.required),
valor: new FormControl('', Validators.required), vencimento: new FormControl('',
Validators.required), });