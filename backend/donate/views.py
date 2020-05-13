from .models import Donations
from .serializers import DonateSerializer
from rest_framework import generics, permissions

class DonateView(generics.ListAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Donations.objects.all()
    serializer_class = DonateSerializer

class DonateDetail(generics.CreateAPIView):
    permission_classes = (permissions.AllowAny,)
    queryset = Donations.objects.all()
    serializer_class = DonateSerializer

