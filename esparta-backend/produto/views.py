from rest_framework import viewsets
from .models import CadastroProduto
from .serializers import CadastroProdutoSerializer

class CadastroProdutoViewSet(viewsets.ModelViewSet):
    queryset = CadastroProduto.objects.all()
    serializer_class = CadastroProdutoSerializer