from django.contrib import admin
from .models import CadastroProduto

# usuario: admin   
# senha: admin

@admin.register(CadastroProduto)
class CadastroProdutoAdmin(admin.ModelAdmin):   
    list_display = ('codigo_sap_produto', 'nome_produto')
  

