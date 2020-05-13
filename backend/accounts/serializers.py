from rest_framework import serializers
from .models import Profile
from django.contrib.auth.models import User

class ProfileSerializer(serializers.ModelSerializer):
    gender = serializers.ChoiceField(choices=Profile.GENDER_CHOICES)
    class Meta:
        model = Profile
        fields = '__all__'
        #('first_name', 'last_name', 'gender', 'location', 'profile_picture')

class UserSerializer(serializers.ModelSerializer):
    profile = ProfileSerializer(required=True)
    class Meta:
        model = User
        fields = '__all__'