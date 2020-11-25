from django.shortcuts import render
from .models import BeLabQuizes

# Create your views here.
def listofexperiment(request):
    return render(request,'beLab/labHome.html',)

def experiment1(request):
    return render(request,'beLab/exp1.html')

def experiment2(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'beLab/exp2.html' , data)

def experiment3(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'beLab/exp3.html' , data)

def experiment4(request):
    result =BeLabQuizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'beLab/exp4.html' , data)

def experiment5(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'beLab/exp5.html' , data)

def experiment6(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'beLab/exp6.html' , data)

def experiment7(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'beLab/exp7.html' , data)

def experiment8(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'beLab/exp8.html' , data)

def experiment9(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'beLab/exp9.html' , data)

def experiment10(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment10")
    data ={'Exams': result}
    return render(request,'beLab/exp10.html' , data)

def experiment11(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment11")
    data ={'Exams': result}
    return render(request,'beLab/exp11.html', context=data)

def experiment12(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment12")
    data ={'Exams': result}
    return render(request,'beLab/exp12.html' , data)

def experiment13(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment13")
    data ={'Exams': result}
    return render(request,'beLab/exp13.html' , data)

def experiment14(request):
    result =BeLabQuizes.objects.filter(experimentNO = "experiment14")
    data ={'Exams': result}
    return render(request,'beLab/exp14.html' , data)

def experiment15(request):
    result = BeLabQuizes.objects.filter(experimentNO = "experiment15")
    data ={'Exams': result}
    return render(request,'beLab/exp15.html' , data)

def ohmsLaw1(request):
    return render(request , 'beLab/ohmslaw1.html')

def ohmsLaw2(request):
    return render(request , 'beLab/ohmslaw2.html')

def ohmsLaw3(request):
    return render(request , 'beLab/ohmslaw3.html')

def ohmsLaw4(request):
    return render(request , 'beLab/ohmslaw4.html')

def ohmsLaw5(request):
    return render(request , 'beLab/ohmslaw5.html')

def diode1(request):
    return render(request , 'beLab/diode1.html')

def diode2(request):
    return render(request , 'beLab/diode2.html')

def diode3(request):
    return render(request , 'beLab/diode3.html')

def diode4(request):
    return render(request , 'beLab/diode4.html')

def hwRectifier(request):
    return render (request, 'beLab/hwRectifier.html')

def fwRectifier(request):
    return render (request, 'beLab/fwRectifier.html')

def capacitiveFull(request):
    return render (request, 'beLab/capacitiveFull.html')

def capacitiveHalf(request):
    return render (request, 'beLab/capacitiveHalf.html')

def zdLoad(request):
    return render (request, 'beLab/zdLoad.html')

def zdLine(request):
    return render (request, 'beLab/zdLine.html')

def zdChar(request):
    return render (request, 'beLab/zdChar.html')