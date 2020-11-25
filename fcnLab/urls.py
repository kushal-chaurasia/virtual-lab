from django.urls import path
from . import views

urlpatterns = [
  
    path('', views.fcnLab, name="fcnLab"),
    path('simulation', views.simulation, name="simulation"),
    
]