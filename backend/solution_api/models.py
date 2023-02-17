from django.db import models

# Create your models here.
from django.utils import timezone
from django.contrib.auth.models import User
# Create your models here.

# user class will have username, password, email, datejoined

class Solution(models.Model):
    title = models.CharField(max_length=200)
    instructions = models.CharField(max_length=255)
    created_at = models.DateTimeField(default=timezone.now)
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title

class Comment(models.Model):
    message = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    solution = models.ForeignKey(Solution, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return f"By {self.author}: {self.message[0:20]}..."

# consider a reply model?? or Likes model to get 
class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    solution = models.ForeignKey(Solution, on_delete=models.CASCADE)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self) -> str:
        return f"{self.user} liked {self.solution}"