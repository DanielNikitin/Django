from django.db import models
from datetime import datetime

director = 'DI'
admin = 'AD'
cook = 'CO'
cashier = 'CA'
cleaner = 'CL'

POSITIONS = [
    (director, 'Директор'),
    (admin, 'Администратор'),
    (cook, 'Повар'),
    (cashier, 'Кассир'),
    (cleaner, 'Уборщик')
]

position = models.CharField(max_length = 2,
                            choices = POSITIONS,
                            default = admin)

class Staff(models.Model):
    full_name = models.CharField(max_length = 255)
    position = models.CharField(max_length = 255,choices=POSITIONS)
    labor_contract = models.IntegerField()

    def get_last_name(self):  # возвращает только фамилию из поля full_name.
        return str(self.full_name).split()[0]


class Product(models.Model):
    name = models.CharField(max_length = 255)
    price = models.FloatField(default = 0.0)


class Order(models.Model):  # наследуемся от класса Model
    time_in = models.DateTimeField(auto_now_add=True)
    time_out = models.DateTimeField(null=True)
    cost = models.FloatField(default=0.0)
    take_away = models.BooleanField(default=False)
    complete = models.BooleanField(default=False)
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE)

    products = models.ManyToManyField(Product, through='ProductOrder')

    def finish_order(self):  # получить время, которое было затрачено на выполнение заказа
        # при завершении заказа, устанавливал бы текущее время в поле time_out.
        self.time_out = datetime.now()
        self.complete = True
        self.save()

    def get_duration(self):  #  возвращающий время выполнения заказа в минутах (округлить до целого).
        # Если заказ ещё не выполнен, то вернуть количество минут с начала выполнения заказа.
        if self.complete:  # если завершён, возвращаем разность объектов
            return (self.time_out - self.time_in).total_seconds() // 60
        else:  # если ещё нет, то сколько длится выполнение
            return (datetime.now() - self.time_in).total_seconds() // 60

class ProductOrder(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    amount = models.IntegerField(default=1)

    def product_sum(self):  # возвращать стоимость продуктов (product) в зависимости от их количества (amount).
        product_price = self.product.price
        return product_price * self.amount

    @property
    def amount(self):
        return self._amount

    @amount.setter
    def amount(self, value):
        self._amount = int(value) if value >= 0 else 0
        self.save()