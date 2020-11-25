from django.shortcuts import render
from .models import AnnLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'annLab/labHome.html',)

def experiment1(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'annLab/exp1.html', context=data)

def experiment2(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'annLab/exp2.html' , data)

def experiment3(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'annLab/exp3.html' , data)

def experiment4(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'annLab/exp4.html' , data)

def experiment5(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'annLab/exp5.html' , data)

def experiment6(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'annLab/exp6.html' , data)

def experiment7(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'annLab/exp7.html' , data)

def experiment8(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'annLab/exp8.html' , data)

def experiment9(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'annLab/exp9.html' , data)

def experiment10(request):
    result = AnnLabQuizes.objects.filter(experimentNO = "experiment10")
    data ={'Exams': result}
    return render(request,'annLab/exp10.html' , data)

