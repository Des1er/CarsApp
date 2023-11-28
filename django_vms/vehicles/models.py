from django.db import models
from datetime import datetime
from users.models import CustomUser

class Vehicle(models.Model):
    model = models.CharField('model', max_length=255, null=True, blank=True)
    year = models.IntegerField('year', null=True, blank=True)
    license_plate = models.CharField('license_plate', max_length=10, null=True, blank=True)
    seating_capacity = models.IntegerField('seating_capacity', null=True, blank=True)
    vin = models.CharField('vin', max_length=35, null=True, blank=True)
    #photo = models.ImageField('photo', null=True, blank=True)
    status = models.CharField('status', max_length= 55, null=True, blank=True)
    created_time = models.DateTimeField('created_time', default=datetime.now())

class Route(models.Model):
    origin = models.CharField('origin', max_length=255)
    destination = models.CharField('origin', max_length=255)
    start_time = models.DateTimeField('start_time', default=datetime.now())
    end_time = models.DateTimeField('end_time', null= True, blank=True)
    created_time = models.DateTimeField('created_time', default= datetime.now())
    status = models.CharField('status', max_length=50, null=True, blank=True)
    driver = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class FuelingService(models.Model):
    fuelAmount = models.CharField('origin', max_length=255)
    fuelType = models.CharField('origin', max_length=255)
    created_time = models.DateTimeField('created_time', default= datetime.now())
    gas_station = models.CharField('gas_station', max_length=255, null=True, blank=True)
    fueling_person = models.ForeignKey(CustomUser, on_delete=models.CASCADE)

class MaintenanceService(models.Model):
    maintenance_description = models.CharField('maintenance_description', max_length=255)
    maintenance_person = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
