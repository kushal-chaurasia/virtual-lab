from django.shortcuts import render
from .models import Contactus

# Create your views here.

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        phone = request.POST['phone']
        email = request.POST['email']
        message = request.POST['message']
        contactus = Contactus(name=name, phone=phone, email= email, message = message)
        contactus.save()
    return render(request ,"contactus.html")
