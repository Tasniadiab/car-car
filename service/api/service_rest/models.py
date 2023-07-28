from django.db import models
from django.urls import reverse
from django.template.defaultfilters import date, time


# Create your models here.
class AutomobileVO(models.Model):
    import_href = models.URLField(max_length = 200, blank = True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

class Technician(models.Model):
    first_name = models.CharField(max_length = 100)
    last_name =  models.CharField(max_length = 120)
    employee_id = models.CharField(max_length = 100, unique=True)

    def get_api_url(self):
        return reverse("show_technician", kwargs={"id": self.id})

    def __str__(self):
        return self.first_name

    @property
    def name(self):
        return  f"{self.first_name} {self.last_name}"

    class Meta:
        ordering = ("first_name",)


class Appointment(models.Model):
    date_time = models.DateTimeField(null = True, blank = True)
    reason = models.TextField()
    vin = models.CharField(max_length= 200, unique= True)
    vip = models.BooleanField(default=False)
    customer = models.CharField(max_length = 200)
    status =  models.CharField(max_length =100)
    technician = models.ForeignKey(
        Technician,
        related_name= "appointment",
        on_delete = models.CASCADE,
    )

    def get_api_url(self):
        return reverse("show_appointment", kwargs={"id": self.id})

    def __str__(self):
        return self.vin

    @property
    def date(self):
        return  date(self.date_time, 'm-d-Y')

    @property
    def time(self):
        return  date(self.date_time, 'h:i')

    class Meta:
        ordering = ("date_time",)
