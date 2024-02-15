"""
URL configuration for dcg project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
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

from django.urls import path
from fpages import views
from django.contrib import admin

urlpatterns = [
    path('', views.home, name='home'),  # Главная страница

    path('about/', views.about, name='about'),  # Страница "О нас"
    path('contact/', views.contact, name='contact'),  # Страница "Контакты"

    path('coinflip/', views.coinflip, name='coinflip'),
    path('darklight/', views.darklight, name='darklight'),
    path('bgvideo/', views.bgvideo, name='bgvideo'),
    path('new_des/', views.new_des, name='new_des'),

    path('admin/', admin.site.urls),  #
]
