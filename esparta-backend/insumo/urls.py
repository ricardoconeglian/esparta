from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CadastroInsumoViewSet

# Rotas padrão para a aplicação
router_insumo = SimpleRouter()
router_insumo.register('cadastro-insumo', CadastroInsumoViewSet)