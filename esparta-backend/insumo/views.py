from rest_framework import viewsets
from .models import CadastroInsumo
from .serializers import CadastroInsumoSerializer

class CadastroInsumoViewSet(viewsets.ModelViewSet):
    queryset = CadastroInsumo.objects.all()
    serializer_class = CadastroInsumoSerializer