# fpages/views.py

from django.shortcuts import render

def home(request):
    # Здесь вы можете добавить код для обработки запроса и отображения главной страницы
    return render(request, 'flatpages/default.html')  # Пример: возвращает шаблон default.html из папки flatpages

def about(request):
    return render(request, 'flatpages/default.html')

def contact(request):
    return render(request, 'flatpages/contact.html')

def coinflip(request):
    return render(request, 'flatpages/coinflip.html')

def darklight(request):
    return render(request, 'flatpages/darklight.html')

def bgvideo(request):
    return render(request, 'flatpages/bgvideo.html')
def new_des(request):
    return render(request, 'flatpages/new_des.html')