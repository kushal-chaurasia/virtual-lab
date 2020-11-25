from django.shortcuts import render
from .models import SeLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'seLab/labHome.html',)

def experiment1(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'seLab/exp1.html', context=data)

def experiment2(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'seLab/exp2.html' , data)

def experiment3(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'seLab/exp3.html' , data)

def experiment4(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'seLab/exp4.html' , data)

def experiment5(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'seLab/exp5.html' , data)

def experiment6(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'seLab/exp6.html' , data)

def experiment7(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'seLab/exp7.html' , data)

def experiment8(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'seLab/exp8.html' , data)

def experiment9(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'seLab/exp9.html' , data)

def experiment10(request):
    result = SeLabQuizes.objects.filter(experimentNO = "experiment10")
    data ={'Exams': result}
    return render(request,'seLab/exp10.html' , data)

