from rest_framework import  serializers
from donate.models import Donations

class DonateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donations
        fields = '__all__'
        # ('phone_number','email','description')