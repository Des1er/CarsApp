from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    path("login", views.login),
    path("signup", views.signup),
    path("test_token", views.test_token),
    path("", views.UserList.as_view()),
    path("<int:pk>", views.UserDetail.as_view()),
    path("drivers", views.DriverList.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)