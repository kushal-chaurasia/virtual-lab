from django.shortcuts import render
from .models import PhpLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'phpLab/labHome.html',)

def experiment1(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'phpLab/exp1.html', context=data)

def experiment2(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'phpLab/exp2.html' , data)

def experiment3(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'phpLab/exp3.html' , data)

def experiment4(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'phpLab/exp4.html' , data)

def experiment5(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'phpLab/exp5.html' , data)

def experiment6(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'phpLab/exp6.html' , data)

def experiment7(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'phpLab/exp7.html' , data)

def experiment8(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'phpLab/exp8.html' , data)

def experiment9(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'phpLab/exp9.html' , data)
def experiment10(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment10")
    data ={'Exams': result}
    return render(request,'phpLab/exp10.html', context=data)

def experiment11(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment11")
    data ={'Exams': result}
    return render(request,'phpLab/exp11.html' , data)

def experiment12(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment12")
    data ={'Exams': result}
    return render(request,'phpLab/exp12.html' , data)

def experiment13(request):
    result = PhpLabQuizes.objects.filter(experimentNO = "experiment13")
    data ={'Exams': result}
    return render(request,'phpLab/exp13.html' , data)