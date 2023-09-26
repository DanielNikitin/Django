#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys

# pip3 install django
# django-admin startproject dcg .  # for create project with normal folder
# python manage.py migrate  # for database
# python manage.py createsuperuser
# python manage.py runserver


def main():
    """Run administrative tasks."""
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dcg.settings')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == '__main__':
    main()
