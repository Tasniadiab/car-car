from django.shortcuts import render
from .encoders import AutomobileVOEncoder, CustomerEncoder, SalespersonEncoder, SaleEncoder
from .models import AutomobileVO, Customer, Salesperson, Sale
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

# Create your views here.


@require_http_methods(["GET", "POST"])
def api_list_salesperson(request):
    if request.method == "GET":

        salespeople = Salesperson.objects.all()
        return JsonResponse(
            {"salespeople": salespeople},
            encoder=SalespersonEncoder
        )

    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.create(**content)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False
            )
        except:
            response = JsonResponse(
                {"Message": "Could not create a salesperson"}
            )

            response.status_code = 400
            return response


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_salesperson(request, pk):
    if request.method == "GET":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            salesperson = Salesperson.objects.get(id=pk)
            salesperson.delete()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response

    else:
        try:
            content = json.loads(request.body)
            salesperson = Salesperson.objects.get(id=pk)
            props = ["name", "employee_id"]
            for prop in props:
                if prop in content:
                    setattr(salesperson, prop, content[prop])
            salesperson.save()
            return JsonResponse(
                salesperson,
                encoder=SalespersonEncoder,
                safe=False,
            )
        except Salesperson.DoesNotExist:
            response = JsonResponse({"message": "Employee does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET", "POST"])
def api_list_customers(request):
    if request.method == "GET":
        customers = Customer.objects.all()
        return JsonResponse({
            "customers": customers},
            encoder=CustomerEncoder,
        )

    else:
        content = json.loads(request.body)
        customer = Customer.objects.create(**content)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_customer(request, pk):
    if request.method == "GET":
        try:
            customer = Customer.objects.get(id=pk)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer doesn't exist"})
            response.status_code = 404
            return response

    elif request.method == "DELETE":
        try:
            customer = Customer.objects.get(id=pk)
            customer.delete()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer doesn't exist"})
            response.status_code = 404
            return response

    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.get(id=pk)
            props = ["first_name", "last_name", "address", "phone_number"]
            for prop in props:
                if prop in content:
                    setattr(customer, prop, content[prop])
            customer.save()
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except Customer.DoesNotExist:
            response = JsonResponse({"message": "Customer doesn't exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET"])
def api_list_automobileVO(request):
    if request.method == "GET":
        automobiles = AutomobileVO.objects.all()
        return JsonResponse({
            "automobiles": automobiles},
            encoder=AutomobileVOEncoder
        )


@require_http_methods(["GET", "POST"])
def api_list_sales(request, pk=None):
    if request.method == "GET":
        if pk == None:
            sales = Sale.objects.all()
        else:
            sales = Sale.objects.filter(id=pk)
        return JsonResponse(
            {"sales": sales},
            encoder=SaleEncoder,
            safe=False
        )

    else:

        content = json.loads(request.body)
        try:
            salesperson = Salesperson.objects.get(id=content["salesperson"])
            print(content)
            content["salesperson"] = salesperson

        except Salesperson.DoesNotExist:
            response = JsonResponse({"Message": "Salesperson not found add to database"})
            response.status_code = 404
            return response

        try:
            customer = Customer.objects.get(id=content["customer"])
            print(content)
            content["customer"] = customer
        except Customer.DoesNotExist:
            response = JsonResponse({"Message": "Customer not found add to database"})
            response.status_code = 404
            return response

        try:
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            print(content)
            content["automobile"] = automobile
        except AutomobileVO.DoesNotExist:
            response = JsonResponse({"Message": "Vehicle not found add to database"})
            response.status_code = 404
            return response

        # prices = price.objects.get(price=content["price"])
        # print(content)
        # content["price"] = prices

        sale = Sale.objects.create(**content)
        print("content", content)
        return JsonResponse(
            sale,
            encoder=SaleEncoder,
            safe=False,
        )


@require_http_methods(["GET"])
def api_show_sale(request, pk):
    if request.method == "GET":
        try:
            sale = Sale.objects.get(id=pk)
            return JsonResponse(
                sale,
                encoder=SaleEncoder,
                safe=False,
            )
        except Sale.DoesNotExist:
            response = JsonResponse({"message": "Sale doesn't exist"})
            response.status_code = 404
            return response
