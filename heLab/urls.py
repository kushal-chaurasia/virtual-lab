from django.urls import path
from . import views

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', views.listofexperiment, name="listofexperiment"),
    path('experiment1', views.experiment1, name="experiment1"),
    path('simulator1', views.simulator1, name="simulator1"),
    path('experiment2', views.experiment2, name="experiment2"),
    path('simulator2', views.simulator2, name="simulator2"),
    path('experiment3', views.experiment3, name="experiment3"),
    path('simulator3', views.simulator3, name="simulator3"),
    path('experiment4', views.experiment4, name="experiment4"),
    path('simulator4', views.simulator4, name="simulator4"),
    path('experiment5', views.experiment5, name="experiment5"),
    path('simulator5', views.simulator5, name="simulator5"),
    path('experiment6', views.experiment6, name="experiment6"),
    path('experiment7', views.experiment7, name="experiment7"),
    path('simulation', views.simulation, name="simulation"),
]