from django.shortcuts import render
from .models import quizes
# from .forms import FeedbackForm

# Create your views here.

def listofexperiment(request):
    return render(request,'computerOrganisationArchitecture/listOfExperiment.html',)

# ripple carry adder view
def rad(request):
    result = quizes.objects.filter(experimentNO = "experiment1")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp1theory.html', context=data)

def claa(request):
    result = quizes.objects.filter(experimentNO = "experiment2")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp2.html', context=data)

def wta(request):
    result = quizes.objects.filter(experimentNO = "experiment3")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp3.html', context=data)

def soff(request):
    result = quizes.objects.filter(experimentNO = "experiment4")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp4.html', context=data)

def rAndc(request):
    result = quizes.objects.filter(experimentNO = "experiment5")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp5.html', context=data)

def combMulti(request):
    result = quizes.objects.filter(experimentNO = "experiment6")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp6.html', context=data)

def boothMulti(request):
    result = quizes.objects.filter(experimentNO = "experiment7")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp7.html', context=data)

def alu(request):
    result = quizes.objects.filter(experimentNO = "experiment8")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp8.html', context=data) 

def md(request):
    result = quizes.objects.filter(experimentNO = "experiment9")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp9.html', context=data) 

def acd(request):
    result = quizes.objects.filter(experimentNO = "experiment10")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp10.html', context=data) 

def dmcd(request):
    result = quizes.objects.filter(experimentNO = "experiment11")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp11.html', context=data) 
def cpud(request):
    result = quizes.objects.filter(experimentNO = "experiment12")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp12.html', context=data) 

def kMap(request):
    result = quizes.objects.filter(experimentNO = "experiment13")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp13.html', context=data) 

def qMcA(request):
    result = quizes.objects.filter(experimentNO = "experiment14")
    data ={'Exams': result}
    return render(request,'computerOrganisationArchitecture/exp14.html', context=data) 

 
def simulator1(request):
    return render(request,'computerOrganisationArchitecture/simulator1.html' )


def simulator2(request):
    return render(request,'computerOrganisationArchitecture/simulator2.html' )