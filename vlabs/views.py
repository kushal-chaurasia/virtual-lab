from django.http import HttpResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')


def mechacnical(request):
    return render(request,'mechanical.html')


def civil(request):
    return render(request,'civil.html')


def electrical(request):
    return render(request,'electrical.html')


def electronic(request):
    return render(request,'electronic.html')


def computer(request):
    return render(request,'computer.html')


def contactus(request):
    return render(request,'contactus.html')


def aboutus(request):
    return render(request,'aboutus.html')


def stream(request):
    return render(request,'stream.html')