from django.shortcuts import render
from .models import CpLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'cpLab/labHome.html',)

def experiment1(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'cpLab/exp1.html', context=data)

def experiment2(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'cpLab/exp2.html' , data)

def experiment3(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'cpLab/exp3.html' , data)

def experiment4(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'cpLab/exp4.html' , data)

def experiment5(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'cpLab/exp5.html' , data)

def experiment6(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'cpLab/exp6.html' , data)

def experiment7(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'cpLab/exp7.html' , data)

def experiment8(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'cpLab/exp8.html' , data)

def experiment9(request):
    result = CpLabQuizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'cpLab/exp9.html' , data)
