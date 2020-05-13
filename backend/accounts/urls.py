from django.urls import path
from .views import ProfileList, ProfileDetail

urlpatterns = [
    path('<int:pk>', ProfileDetail.as_view()),
    path('', ProfileList.as_view()),
]
