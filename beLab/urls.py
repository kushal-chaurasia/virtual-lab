from django.urls import path
from . import views

urlpatterns = [

    path('', views.listofexperiment, name="listofexperiment"),
    path('experiment1', views.experiment1, name="experiment1"),
    path('experiment2', views.experiment2, name="experiment2"),
    path('experiment3', views.experiment3, name="experiment3"),
    path('experiment4', views.experiment4, name="experiment4"),
    path('ohmsLaw1', views.ohmsLaw1, name="ohmsLaw1"),
    path('ohmsLaw2', views.ohmsLaw2, name="ohmsLaw2"),
    path('ohmsLaw3', views.ohmsLaw3, name="ohmsLaw3"),
    path('ohmsLaw4', views.ohmsLaw4, name="ohmsLaw4"),
    path('ohmsLaw5', views.ohmsLaw5, name="ohmsLaw5"),
    path('experiment5', views.experiment5, name="experiment5"),
    path('experiment6', views.experiment6, name="experiment6"),
    path('experiment7', views.experiment7, name="experiment7"),
    path('experiment8', views.experiment8, name="experiment8"),
    path('experiment9', views.experiment9, name="experiment9"),
    path('experiment10', views.experiment10, name="experiment10"),
    path('experiment11', views.experiment11, name="experiment11"),
    path('experiment12', views.experiment12, name="experiment12"),
    path('experiment13', views.experiment13, name="experiment13"),
    path('experiment14', views.experiment14, name="experiment14"),
    path('experiment15', views.experiment15, name="experiment15"),
    path('diode1', views.diode1, name="diode1"),
    path('diode2', views.diode2, name="diode2"),
    path('diode3', views.diode3, name="diode3"),
    path('diode4', views.diode4, name="diode4"),
    path('hwRectifier', views.hwRectifier, name="hwRectifier"),
    path('fwRectifier', views.fwRectifier, name="fwRectifier"),
    path('capacitiveFull', views.capacitiveFull, name="capacitiveFull"),
    path('capacitiveHalf', views.capacitiveHalf, name="capacitiveHalf"),
    path('zdLoad', views.zdLoad, name="zdLoad"),
    path('zdLine', views.zdLine, name="zdLine"),
    path('zdChar', views.zdChar, name="zdChar"),



]
