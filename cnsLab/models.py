from django.db import models

# Create your models here.
class CnsQuiz(models.Model):
    question = models.CharField(max_length=400)
    option1 = models.CharField(max_length=400)
    option2 = models.CharField(max_length=400, default="")
    option3 = models.CharField(max_length=400,default="")
    option4 = models.CharField(max_length=400, default="")
    correctans = models.CharField(max_length=400, default="")


    def __str__(self):
        return self.question