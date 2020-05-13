#class BasePermission(object):

#A base class from which all permission classes should inherit.
    # def has_permissions(self, request, view):

        #return True if permissions are granted False otherwise
       # return True

    # def has_object_permission(self, request, view, obj):
        #Return `True` if permission is granted, `False` otherwise.

        #return True

from rest_framework import permissions

class IsOwnerOrNothing(permissions.BasePermission):

    def has_object_permission(self,request, view,obj):

        if request.method in permissions.SAFE_METHODS:
            return True

        return obj.author == request.user