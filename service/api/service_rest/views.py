from django.shortcuts import render
from .models import Appointment, Technician, AutomobileVO
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from django.http import JsonResponse

# Create your views here.

class AutomobileVoEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "name",
        "import_href"
    ]

class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id"
    ]

class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer",
        "date_time",
        "reason",
        "technician",

    ]
    encoders = {
        "technician": TechnicianListEncoder(),
    }
    def get_extra_data(self, o):
        return {"status": o.status.name}


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder =TechnicianListEncoder,
            safe= False,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe = False,
        )
