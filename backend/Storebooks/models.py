from django.db import models
from django.contrib.auth.models import User

class Books(models.Model):
    SUBJECT_CHOICES =(
        ('ENG','English'),
        ('MATH','Mathematics'),
        ('KISW','Kiswahili'),
        ('SST','Social Studies'),
        ('SCI','Science'),
        ('CRE','Christian Religious Studies'),
        ('ISSD','Islamic Studies'),
        ('HIS','History'),
        ('GRHY','Geography'),
        ('CHEM','Chemistry'),
        ('BIO','Biology'),
        ('PHY','Physics'),
        ('MSC','Music'),
        ('BSS','Business'),
        ('AGRI','Agriculture'),
        ('WWK','Wood-work'),
        ('DD','Drawing & Design'),
        ('AD','Art & Design'),
        ('TD','Technical Drawing'),
        ('PM','Power Mechanics'),
        ('COMP','Computer Studies'),
        ('SETB','Setbooks/Novels/Revision')
    )

    GRADE_CHOICES = (
        ('BBC',' Baby class'),
        ('GRD1','Grade 1'),
        ('GRD2','Grade 2'),
        ('GRD3','Grade 3'),
        ('GRD4','Grade 4'),
        ('GRD5','Grade 5'),
        ('GRD6','Grade 6'),
        ('GRD7','Grade 7'),
        ('GRD8','Grade 8'),
        ('GRD9','Grade 9'),
        ('GRD10','Grade 10'),
        ('GRD11','Grade 11'),
        ('GRD12','Grade 12'),
        ('GEN','General')
    )
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    number_of_books = models.IntegerField(blank=False)
    subject = models.CharField(
        max_length=4,
        choices=SUBJECT_CHOICES
    )
    school_grade = models.CharField(
        max_length=5,
        choices=GRADE_CHOICES
    )
