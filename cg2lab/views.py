from django.shortcuts import render
from .models import Cg2LabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'cg2lab/labHome.html',)

def experiment1(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'cg2lab/exp1.html', context=data)

def experiment2(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'cg2lab/exp2.html' , data)

def experiment3(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'cg2lab/exp3.html' , data)

def experiment4(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'cg2lab/exp4.html' , data)

def experiment5(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'cg2lab/exp5.html' , data)

def experiment6(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'cg2lab/exp6.html' , data)

def experiment7(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'cg2lab/exp7.html' , data)

def experiment8(request):
    result = Cg2LabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'cg2lab/exp8.html' , data)
