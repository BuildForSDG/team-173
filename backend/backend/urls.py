"""backend URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from  rest_framework.schemas import get_schema_view

API_TITLE = 'Give2Get'
API_DESCRIPTION = 'A web Api for sharing books'
schema_view = get_schema_view(title=API_TITLE)

urlpatterns =  [
    path('admin/', admin.site.urls),
    path('donate/', include('donate.urls')),
    path('profile/', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')),
    path('books/', include('Storebooks.urls')),
    path('', include('rest_auth.urls')),
    path('registration/', 
    include('rest_auth.registration.urls')),
    path('', include('Storebooks.urls')),
    path('docs/', include_docs_urls(title=API_TITLE, 
    description=API_DESCRIPTION)),
    path('schema/', schema_view),
]
