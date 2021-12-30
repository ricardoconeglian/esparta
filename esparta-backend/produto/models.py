from django.db import models

class CadastroProduto(models.Model):
    codigo_sap_produto = models.IntegerField(unique=True)
    nome_produto = models.CharField(max_length= 150, blank=True, null=True)
    descricao_produto = models.TextField(max_length=300, blank=True)
    utilizacao = models.CharField(max_length=100, blank=True, null=True)   
   

    class Meta:
        verbose_name = 'Cadastro de Produto'
        verbose_name_plural = 'Cadastro de Produtos'
        

    def __str__(self):
        return self.nome_produto
   