from django.conf.urls import url
#from . import views
from pageB.views import Parse_arg,Ajax_func
urlpatterns = [
    url(r'^$',Parse_arg,name='hello'),
    url(r'^ajax_sum',Ajax_func,name='ajax_func')
]