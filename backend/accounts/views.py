from rest_framework import  generics, permissions
from .models import Profile
from .serializers import ProfileSerializer
from .permissions import IsOwnerOrNothing

class ProfileList(generics.CreateAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

class ProfileDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (permissions.IsAdminUser,)
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
