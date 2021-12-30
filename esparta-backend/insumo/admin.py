from django.contrib import admin
from .models import CadastroInsumo

@admin.register(CadastroInsumo)
class CadastroInsumoAdmin(admin.ModelAdmin):
    list_display = ('codigo_sap_insumo', 'descricao_insumo')
