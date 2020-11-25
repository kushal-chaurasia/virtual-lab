from django.shortcuts import render
from django.http import HttpResponse
from .models import heLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'heLab/LabHome.html',)

def experiment1(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'heLab/exp1.html', context=data)

def experiment2(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'heLab/exp2.html')

def experiment3(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'heLab/exp3.html')

def experiment4(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'heLab/exp4.html')

def experiment5(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'heLab/exp5.html')

def experiment6(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'heLab/exp6.html')

def experiment7(request):
    result = heLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'heLab/exp7.html')

def simulation(request):
    return render(request , 'heLab/simulation.html')

