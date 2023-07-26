from django.urls import path
from .views import api_list_salesperson, api_list_customers, api_list_automobileVO, api_show_salesperson, api_show_customer, api_list_sales, api_show_sale

urlpatterns = [
    path("salespeople/", api_list_salesperson, name="api_list_salesperson"),
    path("customers/", api_list_customers, name="api_create_customer" ),
    path("automobiles/", api_list_automobileVO, name="api_list_automobiles" ),
    path("salespeople/<int:pk>/", api_show_salesperson, name="api_show_salesperson"),
    path("customers/<int:pk>/", api_show_customer, name="api_show_customer"),
    path("sales/<int:pk>", api_show_sale, name="api_show_sale"),
    path("sales/", api_list_sales, name="api_list_sales"),
    path("salesrecords/create", api_list_sales, name="api_create_sales"),
]
