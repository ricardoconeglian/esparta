from django.db import models

class CadastroInsumo(models.Model):
    codigo_sap_insumo = models.IntegerField(unique=True)
    descricao_insumo = models.CharField(max_length=150)
    
