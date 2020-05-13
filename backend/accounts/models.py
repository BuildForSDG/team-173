from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    GENDER_CHOICES = (
        ('M','Male'),
        ('F','Female')
    )
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    location = models.CharField(max_length=140)  
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)  
    profile_picture = models.ImageField(upload_to='thumbpath', blank=True)

    def __unicode__(self):
        return 'Profile of user: {}'.format(self.user.username)

