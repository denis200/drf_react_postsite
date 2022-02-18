
from unicodedata import name
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls'), name="blog"),
    path('api/', include('blog_api.urls'), name="blog_api"),
    
]