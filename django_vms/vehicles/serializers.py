from rest_framework import serializers
from .models import Vehicle, FuelingService, MaintenanceService, Route

class VehicleSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Vehicle
        fields = '__all__'


class RouteSerializer(serializers.ModelSerializer):
    class Meta(object):
        model = Route
        fields = '__all__'