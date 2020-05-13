from .views import DonateView, DonateDetail
from django.urls import path, include

urlpatterns = [
    path('<int:pk>/', DonateView.as_view()),
    path('', DonateDetail.as_view()),
]
