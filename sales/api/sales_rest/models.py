from django.db import models
from django.urls import reverse
# Create your models here.


class AutomobileVO(models.Model):
    color = models.CharField(max_length=50, null=True)
    year = models.PositiveSmallIntegerField(null=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)
    import_href = models.URLField(
        max_length=200,
        null=True,
        unique=True,
        blank=True
    )

    def __str__(self):
        return self.vin


class Salesperson(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    employee_id = models.PositiveIntegerField(unique=True)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'


class Customer(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.CharField(max_length=200)
    phone_number = models.CharField(max_length=12)

    def __str__(self):
        return f'{self.first_name} {self.last_name}'

    def get_api_url(self):
        return reverse("api_show_customer", kwargs={"pk": self.pk})


class Sale(models.Model):

    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="Sale",
        on_delete=models.CASCADE,
    )

    salesperson = models.ForeignKey(
        Salesperson,
        related_name="Sale",
        on_delete=models.CASCADE,
    )

    customer = models.ForeignKey(
        Customer,
        related_name="Sale",
        on_delete=models.CASCADE,
    )

    price = models.PositiveIntegerField()

    def __str__(self):
        return f'{self.salesperson.first_name} {self.salesperson.last_name}'

    def get_api_url(self):
        return reverse("api_show_sales", kwargs={"pk": self.pk})
