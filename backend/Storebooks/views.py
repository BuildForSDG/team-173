from .serializers import BookSerializer
from .models import  Books
from rest_framework import generics, permissions
from rest_framework import filters
from django_filters import AllValuesFilter, DateTimeFilter, NumberFilter

class BookList(generics.ListAPIView):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = Books.objects.all()
    serializer_class = BookSerializer
    filter_fields = (
        'subject',
        'school_grade',
    )
    search_fields = (
        '^subject',
        'school_grade',
    )
    ordering_fields = (
        'subject',
        '^number_of_books',
    )

class BookDetail(generics.RetrieveAPIView):
    queryset = Books.objects.all()
    serializer_class = BookSerializer

