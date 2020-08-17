from django.shortcuts import render
from django.http import HttpResponse,JsonResponse

from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def Parse_arg(request):
    if request.GET:
        name = request.GET.get('id')
        print(name)

    if request.POST:
        name = request.POST.get('Name')
        gender = request.POST.get('gender')
        if gender is None:
            gender = 'female'


        num1 = request.POST.get('arg01')
        num2 = request.POST.get('arg02')
        result = int(num1) + int(num2)
    return render(request,'pageB.html',locals())


def Ajax_func(request):
    num1 = request.POST.get('arg1')
    num2 = request.POST.get('arg2')
    #answer = int(num1) + int(num2)
    #防呆示範
    status = 0
    answer = None
    if num1.isdigit() and num2.isdigit():
        if 10 <= int(num1) <= 50 and 10 <= int(num2) <= 50:
            answer = int(num1) + int(num2)
        else:
            status = 2 #超出範圍
    else:
        status = 1 #非數字
    return JsonResponse({'answer':answer,'status':status})