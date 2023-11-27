from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _



class CustomUser(AbstractUser):

    DRIVER = 'DR'
    ADMIN = 'AD'
    FUELER = 'FL'
    MAINTENANCE = 'MN'


    ROLE_TYPE_CHOICES = [
    (DRIVER, "Driver"),
    (ADMIN, "Admin"),
    (FUELER, "Fueler"),
    (MAINTENANCE, "Maintenance"),
    ]
    
    email = models.EmailField(_("email address"), unique=True)
    government_id = models.IntegerField("government_id", null=True, blank=True)
    firstname = models.CharField("firstname", max_length=10, null=True, blank=True)
    secondname = models.CharField("secondname", max_length=25, null=True, blank=True)
    phone_number = models.CharField(_("phone_number"), max_length=25, null=True, blank=True)
    photo = models.ImageField("photo", null=True, blank=True)
    role = models.CharField('role', choices=ROLE_TYPE_CHOICES, max_length=2, default=DRIVER)
    driving_license_id = models.IntegerField('driving_license_id', null=True, blank=True)


    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email