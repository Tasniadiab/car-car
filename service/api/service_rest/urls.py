from django.urls import path
from .views import (
    api_list_technicians,
    api_show_technician,
    api_list_appointments,
    api_show_appointment,
    api_cancel_appointment,
    api_finish_appointment

)


urlpatterns = [
    path("technicians/", api_list_technicians, name="api_technicians"),
    path("technicians/<int:id>/", api_show_technician, name= "show_technician"),
    path("appointments/", api_list_appointments, name = "api_appointments"),
    path("appointments/<int:id>", api_show_appointment, name ="show_appointment"),
    path("appointments/<int:id>/cancel", api_cancel_appointment, name="cancel_appointment"),
    path("appointments/<int:id>/finish", api_finish_appointment, name="finish_appointment")
]
