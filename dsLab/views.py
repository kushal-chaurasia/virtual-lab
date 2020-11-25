from django.shortcuts import render
from .models import DsLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'dsLab/labHome.html',)

def experiment1(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'dsLab/exp1.html', context=data)

def experiment2(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'dsLab/exp2.html' , data )

def experiment3(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'dsLab/exp3.html' , data)

def experiment4(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'dsLab/exp4.html' , data)

def experiment5(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'dsLab/exp5.html' , data)

def experiment6(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'dsLab/exp6.html' , data)

def experiment7(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'dsLab/exp7.html' , data)

def experiment8(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'dsLab/exp8.html' , data)

def experiment9(request):
    result = DsLabQuizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'dsLab/exp9.html'  , data)

