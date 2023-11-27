from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("vehicles", views.VehicleList.as_view()),
    path("vehicles/<int:pk>", views.VehicleDetail.as_view()),
    path("tasks", views.RouteList.as_view()),
    path("tasks/<int:pk>", views.RouteDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)