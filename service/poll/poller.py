import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "service_project.settings")
django.setup()

# Import models from service_rest, here. Ignore vs-code error hinting
# from service_rest.models import Something
from service_rest.models import AutomobileVO

def poll(repeat=True):
    while True:
        print('Services poller polling 1 for data')
        try:
            response = requests.get("http://project-beta-inventory-api-1:8000/api/automobiles/")
            content = json.loads(response.content)
            for auto in content["autos"]:
                AutomobileVO.objects.update_or_create(
                    import_href = auto["href"],
                    defaults={
                        "vin": auto["vin"],
                    }
                )
            pass

        except Exception as e:
            print(e, file=sys.stderr)

        if (not repeat):
            break

        time.sleep(5)


if __name__ == "__main__":
    poll()
