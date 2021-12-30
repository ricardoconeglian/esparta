from rest_framework import serializers
from .models import CadastroProduto

class CadastroProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = CadastroProduto
        fields = (
            'id',
            'codigo_sap_produto',
            'nome_produto',
            'descricao_produto',
            'utilizacao'
        )