from django.urls import path
from . import views

urlpatterns = [
  
    path('', views.cnsLab, name="cnsLab"),
    path('encrpyText', views.encrpyText, name = "encrpyText"),

    
    
]