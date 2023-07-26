from django.db import models
from django.urls import reverse

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




class Status(models.Model):
    id = models.PositiveSmallIntegerField(primary_key=True)
    name = models.CharField(max_length=10, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("id",)
        verbose_name_plural = "statuses"


class Appointment(models.Model):

    @classmethod
    def create(cls, **kwargs):
        kwargs["status"] = Status.objects.get(name="Created")
        appointment = cls(**kwargs)
        appointment.save()
        return appointment

    date_time = models.DateTimeField(null = True, blank = True)
    reason = models.TextField()
    vin = models.CharField(max_length= 200, unique= True)
    customer = models.CharField(max_length = 200)
    status =models.ForeignKey(
        Status,
        related_name="appointments",
        on_delete=models.PROTECT,
    )
    technician = models.ForeignKey(
        Technician,
        related_name= "appointment",
        on_delete = models.CASCADE,
    )

    def cancelled(self):
        status = Status.objects.get(name="Cancelled")
        self.status = status
        self.save()

    def finish(self):
        status = Status.objects.get(name="Finished")
        self.status = status
        self.save()

    def get_api_url(self):
        return reverse("show_appointment", kwargs={"id": self.id})

    def __str__(self):
        return self.vin

    @property
    def date(self):
        return  self.date_time.strftime('%m/%d/%Y')

    @property
    def time(self):
        return  self.date_time.strftime('%H:%M')

    class Meta:
        ordering = ("date_time",)
