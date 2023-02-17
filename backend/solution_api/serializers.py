from rest_framework.serializers import ModelSerializer
from .models import Solution, Comment, Like


class SolutionSerializer(ModelSerializer):
    class Meta:
        model = Solution
        fields = ["title", "instructions"]

    def create(self, validated_data):
        return Solution.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.instructions = validated_data.get('instructions', instance.instructions)
        instance.created_at = validated_data.get('created_at', instance.created_at)
        instance.save()
        return instance

class CommentSerializer(ModelSerializer):
    class Meta:
        model = Comment
        fields = ["message"]

        def create(self, validated_data):
            return Comment.objects.create(**validated_data)
        
        def update(self, instance, validated_date):
            instance.message = validated_date.get('message', instance.message)

class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = ["__all__"]

# Probably don't need a serializer for likes since there shouldn't be a need for a user to enter info besides a "checkbox"


