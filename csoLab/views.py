from django.shortcuts import render
from django.http import HttpResponse
from .models import CsoLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'csoLab/csoLabHome.html',)

def experiment1(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'csoLab/exp1.html', context=data)

def experiment2(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'csoLab/exp2.html')

def experiment3(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'csoLab/exp3.html')

def experiment4(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'csoLab/exp4.html')

def experiment5(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'csoLab/exp5.html')

def experiment6(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'csoLab/exp6.html')

def experiment7(request):
    result = CsoLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'csoLab/exp7.html')




