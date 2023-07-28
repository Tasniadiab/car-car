from django.shortcuts import render
from .models import Appointment, Technician, AutomobileVO
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
import json
from django.http import JsonResponse
from datetime import datetime

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
        "name",
        "employee_id",
        "id",
    ]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "vin",
        "customer",
        "date",
        "time",
        "date_time",
        "reason",
        "vip",
        "status",
        "technician",
        "id",

    ]
    encoders = {
        "technician": TechnicianListEncoder(),
    }



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


@require_http_methods(["GET","DELETE"])
def api_show_technician(request, id):
    if request.method == "GET":
        technician = Technician.objects.get(id=id)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id = id).delete()
        return JsonResponse({"deleted": count > 0})


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder =AppointmentEncoder,
            safe= False,
        )
    elif request.method == "POST":
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Technician id"},
                status=400,
            )

        vin = content["vin"]
        if AutomobileVO.objects.filter(vin=vin):
            content["vip"] = True
        else:
            content["vip"] = False
        appointment = Appointment.objects.create(**content)

        content = {"status" : "created"}
        status = "status"
        setattr(appointment, status, content[status])
        appointment.save()
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe = False,
        )


@require_http_methods(["GET","DELETE", "PUT"])
def api_show_appointment(request, id):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )
    elif request.method == "DELETE":
        try:
            count, _ = Appointment.objects.filter(id = id).delete()
            return JsonResponse({"deleted": count > 0})
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Appointment"},
                status = 400,
            )
    else:
        content = json.loads(request.body)
        Appointment.objects.filter(id=id).update(**content)
        appointment = Appointment.objects.get(id=id)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["PUT"])
def api_cancel_appointment(request, id):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=id)
            content = {"status" : "canceled"}

            status = "status"
            setattr(appointment, status, content[status])
            appointment.save()


            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "appointment doesn't exist"},
                status = 400
            )


@require_http_methods(["PUT"])
def api_finish_appointment(request, id):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=id)
            content = {"status" : "finished"}

            status = "status"
            setattr(appointment, status, content[status])
            appointment.save()


            return JsonResponse(
                appointment,
                encoder=AppointmentEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "appointment doesn't exist"},
                status = 400
            )
