from django.db import models

# Create your models here.
class Contactus(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=250 , default="")
    phone = models.CharField(max_length=13, default="")
    email = models.CharField(max_length=100, default="")
    time = models.DateTimeField(auto_now=True,  blank=True )
    message = models.TextField()

    def __str__(self):
        return "Message from" + self.email
