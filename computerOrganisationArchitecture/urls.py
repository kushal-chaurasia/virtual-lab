# from django.contrib import admin
from django.urls import path
from . import views

app_name = 'form'
urlpatterns = [
    # path('admin/', admin.site.urls),
    
    path('', views.listofexperiment, name="home"),
    path('rad', views.rad, name="experiment1"),
    path('claa', views.claa, name="experiment2"),
    path('wta', views.wta, name="experiment3"),
    path('soff', views.soff, name="experiment4"),
    path('rAndc', views.rAndc, name="experiment5"),
    path('combMulti', views.combMulti, name="experiment6"),
    path('boothMulti', views.boothMulti, name="experiment7"),
    path('alu', views.alu, name="experiment8"),
    path('md', views.md, name="experiment9"),
    path('acd', views.acd, name="experiment10"),
    path('dmcd', views.dmcd, name="experiment11"),
    path('cpud', views.cpud, name="experiment12"),
    path('kMap', views.kMap, name="experiment13"),
    path('qMcA', views.qMcA, name="experiment14"),
    path('simulator1', views.simulator1, name="simulator1"),
    path('simulator2', views.simulator2, name="simulator2"),
  
]
