from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name="index"),
    path('mechanical', views.mechacnical, name="mechanical"),
    path('civil', views.civil, name="civil"),
    path('electrical', views.electrical, name="electrical"),
    path('electronic', views.electronic, name="electronic"),
    path('computer', views.computer, name="computer"),
    path('contactus', views.contactus, name="contactus"),
    path('aboutus', views.aboutus, name="aboutus"),
    path('stream', views.stream, name="stream"),
    path('computerOrganisationArchitecture/', include('computerOrganisationArchitecture.urls')),
    path('csoLab/', include('csoLab.urls')),
    path('heLab/', include('heLab.urls')),
    path('dsLab/',include('dsLab.urls')),
    path('annLab/',include('annLab.urls')),
    path('beLab/',include('beLab.urls')),
    path('antLab/',include('antLab.urls')),
    path('seLab/',include('seLab.urls')),
    path('nlpLab/',include('nlpLab.urls')),
    path('cgLab/',include('cgLab.urls')),
    path('cg2lab/',include('cg2lab.urls')),
    path('cpLab/',include('cpLab.urls')),
    path('psLab/',include('psLab.urls')),
    path('phpLab/',include('phpLab.urls')),
    path('fcnLab/',include('fcnLab.urls')),
    path('cnsLab/',include('cnsLab.urls')),

]
