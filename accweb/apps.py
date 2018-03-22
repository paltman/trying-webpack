from importlib import import_module

from django.apps import AppConfig as BaseAppConfig


class AppConfig(BaseAppConfig):

    name = "accweb"

    def ready(self):
        import_module("accweb.receivers")
