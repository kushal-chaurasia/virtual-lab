from django.shortcuts import render

# Create your views here.


def listofexperiment(request):
    return render(request, 'nlpLab/labHome.html',)


def experiment1(request):
    return render(request, 'nlpLab/exp1.html')


def experiment2(request):
    return render(request, 'nlpLab/exp2.html')


def experiment3(request):
    return render(request, 'nlpLab/exp3.html')


def experiment4(request):
    return render(request, 'nlpLab/exp4.html')


def experiment5(request):
    return render(request, 'nlpLab/exp5.html')


def experiment6(request):
    return render(request, 'nlpLab/exp6.html')


def experiment7(request):
    return render(request, 'nlpLab/exp7.html')


def experiment8(request):
    return render(request, 'nlpLab/exp8.html')


def experiment9(request):
    return render(request, 'nlpLab/exp9.html')


def experiment10(request):
    return render(request, 'nlpLab/exp10.html')
