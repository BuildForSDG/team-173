from .models import Books
from rest_framework import serializers

class BookSerializer(serializers.ModelSerializer):
    subject = serializers.ChoiceField(
        choices=Books.SUBJECT_CHOICES
    )
    school_grade = serializers.ChoiceField(
        choices=Books.GRADE_CHOICES
    )

    class Meta:
        model = Books
        fields = '__all__'

        #('user','number_of_books','subject','school_grade')