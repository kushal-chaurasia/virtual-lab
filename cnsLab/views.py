from django.shortcuts import render
from .models import CnsQuiz
from django.http import HttpResponse
import collections

# Create your views here.

def cnsLab(request):
    result = CnsQuiz.objects.all()
    data ={'Exams': result}
    return render(request, 'cnsLab/index.html' , data)

def encrpyText(request):
    encrptionText = (request.GET.get('text','default'))
    keyvalue = (request.GET.get('keyvalue', 'default'))
    cipherText = (request.GET.get('cipherText', 'default'))
    
    convertedInput = []
    convertedOutput = []
    if keyvalue == "3":
        for char in encrptionText:
            convertedInput.append(ord(char))

        finalInput = [ x + 3 for x in convertedInput]
        
        for char in cipherText:
            convertedOutput.append(ord(char))
        params ={'cipherText':cipherText, 'encrptionText':encrptionText}
        if collections.Counter(finalInput) == collections.Counter(convertedOutput):
            return render(request, 'cnsLab/result.html' , params )
        
        else:
            message = " You tried well but your anser is incoorect"
            params ={'cipherText':cipherText, 'encrptionText':encrptionText , 'message': message}
            return render(request, 'cnsLab/result.html' , params )

    else:
         return HttpResponse("failure")   

   



