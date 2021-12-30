from rest_framework import serializers
from .models import CadastroInsumo

class CadastroInsumoSerializer(serializers.ModelSerializer):
    class Meta:
        model =  CadastroInsumo
        fields = (
            'id',
            'codigo_sap_insumo',
            'descricao_insumo',
        )