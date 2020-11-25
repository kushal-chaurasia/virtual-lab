from django.urls import path
from . import views

urlpatterns = [
  
    path('', views.listofexperiment, name="listofexperiment"),
    path('experiment1', views.experiment1, name="experiment1"),
    path('experiment2', views.experiment2, name="experiment2"),
    path('experiment3', views.experiment3, name="experiment3"),
    path('experiment4', views.experiment4, name="experiment4"),
    path('experiment5', views.experiment5, name="experiment5"),
    path('experiment6', views.experiment6, name="experiment6"),
    path('experiment7', views.experiment7, name="experiment7"),
    path('experiment8', views.experiment8, name="experiment8"),
    path('experiment9', views.experiment9, name="experiment9"),
    path('experiment10', views.experiment10, name="experiment10"),
    path('experiment11', views.experiment11, name="experiment11"),
    path('experiment12', views.experiment12, name="experiment12"),
    path('experiment13', views.experiment13, name="experiment13"),

]