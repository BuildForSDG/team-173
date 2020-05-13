from django.db import models

class Donations(models.Model):
    first_name = models.CharField(max_length=100, default='TY')
    last_name = models.CharField(max_length=100, default='TY')
    phone_number = models.IntegerField()
    email = models.EmailField()
    description = models.TextField()


