from django.urls import path
from rest_framework.routers import SimpleRouter
from .views import CadastroProdutoViewSet

# Rotas padrão para a aplicação
router_produto = SimpleRouter()
router_produto.register('cadastro-produto', CadastroProdutoViewSet)


