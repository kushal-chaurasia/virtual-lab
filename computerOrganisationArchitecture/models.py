from django.db import models

# Create your models here.
class quizes(models.Model):
    question = models.CharField(max_length=400)
    option1 = models.CharField(max_length=400)
    option2 = models.CharField(max_length=400, default="")
    option3 = models.CharField(max_length=400,default="")
    option4 = models.CharField(max_length=400, default="")
    correctans = models.CharField(max_length=400, default="")
    experimentNO = models.CharField(max_length=50, default="")
    # image = models.ImageField(upload_to = "computerOrganisationArchitecture/images", default="" )
    def __str__(self):
        return self.question

    

class ExpName(models.Model):
    experiment_name = models.CharField(max_length=200)

    def __str__(self):
        return self.experiment_name


    
class Feedback(models.Model):
    student_name = models.CharField(max_length=120)
    email = models.EmailField()
    experiment_name = models.ForeignKey(ExpName, on_delete=models.CASCADE)
    details = models.TextField()
    satisfied = models.BooleanField()
    date = models.DateField(auto_now_add=True)
 
    def __str__(self):
        return self.student_name
