from django.shortcuts import render
from .models import FncQuiz

# Create your views here.

def fcnLab(request):
    result = FncQuiz.objects.all()
    data ={'Exams': result}
    return render(request, 'fcnLab/index.html' , data)

def simulation(request):
    return render(request , 'fcnLab/simulation.html')